import React, { useState, useEffect, useRef } from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { Search, X, Check, ShieldCheck, ChevronDown } from 'lucide-react';

interface PersonMemberItem {
  name: string;
  rollNumber: string;
  role: 'leader' | 'member';
  personId?: string;
}

export const PersonIdentitySelector: React.FC = () => {
  const { activeTeam, activePerson, selectPersonIdentity } = useProjectContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [memberIdentities, setMemberIdentities] = useState<PersonMemberItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Build members list from activeTeam
  useEffect(() => {
    if (!activeTeam) return;

    const list: PersonMemberItem[] = [];

    // Leader
    if (activeTeam.leader) {
      list.push({
        name: activeTeam.leader.name,
        rollNumber: activeTeam.leader.rollNumber,
        role: 'leader'
      });
    }

    // Members
    if (activeTeam.members && Array.isArray(activeTeam.members)) {
      activeTeam.members.forEach(m => {
        list.push({
          name: m.name,
          rollNumber: m.rollNumber,
          role: 'member'
        });
      });
    }

    // Associate cached/known personId for each member from localStorage
    const updated = list.map(item => {
      let pId: string | undefined = undefined;
      if (activePerson && activePerson.rollNumber.toLowerCase() === item.rollNumber.toLowerCase()) {
        pId = activePerson.personId;
      } else {
        const compositeKey = `abh_identity_${activeTeam.referenceId.replace(/[^a-zA-Z0-9]/g, '')}_${item.rollNumber.replace(/[^a-zA-Z0-9]/g, '')}`;
        const cached = localStorage.getItem(compositeKey);
        if (cached) {
          try {
            const parsed = JSON.parse(cached);
            pId = parsed.personId;
          } catch (e) {}
        }
      }
      return { ...item, personId: pId };
    });

    setMemberIdentities(updated);
  }, [activeTeam, activePerson]);

  if (!activeTeam) return null;

  // Filter members based on search query (name, roll number, person ID)
  const filtered = memberIdentities.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const nameMatch = item.name.toLowerCase().includes(q);
    const rollMatch = item.rollNumber.toLowerCase().includes(q);
    const idMatch = item.personId ? item.personId.toLowerCase().includes(q) : false;
    return nameMatch || rollMatch || idMatch;
  });

  const handleSelect = async (item: PersonMemberItem) => {
    setIsOpen(false);
    setSearchQuery('');
    await selectPersonIdentity(item.name, item.rollNumber, item.role);
  };

  const isCurrentActive = (item: PersonMemberItem) => {
    if (!activePerson) {
      return item.role === 'leader' && item.name === activeTeam.leader?.name;
    }
    return activePerson.rollNumber.toLowerCase() === item.rollNumber.toLowerCase();
  };

  return (
    <div style={{ width: '100%', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, letterSpacing: '0.05em' }}>
          ACTIVE PERSON IDENTITY
        </span>
        {activePerson && (
          <span style={{ fontSize: '0.725rem', color: 'var(--primary)', fontWeight: 700, background: 'var(--primary-light)', padding: '0.2rem 0.5rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            <ShieldCheck size={13} /> Private Storage Active ✓
          </span>
        )}
      </div>

      {/* SEARCH INPUT & DROPDOWN CONTAINER */}
      <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--bg-subtle)',
            border: isOpen ? '1px solid var(--primary)' : '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md)',
            padding: '0.45rem 0.75rem',
            boxShadow: isOpen ? '0 0 0 2px var(--primary-light)' : 'none',
            transition: 'all 0.15s ease'
          }}
        >
          <Search size={16} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search name, roll number or Person ID..."
            value={searchQuery}
            onFocus={() => setIsOpen(true)}
            onChange={e => {
              setSearchQuery(e.target.value);
              if (!isOpen) setIsOpen(true);
            }}
            style={{
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              width: '100%',
              minWidth: 0
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Clear search"
            >
              <X size={15} />
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ChevronDown size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }} />
          </button>
        </div>

        {/* SEARCH RESULTS DROPDOWN */}
        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: 'calc(100% + 4px)',
              left: 0,
              right: 0,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 100,
              maxHeight: '280px',
              overflowY: 'auto',
              padding: '0.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem'
            }}
          >
            {filtered.length === 0 ? (
              <div style={{ padding: '0.85rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                No person found
              </div>
            ) : (
              filtered.map((item, idx) => {
                const active = isCurrentActive(item);
                return (
                  <div
                    key={item.rollNumber + idx}
                    onClick={() => handleSelect(item)}
                    style={{
                      padding: '0.65rem 0.85rem',
                      borderRadius: 'var(--radius-sm)',
                      background: active ? 'var(--primary-light)' : 'var(--bg-subtle)',
                      border: active ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      transition: 'background 0.15s'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', minWidth: 0, flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ fontSize: '0.9rem' }}>👤</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {item.name}
                        </span>
                        {active && (
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', background: 'white', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>
                            Active
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                        <strong style={{ textTransform: 'capitalize' }}>{item.role}</strong> • Roll: {item.rollNumber}
                      </div>
                      {item.personId && (
                        <div style={{ marginTop: '0.15rem' }}>
                          <span className="badge-code" style={{ fontSize: '0.725rem', padding: '0.1rem 0.4rem' }}>
                            ID: {item.personId}
                          </span>
                        </div>
                      )}
                    </div>

                    {active && <Check size={16} color="var(--primary)" style={{ flexShrink: 0 }} />}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      {/* CURRENTLY SELECTED IDENTITY SUMMARY CARD */}
      {activePerson && (
        <div
          style={{
            marginTop: '0.65rem',
            padding: '0.65rem 0.85rem',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontSize: '1.1rem' }}>👤</span>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {activePerson.name}
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {activePerson.role === 'leader' ? 'Leader' : 'Member'} — Roll: {activePerson.rollNumber}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="badge-code" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
              ID: {activePerson.personId}
            </span>
            <span style={{ fontSize: '0.725rem', color: 'var(--primary)', fontWeight: 700 }}>
              ✓ Private Storage Active
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
