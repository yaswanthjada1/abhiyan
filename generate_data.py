import os, sys, re, json, pypdf

downloads = r'C:\Users\Sandeep\Downloads'
files = [os.path.join(downloads, f) for f in os.listdir(downloads) if '50 MINI PROJECT' in f]
if not files:
    sys.exit('PDF file not found')

pdf_path = files[0]
reader = pypdf.PdfReader(pdf_path)
text = '\n'.join([page.extract_text() for page in reader.pages])

pattern = r'([A-F]\d+)\.\s*(.*?)\nProblem:\s*(.*?)\nMath Used:\s*(.*?)\nReal Connection:\s*(.*?)(?=\n[A-F]\d+\.|\n[🅰🅱🅲🅾🅳🅴🅵]|\Z)'
matches = re.findall(pattern, text, re.DOTALL)

print(f'Total matched: {len(matches)}')

category_map = {
    'A': 'Rank & Linear Systems',
    'B': 'Eigenvalues & Eigenvectors',
    'C': 'Cayley-Hamilton & Diagonalization',
    'D': 'Quadratic Forms',
    'E': 'Singular Value Decomposition',
    'F': 'Mixed / Multi-Topic'
}

difficulty_map = {
    'A1': 'Intermediate', 'A2': 'Beginner', 'A3': 'Intermediate', 'A4': 'Intermediate', 'A5': 'Beginner', 'A6': 'Intermediate', 'A7': 'Intermediate', 'A8': 'Advanced',
    'B1': 'Advanced', 'B2': 'Intermediate', 'B3': 'Advanced', 'B4': 'Intermediate', 'B5': 'Intermediate', 'B6': 'Beginner', 'B7': 'Intermediate', 'B8': 'Intermediate', 'B9': 'Advanced', 'B10': 'Intermediate',
    'C1': 'Intermediate', 'C2': 'Intermediate', 'C3': 'Intermediate', 'C4': 'Beginner', 'C5': 'Advanced', 'C6': 'Beginner', 'C7': 'Intermediate', 'C8': 'Intermediate',
    'D1': 'Advanced', 'D2': 'Intermediate', 'D3': 'Intermediate', 'D4': 'Intermediate', 'D5': 'Advanced', 'D6': 'Intermediate', 'D7': 'Beginner', 'D8': 'Intermediate',
    'E1': 'Intermediate', 'E2': 'Advanced', 'E3': 'Intermediate', 'E4': 'Intermediate', 'E5': 'Advanced', 'E6': 'Advanced', 'E7': 'Intermediate', 'E8': 'Intermediate',
    'F1': 'Beginner', 'F2': 'Intermediate', 'F3': 'Intermediate', 'F4': 'Advanced', 'F5': 'Advanced', 'F6': 'Intermediate', 'F7': 'Intermediate', 'F8': 'Intermediate'
}

projects_list = []

for code, raw_title, prob, math, real in matches:
    cat_letter = code[0]
    category = category_map.get(cat_letter, 'Mixed / Multi-Topic')
    title = raw_title.strip()
    title = re.sub(r'[\U00010000-\U0010ffff]', '', title).strip()
    problem_text = prob.strip().replace('\n', ' ')
    math_used_list = [m.strip() for m in math.strip().split(',') if m.strip()]
    real_world = real.strip().replace('\n', ' ')
    difficulty = difficulty_map.get(code, 'Intermediate')

    initial_count = 0
    if code in ['A1', 'B2', 'C3']:
        initial_count = 1
    elif code in ['A3', 'B5']:
        initial_count = 2
    elif code in ['E1', 'F4']:
        initial_count = 3

    status = 'full' if initial_count >= 3 else 'available'
    short_desc = problem_text[:140] + ('...' if len(problem_text) > 140 else '')

    skills = ['Linear Algebra', 'Matrix Operations', 'Python / JS']
    if 'Gauss' in math or 'linear' in math:
        skills.append('Gaussian Elimination')
    if 'Eigen' in math or 'PCA' in math:
        skills.append('Eigenvalues')
    if 'SVD' in math:
        skills.append('Low-Rank SVD')

    proj_obj = {
        'projectId': code,
        'projectCode': code,
        'title': title,
        'category': category,
        'shortDescription': short_desc,
        'problemStatement': problem_text,
        'mathUsed': math_used_list,
        'realWorldConnection': real_world,
        'difficulty': difficulty,
        'estimatedDuration': 10,
        'requiredSkills': list(set(skills)),
        'recommendedTechStack': {
            'frontend': 'React / HTML / CSS',
            'backend': 'Python / Node.js',
            'math': 'NumPy / SymPy',
            'charts': 'Recharts / Chart.js',
            'db': 'Cloud Firestore'
        },
        'selectionLimit': 3,
        'selectedTeamCount': initial_count,
        'status': status,
        'implementationGuide': [
            {'stepNumber': 1, 'title': 'Understand the Problem', 'tasks': ['Read problem statement', 'Identify inputs & outputs', 'Identify equations'], 'deliverable': 'Problem analysis doc'},
            {'stepNumber': 2, 'title': 'Mathematical Model', 'tasks': ['Define variables', 'Construct equations', 'Create matrix A & vector B'], 'deliverable': 'Mathematical model'},
            {'stepNumber': 3, 'title': 'Algorithm', 'tasks': [f'Implement {math_used_list[0]}', 'Test with sample values', 'Verify results'], 'deliverable': 'Working algorithm'},
            {'stepNumber': 4, 'title': 'Frontend Interface', 'tasks': ['Create UI', 'Add input fields', 'Add visualization'], 'deliverable': 'Working UI'},
            {'stepNumber': 5, 'title': 'Integration', 'tasks': ['Connect frontend/backend', 'Handle errors'], 'deliverable': 'Integrated app'},
            {'stepNumber': 6, 'title': 'Testing', 'tasks': ['Test normal cases', 'Test edge cases'], 'deliverable': 'Test report'},
            {'stepNumber': 7, 'title': 'Documentation', 'tasks': ['Theory writeup', 'Methodology', 'Results'], 'deliverable': 'Final report'},
            {'stepNumber': 8, 'title': 'Final Presentation', 'tasks': ['Prepare demo', 'Prepare slide deck', 'Viva preparation'], 'deliverable': 'Slide deck'}
        ],
        'dailyTasks': [
            {'day': 1, 'title': 'Day 1 — Problem Understanding', 'objectives': ['Read & analyze statement'], 'tasks': [{'id': f'd1-{code}-1', 'text': 'Read problem statement'}, {'id': f'd1-{code}-2', 'text': 'Identify inputs and outputs'}], 'expectedOutput': 'Requirements Doc'},
            {'day': 2, 'title': 'Day 2 — Mathematical Modelling', 'objectives': ['Formulate matrix equations'], 'tasks': [{'id': f'd2-{code}-1', 'text': f'Construct system for {title}'}, {'id': f'd2-{code}-2', 'text': 'Verify rank condition'}], 'expectedOutput': 'Matrix Model'},
            {'day': 3, 'title': 'Day 3 — Algorithm Development', 'objectives': ['Code numerical engine'], 'tasks': [{'id': f'd3-{code}-1', 'text': f'Implement {math_used_list[0]}'}], 'expectedOutput': 'Algorithm Code'},
            {'day': 4, 'title': 'Day 4 — Implementation', 'objectives': ['Build core backend'], 'tasks': [{'id': f'd4-{code}-1', 'text': 'Build calculation engine'}], 'expectedOutput': 'Math Engine'},
            {'day': 5, 'title': 'Day 5 — Frontend Setup', 'objectives': ['Build user interface'], 'tasks': [{'id': f'd5-{code}-1', 'text': 'Design input controls'}], 'expectedOutput': 'Frontend App'},
            {'day': 6, 'title': 'Day 6 — Integration', 'objectives': ['Connect components'], 'tasks': [{'id': f'd6-{code}-1', 'text': 'Link UI to math engine'}], 'expectedOutput': 'Integrated App'},
            {'day': 7, 'title': 'Day 7 — Testing', 'objectives': ['Verify accuracy'], 'tasks': [{'id': f'd7-{code}-1', 'text': 'Test edge cases'}], 'expectedOutput': 'Test Results'},
            {'day': 8, 'title': 'Day 8 — Visualization', 'objectives': ['Create charts'], 'tasks': [{'id': f'd8-{code}-1', 'text': 'Add visual plots'}], 'expectedOutput': 'Interactive Charts'},
            {'day': 9, 'title': 'Day 9 — Documentation', 'objectives': ['Write report'], 'tasks': [{'id': f'd9-{code}-1', 'text': 'Prepare mini project report'}], 'expectedOutput': 'Project Report'},
            {'day': 10, 'title': 'Day 10 — Final Presentation', 'objectives': ['Viva & PPT'], 'tasks': [{'id': f'd10-{code}-1', 'text': 'Prepare 10-slide presentation'}], 'expectedOutput': 'PPT & Demo'}
        ],
        'prompts': [
            {'id': f'p-{code}-1', 'title': '1. Project Understanding Prompt', 'category': 'Understanding', 'promptText': f'You are helping build the mini-project "{code}: {title}". Explain the problem statement, identify the key input parameters, and describe the expected user interface output.'},
            {'id': f'p-{code}-2', 'title': '2. Mathematics Formulation Prompt', 'category': 'Mathematics', 'promptText': f'Explain the mathematical model for "{title}" using {", ".join(math_used_list)}. Show step-by-step matrix notation.'},
            {'id': f'p-{code}-3', 'title': '3. Coding Prompt', 'category': 'Coding', 'promptText': f'Write a Python/JavaScript function to implement {math_used_list[0]} for "{title}".'},
            {'id': f'p-{code}-4', 'title': '4. Debugging Prompt', 'category': 'Debugging', 'promptText': f'Analyze potential edge cases in "{title}" such as zero determinants or singular matrices. Provide defensive checks.'},
            {'id': f'p-{code}-5', 'title': '5. Testing Prompt', 'category': 'Testing', 'promptText': f'Provide sample test cases and expected numerical outputs for verifying "{title}".'},
            {'id': f'p-{code}-6', 'title': '6. Documentation Prompt', 'category': 'Documentation', 'promptText': f'Write a mini-project report for "{title}" including Introduction, Mathematical Theory, Implementation, and Results.'},
            {'id': f'p-{code}-7', 'title': '7. PPT Outline Prompt', 'category': 'PPT', 'promptText': f'Create a 10-slide presentation outline for "{title}" suitable for college evaluation.'},
            {'id': f'p-{code}-8', 'title': '8. Viva Preparation Prompt', 'category': 'Viva', 'promptText': f'List top 10 viva voce questions and answers for mini project "{code}: {title}" focusing on {", ".join(math_used_list)}.'}
        ],
        'resources': [
            {'title': f'{title} Reference', 'type': 'Doc', 'url': 'https://wikipedia.org', 'description': 'Linear algebra reference documentation.'}
        ]
    }

    projects_list.append(proj_obj)

print(f'Structured {len(projects_list)} projects for Firebase!')

os.makedirs('src/data', exist_ok=True)
ts_content = f'''import {{ Project }} from '../types/project';

export const INITIAL_PROJECTS: Project[] = {json.dumps(projects_list, indent=2)};
'''

with open('src/data/projectsData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print('Updated src/data/projectsData.ts successfully!')
