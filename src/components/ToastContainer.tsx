import React from 'react';
import { useProjectContext } from '../context/ProjectContext';
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { notifications, removeNotification } = useProjectContext();

  if (notifications.length === 0) return null;

  return (
    <div className="toasts-container">
      {notifications.map(n => (
        <div key={n.id} className={`toast toast-${n.type}`}>
          {n.type === 'success' && <CheckCircle2 size={20} color="var(--success)" />}
          {n.type === 'warning' && <AlertTriangle size={20} color="var(--warning)" />}
          {n.type === 'danger' && <AlertCircle size={20} color="var(--danger)" />}
          {n.type === 'info' && <Info size={20} color="var(--primary)" />}

          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.15rem' }}>{n.title}</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{n.message}</p>
          </div>

          <button
            onClick={() => removeNotification(n.id)}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
