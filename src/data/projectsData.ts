import { Project } from '../types/project';

export const INITIAL_PROJECTS: Project[] = [
  {
    "projectId": "A1",
    "projectCode": "A1",
    "title": "Hospital Ward Staffing Optimizer",
    "category": "Rank & Linear Systems",
    "shortDescription": "A hospital has 3 wards needing nurses. Ward A needs 20 total staff-hours, Ward B needs 25,  Ward C needs 15. You have 3 types of staff: Seni...",
    "problemStatement": "A hospital has 3 wards needing nurses. Ward A needs 20 total staff-hours, Ward B needs 25,  Ward C needs 15. You have 3 types of staff: Senior nurses (cost Rs.800/hr), Junior nurses (Rs.400/hr),  Assistants (Rs.200/hr). Each type works different hours per ward. Set up AX=B, solve by Gauss  elimination, find the cheapest staffing mix.",
    "mathUsed": [
      "System of linear equations",
      "Gauss elimination"
    ],
    "realWorldConnection": "Hospital resource allocation \u2014 every hospital solves this daily",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Gaussian Elimination",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 1,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement System of linear equations",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A1-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A1-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A1-1",
            "text": "Construct system for Hospital Ward Staffing Optimizer"
          },
          {
            "id": "d2-A1-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A1-1",
            "text": "Implement System of linear equations"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A1-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A1-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A1-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A1-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A1-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A1-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A1-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A1-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A1: Hospital Ward Staffing Optimizer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A1-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Hospital Ward Staffing Optimizer\" using System of linear equations, Gauss elimination. Show step-by-step matrix notation."
      },
      {
        "id": "p-A1-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement System of linear equations for \"Hospital Ward Staffing Optimizer\"."
      },
      {
        "id": "p-A1-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Hospital Ward Staffing Optimizer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A1-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Hospital Ward Staffing Optimizer\"."
      },
      {
        "id": "p-A1-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Hospital Ward Staffing Optimizer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A1-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Hospital Ward Staffing Optimizer\" suitable for college evaluation."
      },
      {
        "id": "p-A1-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A1: Hospital Ward Staffing Optimizer\" focusing on System of linear equations, Gauss elimination."
      }
    ],
    "resources": [
      {
        "title": "Hospital Ward Staffing Optimizer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A2",
    "projectCode": "A2",
    "title": "Bridge Load Distribution Calculator",
    "category": "Rank & Linear Systems",
    "shortDescription": "3 supports hold a bridge. Forces at each support depend on loads at 3 points. Model as 3  equations, 3 unknowns (reaction forces). Solve the...",
    "problemStatement": "3 supports hold a bridge. Forces at each support depend on loads at 3 points. Model as 3  equations, 3 unknowns (reaction forces). Solve the system. Then change one load (a truck moves)  and show how all 3 reactions change.",
    "mathUsed": [
      "AX=B",
      "unique solution",
      "matrix inverse"
    ],
    "realWorldConnection": "Structural engineering \u2014 every building's foundation is designed this way",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement AX=B",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A2-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A2-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A2-1",
            "text": "Construct system for Bridge Load Distribution Calculator"
          },
          {
            "id": "d2-A2-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A2-1",
            "text": "Implement AX=B"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A2-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A2-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A2-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A2-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A2-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A2-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A2-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A2-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A2: Bridge Load Distribution Calculator\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A2-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Bridge Load Distribution Calculator\" using AX=B, unique solution, matrix inverse. Show step-by-step matrix notation."
      },
      {
        "id": "p-A2-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement AX=B for \"Bridge Load Distribution Calculator\"."
      },
      {
        "id": "p-A2-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Bridge Load Distribution Calculator\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A2-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Bridge Load Distribution Calculator\"."
      },
      {
        "id": "p-A2-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Bridge Load Distribution Calculator\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A2-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Bridge Load Distribution Calculator\" suitable for college evaluation."
      },
      {
        "id": "p-A2-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A2: Bridge Load Distribution Calculator\" focusing on AX=B, unique solution, matrix inverse."
      }
    ],
    "resources": [
      {
        "title": "Bridge Load Distribution Calculator Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A3",
    "projectCode": "A3",
    "title": "Kirchhoff's Circuit Solver",
    "category": "Rank & Linear Systems",
    "shortDescription": "Given a circuit with 3 loops and 3 unknown currents, write the 3 loop equations using  Kirchhoff's voltage law. Solve using Gauss-Jordan. Di...",
    "problemStatement": "Given a circuit with 3 loops and 3 unknown currents, write the 3 loop equations using  Kirchhoff's voltage law. Solve using Gauss-Jordan. Display the current in each loop and verify power  conservation.",
    "mathUsed": [
      "Gauss-Jordan method",
      "augmented matrix"
    ],
    "realWorldConnection": "Every circuit in your phone, charger, and laptop is solved this way",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Gaussian Elimination",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 2,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Gauss-Jordan method",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A3-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A3-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A3-1",
            "text": "Construct system for Kirchhoff's Circuit Solver"
          },
          {
            "id": "d2-A3-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A3-1",
            "text": "Implement Gauss-Jordan method"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A3-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A3-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A3-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A3-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A3-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A3-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A3-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A3-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A3: Kirchhoff's Circuit Solver\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A3-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Kirchhoff's Circuit Solver\" using Gauss-Jordan method, augmented matrix. Show step-by-step matrix notation."
      },
      {
        "id": "p-A3-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Gauss-Jordan method for \"Kirchhoff's Circuit Solver\"."
      },
      {
        "id": "p-A3-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Kirchhoff's Circuit Solver\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A3-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Kirchhoff's Circuit Solver\"."
      },
      {
        "id": "p-A3-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Kirchhoff's Circuit Solver\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A3-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Kirchhoff's Circuit Solver\" suitable for college evaluation."
      },
      {
        "id": "p-A3-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A3: Kirchhoff's Circuit Solver\" focusing on Gauss-Jordan method, augmented matrix."
      }
    ],
    "resources": [
      {
        "title": "Kirchhoff's Circuit Solver Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A4",
    "projectCode": "A4",
    "title": "Investment Portfolio Allocator",
    "category": "Rank & Linear Systems",
    "shortDescription": "You have Rs.1,00,000 to invest in 3 options: stocks (12% return), bonds (6%), fixed deposit  (4%). You want total return of Rs.8000, and bon...",
    "problemStatement": "You have Rs.1,00,000 to invest in 3 options: stocks (12% return), bonds (6%), fixed deposit  (4%). You want total return of Rs.8000, and bonds must be twice the fixed deposit. Set up AX=B. Find  allocation. If no solution exists, explain why (rank analysis).",
    "mathUsed": [
      "Consistent/inconsistent systems",
      "rank"
    ],
    "realWorldConnection": "Financial advisors solve this exact problem daily",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Consistent/inconsistent systems",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A4-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A4-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A4-1",
            "text": "Construct system for Investment Portfolio Allocator"
          },
          {
            "id": "d2-A4-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A4-1",
            "text": "Implement Consistent/inconsistent systems"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A4-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A4-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A4-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A4-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A4-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A4-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A4-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A4-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A4: Investment Portfolio Allocator\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A4-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Investment Portfolio Allocator\" using Consistent/inconsistent systems, rank. Show step-by-step matrix notation."
      },
      {
        "id": "p-A4-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Consistent/inconsistent systems for \"Investment Portfolio Allocator\"."
      },
      {
        "id": "p-A4-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Investment Portfolio Allocator\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A4-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Investment Portfolio Allocator\"."
      },
      {
        "id": "p-A4-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Investment Portfolio Allocator\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A4-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Investment Portfolio Allocator\" suitable for college evaluation."
      },
      {
        "id": "p-A4-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A4: Investment Portfolio Allocator\" focusing on Consistent/inconsistent systems, rank."
      }
    ],
    "resources": [
      {
        "title": "Investment Portfolio Allocator Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A5",
    "projectCode": "A5",
    "title": "Chemical Reaction Balancer",
    "category": "Rank & Linear Systems",
    "shortDescription": "Balance the chemical equation: a\u00b7Fe\u2082O\u2083 + b\u00b7CO \u2192 c\u00b7Fe + d\u00b7CO\u2082. Set up the atom balance  equations (Fe, O, C). This gives a system of linear e...",
    "problemStatement": "Balance the chemical equation: a\u00b7Fe\u2082O\u2083 + b\u00b7CO \u2192 c\u00b7Fe + d\u00b7CO\u2082. Set up the atom balance  equations (Fe, O, C). This gives a system of linear equations. Solve using row reduction. Show the  balanced equation.",
    "mathUsed": [
      "Homogeneous system",
      "infinite solutions",
      "free parameter"
    ],
    "realWorldConnection": "Every chemical equation in every textbook is balanced using linear algebra",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Homogeneous system",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A5-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A5-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A5-1",
            "text": "Construct system for Chemical Reaction Balancer"
          },
          {
            "id": "d2-A5-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A5-1",
            "text": "Implement Homogeneous system"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A5-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A5-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A5-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A5-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A5-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A5-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A5-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A5-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A5: Chemical Reaction Balancer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A5-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Chemical Reaction Balancer\" using Homogeneous system, infinite solutions, free parameter. Show step-by-step matrix notation."
      },
      {
        "id": "p-A5-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Homogeneous system for \"Chemical Reaction Balancer\"."
      },
      {
        "id": "p-A5-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Chemical Reaction Balancer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A5-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Chemical Reaction Balancer\"."
      },
      {
        "id": "p-A5-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Chemical Reaction Balancer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A5-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Chemical Reaction Balancer\" suitable for college evaluation."
      },
      {
        "id": "p-A5-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A5: Chemical Reaction Balancer\" focusing on Homogeneous system, infinite solutions, free parameter."
      }
    ],
    "resources": [
      {
        "title": "Chemical Reaction Balancer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A6",
    "projectCode": "A6",
    "title": "GPS Trilateration Simulator",
    "category": "Rank & Linear Systems",
    "shortDescription": "3 cell towers detect your phone at distances d\u2081, d\u2082, d\u2083. Each distance gives a circle equation.  Subtract pairs to get linear equations. Sol...",
    "problemStatement": "3 cell towers detect your phone at distances d\u2081, d\u2082, d\u2083. Each distance gives a circle equation.  Subtract pairs to get linear equations. Solve for (x,y) \u2014 your location. Show the 3 circles and your  position on a map.",
    "mathUsed": [
      "System of linear equations (from nonlinear origins)"
    ],
    "realWorldConnection": "This IS how GPS works \u2014 your phone solves this every second",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Gaussian Elimination",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement System of linear equations (from nonlinear origins)",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A6-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A6-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A6-1",
            "text": "Construct system for GPS Trilateration Simulator"
          },
          {
            "id": "d2-A6-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A6-1",
            "text": "Implement System of linear equations (from nonlinear origins)"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A6-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A6-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A6-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A6-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A6-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A6-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A6-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A6-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A6: GPS Trilateration Simulator\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A6-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"GPS Trilateration Simulator\" using System of linear equations (from nonlinear origins). Show step-by-step matrix notation."
      },
      {
        "id": "p-A6-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement System of linear equations (from nonlinear origins) for \"GPS Trilateration Simulator\"."
      },
      {
        "id": "p-A6-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"GPS Trilateration Simulator\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A6-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"GPS Trilateration Simulator\"."
      },
      {
        "id": "p-A6-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"GPS Trilateration Simulator\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A6-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"GPS Trilateration Simulator\" suitable for college evaluation."
      },
      {
        "id": "p-A6-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A6: GPS Trilateration Simulator\" focusing on System of linear equations (from nonlinear origins)."
      }
    ],
    "resources": [
      {
        "title": "GPS Trilateration Simulator Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A7",
    "projectCode": "A7",
    "title": "Factory Production Planner",
    "category": "Rank & Linear Systems",
    "shortDescription": "A factory makes 3 products using 3 machines. Each machine has limited hours. Each  product needs different time on each machine. Set up the ...",
    "problemStatement": "A factory makes 3 products using 3 machines. Each machine has limited hours. Each  product needs different time on each machine. Set up the system. Find production quantities. If the  system is inconsistent, identify which machine is the bottleneck.",
    "mathUsed": [
      "Consistency",
      "rank analysis",
      "practical interpretation"
    ],
    "realWorldConnection": "Every manufacturing plant \u2014 from Tata Steel to your local bakery",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Consistency",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A7-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A7-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A7-1",
            "text": "Construct system for Factory Production Planner"
          },
          {
            "id": "d2-A7-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A7-1",
            "text": "Implement Consistency"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A7-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A7-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A7-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A7-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A7-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A7-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A7-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A7-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A7: Factory Production Planner\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A7-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Factory Production Planner\" using Consistency, rank analysis, practical interpretation. Show step-by-step matrix notation."
      },
      {
        "id": "p-A7-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Consistency for \"Factory Production Planner\"."
      },
      {
        "id": "p-A7-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Factory Production Planner\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A7-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Factory Production Planner\"."
      },
      {
        "id": "p-A7-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Factory Production Planner\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A7-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Factory Production Planner\" suitable for college evaluation."
      },
      {
        "id": "p-A7-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A7: Factory Production Planner\" focusing on Consistency, rank analysis, practical interpretation."
      }
    ],
    "resources": [
      {
        "title": "Factory Production Planner Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "A8",
    "projectCode": "A8",
    "title": "Student Grade Curving System",
    "category": "Rank & Linear Systems",
    "shortDescription": "3 professors teaching the same subject give exams with different difficulty. You want to  scale grades so the average and standard deviation...",
    "problemStatement": "3 professors teaching the same subject give exams with different difficulty. You want to  scale grades so the average and standard deviation match across all 3. Set up 3 equations (for mean,  variance, and a boundary condition). Solve the scaling system.",
    "mathUsed": [
      "3\u00d73 system",
      "Gauss elimination"
    ],
    "realWorldConnection": "Universities use this for normalization across batches",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Gaussian Elimination",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement 3\u00d73 system",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-A8-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-A8-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-A8-1",
            "text": "Construct system for Student Grade Curving System"
          },
          {
            "id": "d2-A8-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-A8-1",
            "text": "Implement 3\u00d73 system"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-A8-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-A8-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-A8-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-A8-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-A8-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-A8-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-A8-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-A8-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"A8: Student Grade Curving System\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-A8-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Student Grade Curving System\" using 3\u00d73 system, Gauss elimination. Show step-by-step matrix notation."
      },
      {
        "id": "p-A8-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement 3\u00d73 system for \"Student Grade Curving System\"."
      },
      {
        "id": "p-A8-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Student Grade Curving System\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-A8-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Student Grade Curving System\"."
      },
      {
        "id": "p-A8-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Student Grade Curving System\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-A8-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Student Grade Curving System\" suitable for college evaluation."
      },
      {
        "id": "p-A8-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"A8: Student Grade Curving System\" focusing on 3\u00d73 system, Gauss elimination."
      }
    ],
    "resources": [
      {
        "title": "Student Grade Curving System Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B1",
    "projectCode": "B1",
    "title": "Building Vibration Mode Analyzer",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "Model a 3-floor building as a mass-spring system. The stiffness matrix K and mass matrix M  give a generalized eigenvalue problem: Kv = \u03c9\u00b2Mv...",
    "problemStatement": "Model a 3-floor building as a mass-spring system. The stiffness matrix K and mass matrix M  give a generalized eigenvalue problem: Kv = \u03c9\u00b2Mv. Find the 3 natural frequencies (eigenvalues) and 3  mode shapes (eigenvectors). Show how each floor moves in each mode.",
    "mathUsed": [
      "Eigenvalues",
      "eigenvectors (generalized)"
    ],
    "realWorldConnection": "Earthquake engineering \u2014 this determines if a building survives",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B1-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B1-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B1-1",
            "text": "Construct system for Building Vibration Mode Analyzer"
          },
          {
            "id": "d2-B1-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B1-1",
            "text": "Implement Eigenvalues"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B1-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B1-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B1-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B1-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B1-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B1-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B1-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B1-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B1: Building Vibration Mode Analyzer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B1-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Building Vibration Mode Analyzer\" using Eigenvalues, eigenvectors (generalized). Show step-by-step matrix notation."
      },
      {
        "id": "p-B1-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues for \"Building Vibration Mode Analyzer\"."
      },
      {
        "id": "p-B1-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Building Vibration Mode Analyzer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B1-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Building Vibration Mode Analyzer\"."
      },
      {
        "id": "p-B1-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Building Vibration Mode Analyzer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B1-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Building Vibration Mode Analyzer\" suitable for college evaluation."
      },
      {
        "id": "p-B1-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B1: Building Vibration Mode Analyzer\" focusing on Eigenvalues, eigenvectors (generalized)."
      }
    ],
    "resources": [
      {
        "title": "Building Vibration Mode Analyzer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B2",
    "projectCode": "B2",
    "title": "Google PageRank Mini",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "Create a tiny web of 5 pages with links between them. Build the link matrix (transition  probabilities). The PageRank vector is the eigenvec...",
    "problemStatement": "Create a tiny web of 5 pages with links between them. Build the link matrix (transition  probabilities). The PageRank vector is the eigenvector with eigenvalue 1. Find it using power  iteration. Show which page is \"most important.\"",
    "mathUsed": [
      "Eigenvalue = 1",
      "eigenvector = steady state",
      "power method"
    ],
    "realWorldConnection": "Google's original algorithm \u2014 literally eigenvectors",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 1,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalue = 1",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B2-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B2-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B2-1",
            "text": "Construct system for Google PageRank Mini"
          },
          {
            "id": "d2-B2-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B2-1",
            "text": "Implement Eigenvalue = 1"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B2-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B2-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B2-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B2-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B2-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B2-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B2-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B2-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B2: Google PageRank Mini\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B2-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Google PageRank Mini\" using Eigenvalue = 1, eigenvector = steady state, power method. Show step-by-step matrix notation."
      },
      {
        "id": "p-B2-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalue = 1 for \"Google PageRank Mini\"."
      },
      {
        "id": "p-B2-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Google PageRank Mini\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B2-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Google PageRank Mini\"."
      },
      {
        "id": "p-B2-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Google PageRank Mini\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B2-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Google PageRank Mini\" suitable for college evaluation."
      },
      {
        "id": "p-B2-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B2: Google PageRank Mini\" focusing on Eigenvalue = 1, eigenvector = steady state, power method."
      }
    ],
    "resources": [
      {
        "title": "Google PageRank Mini Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B3",
    "projectCode": "B3",
    "title": "\ufe0f Image Compression via Eigenfaces (Conceptual)",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "Take 5 face images (use a standard dataset). Flatten each to a vector. Compute the  covariance matrix. Find top-3 eigenvalues/eigenvectors. ...",
    "problemStatement": "Take 5 face images (use a standard dataset). Flatten each to a vector. Compute the  covariance matrix. Find top-3 eigenvalues/eigenvectors. These are the \"eigenfaces.\" Show that any  face can be approximately reconstructed using just 3 eigenfaces + mean.",
    "mathUsed": [
      "Eigenvalues/eigenvectors of covariance matrix",
      "PCA"
    ],
    "realWorldConnection": "Face recognition in phones, CCTV, and Facebook photo tagging",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues/eigenvectors of covariance matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B3-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B3-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B3-1",
            "text": "Construct system for \ufe0f Image Compression via Eigenfaces (Conceptual)"
          },
          {
            "id": "d2-B3-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B3-1",
            "text": "Implement Eigenvalues/eigenvectors of covariance matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B3-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B3-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B3-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B3-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B3-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B3-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B3-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B3-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B3: \ufe0f Image Compression via Eigenfaces (Conceptual)\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B3-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"\ufe0f Image Compression via Eigenfaces (Conceptual)\" using Eigenvalues/eigenvectors of covariance matrix, PCA. Show step-by-step matrix notation."
      },
      {
        "id": "p-B3-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues/eigenvectors of covariance matrix for \"\ufe0f Image Compression via Eigenfaces (Conceptual)\"."
      },
      {
        "id": "p-B3-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"\ufe0f Image Compression via Eigenfaces (Conceptual)\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B3-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"\ufe0f Image Compression via Eigenfaces (Conceptual)\"."
      },
      {
        "id": "p-B3-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"\ufe0f Image Compression via Eigenfaces (Conceptual)\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B3-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"\ufe0f Image Compression via Eigenfaces (Conceptual)\" suitable for college evaluation."
      },
      {
        "id": "p-B3-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B3: \ufe0f Image Compression via Eigenfaces (Conceptual)\" focusing on Eigenvalues/eigenvectors of covariance matrix, PCA."
      }
    ],
    "resources": [
      {
        "title": "\ufe0f Image Compression via Eigenfaces (Conceptual) Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B4",
    "projectCode": "B4",
    "title": "Musical Instrument Frequency Analyzer",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "Model a guitar string as N masses connected by springs. Build the stiffness matrix. Find  eigenvalues = squared frequencies. Find eigenvecto...",
    "problemStatement": "Model a guitar string as N masses connected by springs. Build the stiffness matrix. Find  eigenvalues = squared frequencies. Find eigenvectors = vibration modes. Show the first 3 harmonics  visually.",
    "mathUsed": [
      "Eigenvalues of tridiagonal matrix",
      "vibration modes"
    ],
    "realWorldConnection": "Every musical instrument's sound comes from eigenvalues",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues of tridiagonal matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B4-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B4-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B4-1",
            "text": "Construct system for Musical Instrument Frequency Analyzer"
          },
          {
            "id": "d2-B4-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B4-1",
            "text": "Implement Eigenvalues of tridiagonal matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B4-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B4-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B4-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B4-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B4-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B4-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B4-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B4-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B4: Musical Instrument Frequency Analyzer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B4-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Musical Instrument Frequency Analyzer\" using Eigenvalues of tridiagonal matrix, vibration modes. Show step-by-step matrix notation."
      },
      {
        "id": "p-B4-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues of tridiagonal matrix for \"Musical Instrument Frequency Analyzer\"."
      },
      {
        "id": "p-B4-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Musical Instrument Frequency Analyzer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B4-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Musical Instrument Frequency Analyzer\"."
      },
      {
        "id": "p-B4-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Musical Instrument Frequency Analyzer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B4-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Musical Instrument Frequency Analyzer\" suitable for college evaluation."
      },
      {
        "id": "p-B4-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B4: Musical Instrument Frequency Analyzer\" focusing on Eigenvalues of tridiagonal matrix, vibration modes."
      }
    ],
    "resources": [
      {
        "title": "Musical Instrument Frequency Analyzer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B5",
    "projectCode": "B5",
    "title": "Principal Component Analysis on Student Data",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "Collect marks of 30 students in 5 subjects. Create the data matrix, center it, compute  covariance matrix, find eigenvalues and eigenvectors...",
    "problemStatement": "Collect marks of 30 students in 5 subjects. Create the data matrix, center it, compute  covariance matrix, find eigenvalues and eigenvectors. The top 2 eigenvectors = principal  components. Project all students onto 2D. See clusters (which students are similar?).",
    "mathUsed": [
      "Eigenvalues/eigenvectors of symmetric matrix",
      "PCA"
    ],
    "realWorldConnection": "Data science, ML, analytics \u2014 PCA is used everywhere",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 2,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues/eigenvectors of symmetric matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B5-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B5-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B5-1",
            "text": "Construct system for Principal Component Analysis on Student Data"
          },
          {
            "id": "d2-B5-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B5-1",
            "text": "Implement Eigenvalues/eigenvectors of symmetric matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B5-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B5-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B5-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B5-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B5-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B5-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B5-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B5-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B5: Principal Component Analysis on Student Data\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B5-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Principal Component Analysis on Student Data\" using Eigenvalues/eigenvectors of symmetric matrix, PCA. Show step-by-step matrix notation."
      },
      {
        "id": "p-B5-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues/eigenvectors of symmetric matrix for \"Principal Component Analysis on Student Data\"."
      },
      {
        "id": "p-B5-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Principal Component Analysis on Student Data\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B5-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Principal Component Analysis on Student Data\"."
      },
      {
        "id": "p-B5-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Principal Component Analysis on Student Data\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B5-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Principal Component Analysis on Student Data\" suitable for college evaluation."
      },
      {
        "id": "p-B5-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B5: Principal Component Analysis on Student Data\" focusing on Eigenvalues/eigenvectors of symmetric matrix, PCA."
      }
    ],
    "resources": [
      {
        "title": "Principal Component Analysis on Student Data Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B6",
    "projectCode": "B6",
    "title": "Markov Chain: Weather Prediction",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "3 weather states: Sunny, Cloudy, Rainy. Given transition probabilities (Sunny\u2192Cloudy = 0.3,  etc.), build the transition matrix. Find steady...",
    "problemStatement": "3 weather states: Sunny, Cloudy, Rainy. Given transition probabilities (Sunny\u2192Cloudy = 0.3,  etc.), build the transition matrix. Find steady state (eigenvector with eigenvalue 1). After 100 days,  what's the weather distribution? Does it depend on today's weather?",
    "mathUsed": [
      "Eigenvalue = 1",
      "steady state",
      "A^n convergence"
    ],
    "realWorldConnection": "Weather prediction, population dynamics, queueing theory",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalue = 1",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B6-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B6-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B6-1",
            "text": "Construct system for Markov Chain: Weather Prediction"
          },
          {
            "id": "d2-B6-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B6-1",
            "text": "Implement Eigenvalue = 1"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B6-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B6-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B6-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B6-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B6-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B6-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B6-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B6-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B6: Markov Chain: Weather Prediction\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B6-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Markov Chain: Weather Prediction\" using Eigenvalue = 1, steady state, A^n convergence. Show step-by-step matrix notation."
      },
      {
        "id": "p-B6-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalue = 1 for \"Markov Chain: Weather Prediction\"."
      },
      {
        "id": "p-B6-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Markov Chain: Weather Prediction\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B6-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Markov Chain: Weather Prediction\"."
      },
      {
        "id": "p-B6-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Markov Chain: Weather Prediction\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B6-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Markov Chain: Weather Prediction\" suitable for college evaluation."
      },
      {
        "id": "p-B6-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B6: Markov Chain: Weather Prediction\" focusing on Eigenvalue = 1, steady state, A^n convergence."
      }
    ],
    "resources": [
      {
        "title": "Markov Chain: Weather Prediction Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B7",
    "projectCode": "B7",
    "title": "Population Growth Model (Leslie Matrix)",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "A species has 3 age groups. Each group has a survival rate and reproduction rate. Build the  Leslie matrix. The dominant eigenvalue = long-t...",
    "problemStatement": "A species has 3 age groups. Each group has a survival rate and reproduction rate. Build the  Leslie matrix. The dominant eigenvalue = long-term growth rate. If \u03bb > 1, population grows. If \u03bb < 1, it  dies. If \u03bb = 1, it's stable. Find it.",
    "mathUsed": [
      "Dominant eigenvalue",
      "eigenvector = stable age distribution"
    ],
    "realWorldConnection": "Wildlife conservation, epidemiology, demographic planning",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Dominant eigenvalue",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B7-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B7-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B7-1",
            "text": "Construct system for Population Growth Model (Leslie Matrix)"
          },
          {
            "id": "d2-B7-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B7-1",
            "text": "Implement Dominant eigenvalue"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B7-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B7-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B7-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B7-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B7-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B7-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B7-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B7-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B7: Population Growth Model (Leslie Matrix)\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B7-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Population Growth Model (Leslie Matrix)\" using Dominant eigenvalue, eigenvector = stable age distribution. Show step-by-step matrix notation."
      },
      {
        "id": "p-B7-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Dominant eigenvalue for \"Population Growth Model (Leslie Matrix)\"."
      },
      {
        "id": "p-B7-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Population Growth Model (Leslie Matrix)\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B7-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Population Growth Model (Leslie Matrix)\"."
      },
      {
        "id": "p-B7-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Population Growth Model (Leslie Matrix)\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B7-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Population Growth Model (Leslie Matrix)\" suitable for college evaluation."
      },
      {
        "id": "p-B7-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B7: Population Growth Model (Leslie Matrix)\" focusing on Dominant eigenvalue, eigenvector = stable age distribution."
      }
    ],
    "resources": [
      {
        "title": "Population Growth Model (Leslie Matrix) Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B8",
    "projectCode": "B8",
    "title": "Sports Team Rating System",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "5 teams played matches against each other. Record: Team A beat B by 5, B beat C by 3, etc.  Build a matrix from point differentials. Find th...",
    "problemStatement": "5 teams played matches against each other. Record: Team A beat B by 5, B beat C by 3, etc.  Build a matrix from point differentials. Find the dominant eigenvector = team ratings. Show the  ranking.",
    "mathUsed": [
      "Eigenvector centrality",
      "dominant eigenvalue"
    ],
    "realWorldConnection": "Chess ratings, FIFA rankings, college football rankings",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvector centrality",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B8-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B8-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B8-1",
            "text": "Construct system for Sports Team Rating System"
          },
          {
            "id": "d2-B8-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B8-1",
            "text": "Implement Eigenvector centrality"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B8-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B8-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B8-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B8-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B8-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B8-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B8-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B8-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B8: Sports Team Rating System\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B8-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Sports Team Rating System\" using Eigenvector centrality, dominant eigenvalue. Show step-by-step matrix notation."
      },
      {
        "id": "p-B8-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvector centrality for \"Sports Team Rating System\"."
      },
      {
        "id": "p-B8-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Sports Team Rating System\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B8-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Sports Team Rating System\"."
      },
      {
        "id": "p-B8-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Sports Team Rating System\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B8-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Sports Team Rating System\" suitable for college evaluation."
      },
      {
        "id": "p-B8-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B8: Sports Team Rating System\" focusing on Eigenvector centrality, dominant eigenvalue."
      }
    ],
    "resources": [
      {
        "title": "Sports Team Rating System Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B9",
    "projectCode": "B9",
    "title": "Electrical Network Natural Modes",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "3 LC circuits coupled through shared inductors. Write the circuit equations in matrix form.  Find eigenvalues = natural frequencies. Find ei...",
    "problemStatement": "3 LC circuits coupled through shared inductors. Write the circuit equations in matrix form.  Find eigenvalues = natural frequencies. Find eigenvectors = current distribution in each mode. Show  what happens at resonance.",
    "mathUsed": [
      "Eigenvalues of circuit matrix",
      "resonance"
    ],
    "realWorldConnection": "Filter design, antenna tuning, every RF circuit",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues of circuit matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B9-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B9-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B9-1",
            "text": "Construct system for Electrical Network Natural Modes"
          },
          {
            "id": "d2-B9-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B9-1",
            "text": "Implement Eigenvalues of circuit matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B9-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B9-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B9-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B9-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B9-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B9-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B9-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B9-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B9: Electrical Network Natural Modes\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B9-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Electrical Network Natural Modes\" using Eigenvalues of circuit matrix, resonance. Show step-by-step matrix notation."
      },
      {
        "id": "p-B9-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues of circuit matrix for \"Electrical Network Natural Modes\"."
      },
      {
        "id": "p-B9-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Electrical Network Natural Modes\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B9-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Electrical Network Natural Modes\"."
      },
      {
        "id": "p-B9-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Electrical Network Natural Modes\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B9-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Electrical Network Natural Modes\" suitable for college evaluation."
      },
      {
        "id": "p-B9-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B9: Electrical Network Natural Modes\" focusing on Eigenvalues of circuit matrix, resonance."
      }
    ],
    "resources": [
      {
        "title": "Electrical Network Natural Modes Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "B10",
    "projectCode": "B10",
    "title": "Image Transformation Decomposer",
    "category": "Eigenvalues & Eigenvectors",
    "shortDescription": "Given a 2\u00d72 transformation matrix, find its eigenvalues and eigenvectors. Decompose:  rotation part + stretching part. Show: along eigenvect...",
    "problemStatement": "Given a 2\u00d72 transformation matrix, find its eigenvalues and eigenvectors. Decompose:  rotation part + stretching part. Show: along eigenvector directions, there's only stretching (no  rotation). Show with an image being transformed.",
    "mathUsed": [
      "Eigenvalues/eigenvectors",
      "geometric interpretation"
    ],
    "realWorldConnection": "Computer graphics \u2014 every game and animation uses this",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues/eigenvectors",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-B10-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-B10-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-B10-1",
            "text": "Construct system for Image Transformation Decomposer"
          },
          {
            "id": "d2-B10-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-B10-1",
            "text": "Implement Eigenvalues/eigenvectors"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-B10-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-B10-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-B10-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-B10-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-B10-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-B10-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-B10-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-B10-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"B10: Image Transformation Decomposer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-B10-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Image Transformation Decomposer\" using Eigenvalues/eigenvectors, geometric interpretation. Show step-by-step matrix notation."
      },
      {
        "id": "p-B10-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues/eigenvectors for \"Image Transformation Decomposer\"."
      },
      {
        "id": "p-B10-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Image Transformation Decomposer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-B10-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Image Transformation Decomposer\"."
      },
      {
        "id": "p-B10-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Image Transformation Decomposer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-B10-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Image Transformation Decomposer\" suitable for college evaluation."
      },
      {
        "id": "p-B10-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"B10: Image Transformation Decomposer\" focusing on Eigenvalues/eigenvectors, geometric interpretation."
      }
    ],
    "resources": [
      {
        "title": "Image Transformation Decomposer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C1",
    "projectCode": "C1",
    "title": "Epidemic Spread Over N Weeks",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "The weekly transition matrix for disease states (Susceptible\u2192Infected\u2192Recovered) is A.  Using Cayley-Hamilton, compute A^52 (one year) effic...",
    "problemStatement": "The weekly transition matrix for disease states (Susceptible\u2192Infected\u2192Recovered) is A.  Using Cayley-Hamilton, compute A^52 (one year) efficiently. Show how the epidemic evolves over 52  weeks. Find steady state.",
    "mathUsed": [
      "A^n via Cayley-Hamilton",
      "characteristic equation"
    ],
    "realWorldConnection": "COVID modeling \u2014 every SIR variant uses matrix powers",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement A^n via Cayley-Hamilton",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C1-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C1-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C1-1",
            "text": "Construct system for Epidemic Spread Over N Weeks"
          },
          {
            "id": "d2-C1-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C1-1",
            "text": "Implement A^n via Cayley-Hamilton"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C1-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C1-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C1-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C1-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C1-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C1-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C1-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C1-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C1: Epidemic Spread Over N Weeks\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C1-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Epidemic Spread Over N Weeks\" using A^n via Cayley-Hamilton, characteristic equation. Show step-by-step matrix notation."
      },
      {
        "id": "p-C1-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement A^n via Cayley-Hamilton for \"Epidemic Spread Over N Weeks\"."
      },
      {
        "id": "p-C1-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Epidemic Spread Over N Weeks\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C1-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Epidemic Spread Over N Weeks\"."
      },
      {
        "id": "p-C1-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Epidemic Spread Over N Weeks\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C1-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Epidemic Spread Over N Weeks\" suitable for college evaluation."
      },
      {
        "id": "p-C1-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C1: Epidemic Spread Over N Weeks\" focusing on A^n via Cayley-Hamilton, characteristic equation."
      }
    ],
    "resources": [
      {
        "title": "Epidemic Spread Over N Weeks Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C2",
    "projectCode": "C2",
    "title": "Credit Score Transition Predictor",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "Customers move between credit scores: Poor, Fair, Good. Transition matrix A. Find A^12  (after 1 year) using C-H theorem. What fraction end ...",
    "problemStatement": "Customers move between credit scores: Poor, Fair, Good. Transition matrix A. Find A^12  (after 1 year) using C-H theorem. What fraction end up in each category? How should a bank plan its  loan portfolio?",
    "mathUsed": [
      "Cayley-Hamilton for A^n",
      "Markov chains"
    ],
    "realWorldConnection": "Banking risk models \u2014 every bank uses this",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Cayley-Hamilton for A^n",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C2-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C2-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C2-1",
            "text": "Construct system for Credit Score Transition Predictor"
          },
          {
            "id": "d2-C2-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C2-1",
            "text": "Implement Cayley-Hamilton for A^n"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C2-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C2-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C2-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C2-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C2-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C2-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C2-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C2-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C2: Credit Score Transition Predictor\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C2-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Credit Score Transition Predictor\" using Cayley-Hamilton for A^n, Markov chains. Show step-by-step matrix notation."
      },
      {
        "id": "p-C2-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Cayley-Hamilton for A^n for \"Credit Score Transition Predictor\"."
      },
      {
        "id": "p-C2-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Credit Score Transition Predictor\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C2-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Credit Score Transition Predictor\"."
      },
      {
        "id": "p-C2-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Credit Score Transition Predictor\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C2-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Credit Score Transition Predictor\" suitable for college evaluation."
      },
      {
        "id": "p-C2-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C2: Credit Score Transition Predictor\" focusing on Cayley-Hamilton for A^n, Markov chains."
      }
    ],
    "resources": [
      {
        "title": "Credit Score Transition Predictor Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C3",
    "projectCode": "C3",
    "title": "City Population Migration Model",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "3 cities with migration rates between them. Build migration matrix M. Using  diagonalization, find M^n (population after n years). Find the ...",
    "problemStatement": "3 cities with migration rates between them. Build migration matrix M. Using  diagonalization, find M^n (population after n years). Find the steady state distribution. Which city  gains population? Which loses?",
    "mathUsed": [
      "Diagonalization",
      "A^n = P D^n P^(-1)"
    ],
    "realWorldConnection": "Urban planning, census prediction, infrastructure budgeting",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 1,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Diagonalization",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C3-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C3-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C3-1",
            "text": "Construct system for City Population Migration Model"
          },
          {
            "id": "d2-C3-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C3-1",
            "text": "Implement Diagonalization"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C3-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C3-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C3-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C3-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C3-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C3-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C3-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C3-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C3: City Population Migration Model\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C3-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"City Population Migration Model\" using Diagonalization, A^n = P D^n P^(-1). Show step-by-step matrix notation."
      },
      {
        "id": "p-C3-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Diagonalization for \"City Population Migration Model\"."
      },
      {
        "id": "p-C3-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"City Population Migration Model\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C3-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"City Population Migration Model\"."
      },
      {
        "id": "p-C3-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"City Population Migration Model\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C3-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"City Population Migration Model\" suitable for college evaluation."
      },
      {
        "id": "p-C3-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C3: City Population Migration Model\" focusing on Diagonalization, A^n = P D^n P^(-1)."
      }
    ],
    "resources": [
      {
        "title": "City Population Migration Model Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C4",
    "projectCode": "C4",
    "title": "Board Game Winning Probabilities",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "A simple board game with 5 states. Transition matrix T. Using diagonalization, compute  T^50 (long-run probabilities). Who wins most often? ...",
    "problemStatement": "A simple board game with 5 states. Transition matrix T. Using diagonalization, compute  T^50 (long-run probabilities). Who wins most often? How many turns on average?",
    "mathUsed": [
      "Diagonalization",
      "matrix powers",
      "steady state"
    ],
    "realWorldConnection": "Game theory, casino mathematics, insurance",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Diagonalization",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C4-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C4-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C4-1",
            "text": "Construct system for Board Game Winning Probabilities"
          },
          {
            "id": "d2-C4-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C4-1",
            "text": "Implement Diagonalization"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C4-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C4-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C4-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C4-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C4-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C4-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C4-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C4-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C4: Board Game Winning Probabilities\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C4-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Board Game Winning Probabilities\" using Diagonalization, matrix powers, steady state. Show step-by-step matrix notation."
      },
      {
        "id": "p-C4-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Diagonalization for \"Board Game Winning Probabilities\"."
      },
      {
        "id": "p-C4-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Board Game Winning Probabilities\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C4-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Board Game Winning Probabilities\"."
      },
      {
        "id": "p-C4-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Board Game Winning Probabilities\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C4-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Board Game Winning Probabilities\" suitable for college evaluation."
      },
      {
        "id": "p-C4-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C4: Board Game Winning Probabilities\" focusing on Diagonalization, matrix powers, steady state."
      }
    ],
    "resources": [
      {
        "title": "Board Game Winning Probabilities Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C5",
    "projectCode": "C5",
    "title": "Stock Correlation Predictor",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "3 stocks have daily return correlations. Build the correlation matrix (symmetric).  Diagonalize it. The eigenvectors = independent \"factors\"...",
    "problemStatement": "3 stocks have daily return correlations. Build the correlation matrix (symmetric).  Diagonalize it. The eigenvectors = independent \"factors\" driving the market. Eigenvalues = factor  importance. Show which factor dominates.",
    "mathUsed": [
      "Diagonalization of symmetric matrix",
      "spectral decomposition"
    ],
    "realWorldConnection": "Quantitative finance \u2014 every hedge fund uses this",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Diagonalization of symmetric matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C5-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C5-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C5-1",
            "text": "Construct system for Stock Correlation Predictor"
          },
          {
            "id": "d2-C5-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C5-1",
            "text": "Implement Diagonalization of symmetric matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C5-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C5-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C5-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C5-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C5-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C5-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C5-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C5-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C5: Stock Correlation Predictor\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C5-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Stock Correlation Predictor\" using Diagonalization of symmetric matrix, spectral decomposition. Show step-by-step matrix notation."
      },
      {
        "id": "p-C5-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Diagonalization of symmetric matrix for \"Stock Correlation Predictor\"."
      },
      {
        "id": "p-C5-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Stock Correlation Predictor\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C5-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Stock Correlation Predictor\"."
      },
      {
        "id": "p-C5-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Stock Correlation Predictor\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C5-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Stock Correlation Predictor\" suitable for college evaluation."
      },
      {
        "id": "p-C5-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C5: Stock Correlation Predictor\" focusing on Diagonalization of symmetric matrix, spectral decomposition."
      }
    ],
    "resources": [
      {
        "title": "Stock Correlation Predictor Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C6",
    "projectCode": "C6",
    "title": "Fibonacci via Matrix Powers",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "Fibonacci: F(n+1) = F(n) + F(n-1). Write as [F(n+1), F(n)] = A \u00d7 [F(n), F(n -1)] where A =  [[1,1],[1,0]]. Find F(100) using diagonalization...",
    "problemStatement": "Fibonacci: F(n+1) = F(n) + F(n-1). Write as [F(n+1), F(n)] = A \u00d7 [F(n), F(n -1)] where A =  [[1,1],[1,0]]. Find F(100) using diagonalization of A. Compare speed with naive recursion.",
    "mathUsed": [
      "2\u00d72 diagonalization",
      "matrix power",
      "golden ratio"
    ],
    "realWorldConnection": "Algorithm analysis, nature (phyllotaxis), financial technical analysis",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement 2\u00d72 diagonalization",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C6-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C6-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C6-1",
            "text": "Construct system for Fibonacci via Matrix Powers"
          },
          {
            "id": "d2-C6-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C6-1",
            "text": "Implement 2\u00d72 diagonalization"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C6-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C6-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C6-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C6-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C6-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C6-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C6-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C6-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C6: Fibonacci via Matrix Powers\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C6-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Fibonacci via Matrix Powers\" using 2\u00d72 diagonalization, matrix power, golden ratio. Show step-by-step matrix notation."
      },
      {
        "id": "p-C6-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement 2\u00d72 diagonalization for \"Fibonacci via Matrix Powers\"."
      },
      {
        "id": "p-C6-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Fibonacci via Matrix Powers\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C6-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Fibonacci via Matrix Powers\"."
      },
      {
        "id": "p-C6-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Fibonacci via Matrix Powers\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C6-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Fibonacci via Matrix Powers\" suitable for college evaluation."
      },
      {
        "id": "p-C6-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C6: Fibonacci via Matrix Powers\" focusing on 2\u00d72 diagonalization, matrix power, golden ratio."
      }
    ],
    "resources": [
      {
        "title": "Fibonacci via Matrix Powers Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C7",
    "projectCode": "C7",
    "title": "Cayley-Hamilton Verifier Tool",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "Build an interactive tool where user enters any 2\u00d72 or 3\u00d73 matrix. The tool: (a) finds  characteristic equation, (b) verifies p(A) = 0, (c) ...",
    "problemStatement": "Build an interactive tool where user enters any 2\u00d72 or 3\u00d73 matrix. The tool: (a) finds  characteristic equation, (b) verifies p(A) = 0, (c) finds A^(-1) via C-H, (d) finds A^8 via C-H, (e)  compares time with direct computation.",
    "mathUsed": [
      "Cayley-Hamilton theorem",
      "all steps"
    ],
    "realWorldConnection": "Computational efficiency \u2014 this IS how computers compute matrix functions",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Cayley-Hamilton theorem",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C7-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C7-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C7-1",
            "text": "Construct system for Cayley-Hamilton Verifier Tool"
          },
          {
            "id": "d2-C7-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C7-1",
            "text": "Implement Cayley-Hamilton theorem"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C7-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C7-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C7-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C7-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C7-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C7-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C7-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C7-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C7: Cayley-Hamilton Verifier Tool\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C7-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Cayley-Hamilton Verifier Tool\" using Cayley-Hamilton theorem, all steps. Show step-by-step matrix notation."
      },
      {
        "id": "p-C7-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Cayley-Hamilton theorem for \"Cayley-Hamilton Verifier Tool\"."
      },
      {
        "id": "p-C7-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Cayley-Hamilton Verifier Tool\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C7-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Cayley-Hamilton Verifier Tool\"."
      },
      {
        "id": "p-C7-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Cayley-Hamilton Verifier Tool\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C7-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Cayley-Hamilton Verifier Tool\" suitable for college evaluation."
      },
      {
        "id": "p-C7-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C7: Cayley-Hamilton Verifier Tool\" focusing on Cayley-Hamilton theorem, all steps."
      }
    ],
    "resources": [
      {
        "title": "Cayley-Hamilton Verifier Tool Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "C8",
    "projectCode": "C8",
    "title": "Network Influence Propagation",
    "category": "Cayley-Hamilton & Diagonalization",
    "shortDescription": "A social network of 5 people with influence weights. Influence propagation matrix A. Using  A^n (via C-H), find influence after n rounds of ...",
    "problemStatement": "A social network of 5 people with influence weights. Influence propagation matrix A. Using  A^n (via C-H), find influence after n rounds of discussion. Who ends up most influential? Does  everyone converge to the same opinion?",
    "mathUsed": [
      "Matrix powers via C-H",
      "consensus dynamics"
    ],
    "realWorldConnection": "Social media algorithms, opinion dynamics, marketing",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Matrix powers via C-H",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-C8-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-C8-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-C8-1",
            "text": "Construct system for Network Influence Propagation"
          },
          {
            "id": "d2-C8-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-C8-1",
            "text": "Implement Matrix powers via C-H"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-C8-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-C8-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-C8-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-C8-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-C8-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-C8-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-C8-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-C8-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"C8: Network Influence Propagation\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-C8-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Network Influence Propagation\" using Matrix powers via C-H, consensus dynamics. Show step-by-step matrix notation."
      },
      {
        "id": "p-C8-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Matrix powers via C-H for \"Network Influence Propagation\"."
      },
      {
        "id": "p-C8-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Network Influence Propagation\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-C8-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Network Influence Propagation\"."
      },
      {
        "id": "p-C8-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Network Influence Propagation\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-C8-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Network Influence Propagation\" suitable for college evaluation."
      },
      {
        "id": "p-C8-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"C8: Network Influence Propagation\" focusing on Matrix powers via C-H, consensus dynamics."
      }
    ],
    "resources": [
      {
        "title": "Network Influence Propagation Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D1",
    "projectCode": "D1",
    "title": "Material Stress Analyzer",
    "category": "Quadratic Forms",
    "shortDescription": "A stress tensor at a point in a material is a symmetric 3\u00d73 matrix. Find principal stresses  (eigenvalues) and principal directions (eigenve...",
    "problemStatement": "A stress tensor at a point in a material is a symmetric 3\u00d73 matrix. Find principal stresses  (eigenvalues) and principal directions (eigenvectors). Classify: Is the material under tension,  compression, or shear? Find von Mises stress.",
    "mathUsed": [
      "Eigenvalues of symmetric matrix",
      "quadratic form classification"
    ],
    "realWorldConnection": "Mechanical engineering \u2014 every FEA software computes this",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues of symmetric matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D1-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D1-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D1-1",
            "text": "Construct system for Material Stress Analyzer"
          },
          {
            "id": "d2-D1-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D1-1",
            "text": "Implement Eigenvalues of symmetric matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D1-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D1-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D1-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D1-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D1-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D1-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D1-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D1-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D1: Material Stress Analyzer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D1-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Material Stress Analyzer\" using Eigenvalues of symmetric matrix, quadratic form classification. Show step-by-step matrix notation."
      },
      {
        "id": "p-D1-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues of symmetric matrix for \"Material Stress Analyzer\"."
      },
      {
        "id": "p-D1-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Material Stress Analyzer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D1-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Material Stress Analyzer\"."
      },
      {
        "id": "p-D1-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Material Stress Analyzer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D1-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Material Stress Analyzer\" suitable for college evaluation."
      },
      {
        "id": "p-D1-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D1: Material Stress Analyzer\" focusing on Eigenvalues of symmetric matrix, quadratic form classification."
      }
    ],
    "resources": [
      {
        "title": "Material Stress Analyzer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D2",
    "projectCode": "D2",
    "title": "Machine Learning Loss Landscape Visualizer",
    "category": "Quadratic Forms",
    "shortDescription": "A 2-variable loss function L(w1,w2) has a Hessian matrix H at the minimum. H is symmetric.  The quadratic form x^T H x determines: positive ...",
    "problemStatement": "A 2-variable loss function L(w1,w2) has a Hessian matrix H at the minimum. H is symmetric.  The quadratic form x^T H x determines: positive definite = true minimum, indefinite = saddle point,  negative definite = maximum. Visualize all 3 cases in 3D.",
    "mathUsed": [
      "Quadratic form classification",
      "Hessian",
      "nature"
    ],
    "realWorldConnection": "Every neural network training involves this \u2014 saddle points are THE problem in  deep learning",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form classification",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D2-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D2-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D2-1",
            "text": "Construct system for Machine Learning Loss Landscape Visualizer"
          },
          {
            "id": "d2-D2-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D2-1",
            "text": "Implement Quadratic form classification"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D2-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D2-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D2-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D2-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D2-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D2-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D2-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D2-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D2: Machine Learning Loss Landscape Visualizer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D2-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Machine Learning Loss Landscape Visualizer\" using Quadratic form classification, Hessian, nature. Show step-by-step matrix notation."
      },
      {
        "id": "p-D2-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form classification for \"Machine Learning Loss Landscape Visualizer\"."
      },
      {
        "id": "p-D2-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Machine Learning Loss Landscape Visualizer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D2-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Machine Learning Loss Landscape Visualizer\"."
      },
      {
        "id": "p-D2-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Machine Learning Loss Landscape Visualizer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D2-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Machine Learning Loss Landscape Visualizer\" suitable for college evaluation."
      },
      {
        "id": "p-D2-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D2: Machine Learning Loss Landscape Visualizer\" focusing on Quadratic form classification, Hessian, nature."
      }
    ],
    "resources": [
      {
        "title": "Machine Learning Loss Landscape Visualizer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D3",
    "projectCode": "D3",
    "title": "Road Quality Classification",
    "category": "Quadratic Forms",
    "shortDescription": "Road roughness data in 3 directions gives a covariance matrix. The quadratic form classifies  the road: positive definite = smooth (all dire...",
    "problemStatement": "Road roughness data in 3 directions gives a covariance matrix. The quadratic form classifies  the road: positive definite = smooth (all directions good), indefinite = partially damaged. Find the  worst direction.",
    "mathUsed": [
      "Quadratic form",
      "signature",
      "nature"
    ],
    "realWorldConnection": "Road engineering, pavement management systems",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D3-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D3-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D3-1",
            "text": "Construct system for Road Quality Classification"
          },
          {
            "id": "d2-D3-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D3-1",
            "text": "Implement Quadratic form"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D3-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D3-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D3-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D3-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D3-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D3-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D3-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D3-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D3: Road Quality Classification\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D3-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Road Quality Classification\" using Quadratic form, signature, nature. Show step-by-step matrix notation."
      },
      {
        "id": "p-D3-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form for \"Road Quality Classification\"."
      },
      {
        "id": "p-D3-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Road Quality Classification\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D3-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Road Quality Classification\"."
      },
      {
        "id": "p-D3-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Road Quality Classification\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D3-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Road Quality Classification\" suitable for college evaluation."
      },
      {
        "id": "p-D3-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D3: Road Quality Classification\" focusing on Quadratic form, signature, nature."
      }
    ],
    "resources": [
      {
        "title": "Road Quality Classification Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D4",
    "projectCode": "D4",
    "title": "Spring System Energy Analyzer",
    "category": "Quadratic Forms",
    "shortDescription": "3 springs connected to masses. The potential energy is a quadratic form V = x^T K x where  K is the stiffness matrix. Classify the energy: p...",
    "problemStatement": "3 springs connected to masses. The potential energy is a quadratic form V = x^T K x where  K is the stiffness matrix. Classify the energy: positive definite = stable equilibrium (energy minimum),  indefinite = unstable (saddle). Find stable and unstable directions.",
    "mathUsed": [
      "Quadratic form nature",
      "positive/negative definiteness"
    ],
    "realWorldConnection": "Mechanical stability \u2014 every structure from chairs to rockets",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form nature",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D4-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D4-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D4-1",
            "text": "Construct system for Spring System Energy Analyzer"
          },
          {
            "id": "d2-D4-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D4-1",
            "text": "Implement Quadratic form nature"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D4-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D4-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D4-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D4-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D4-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D4-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D4-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D4-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D4: Spring System Energy Analyzer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D4-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Spring System Energy Analyzer\" using Quadratic form nature, positive/negative definiteness. Show step-by-step matrix notation."
      },
      {
        "id": "p-D4-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form nature for \"Spring System Energy Analyzer\"."
      },
      {
        "id": "p-D4-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Spring System Energy Analyzer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D4-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Spring System Energy Analyzer\"."
      },
      {
        "id": "p-D4-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Spring System Energy Analyzer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D4-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Spring System Energy Analyzer\" suitable for college evaluation."
      },
      {
        "id": "p-D4-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D4: Spring System Energy Analyzer\" focusing on Quadratic form nature, positive/negative definiteness."
      }
    ],
    "resources": [
      {
        "title": "Spring System Energy Analyzer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D5",
    "projectCode": "D5",
    "title": "Portfolio Risk Classifier",
    "category": "Quadratic Forms",
    "shortDescription": "3 assets with covariance matrix \u03a3. Risk = w^T \u03a3 w (quadratic form). Is this positive definite?  (Must be \u2014 risk is always positive). Find th...",
    "problemStatement": "3 assets with covariance matrix \u03a3. Risk = w^T \u03a3 w (quadratic form). Is this positive definite?  (Must be \u2014 risk is always positive). Find the principal risk directions. Which direction has maximum  risk? Which has minimum?",
    "mathUsed": [
      "Quadratic form",
      "constrained optimization",
      "Rayleigh quotient"
    ],
    "realWorldConnection": "Modern Portfolio Theory \u2014 Harry Markowitz won Nobel Prize for this",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D5-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D5-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D5-1",
            "text": "Construct system for Portfolio Risk Classifier"
          },
          {
            "id": "d2-D5-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D5-1",
            "text": "Implement Quadratic form"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D5-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D5-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D5-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D5-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D5-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D5-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D5-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D5-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D5: Portfolio Risk Classifier\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D5-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Portfolio Risk Classifier\" using Quadratic form, constrained optimization, Rayleigh quotient. Show step-by-step matrix notation."
      },
      {
        "id": "p-D5-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form for \"Portfolio Risk Classifier\"."
      },
      {
        "id": "p-D5-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Portfolio Risk Classifier\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D5-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Portfolio Risk Classifier\"."
      },
      {
        "id": "p-D5-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Portfolio Risk Classifier\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D5-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Portfolio Risk Classifier\" suitable for college evaluation."
      },
      {
        "id": "p-D5-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D5: Portfolio Risk Classifier\" focusing on Quadratic form, constrained optimization, Rayleigh quotient."
      }
    ],
    "resources": [
      {
        "title": "Portfolio Risk Classifier Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D6",
    "projectCode": "D6",
    "title": "Wave Equation Classifier",
    "category": "Quadratic Forms",
    "shortDescription": "The wave equation in 2D has a characteristic quadratic form. Its signature determines the  type: elliptic (Laplace), parabolic (heat), hyper...",
    "problemStatement": "The wave equation in 2D has a characteristic quadratic form. Its signature determines the  type: elliptic (Laplace), parabolic (heat), hyperbolic (wave). Given coefficients, classify the PDE. Show  what each type means physically.",
    "mathUsed": [
      "Quadratic form classification",
      "signature",
      "index"
    ],
    "realWorldConnection": "Physics \u2014 all of physics is classified this way",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form classification",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D6-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D6-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D6-1",
            "text": "Construct system for Wave Equation Classifier"
          },
          {
            "id": "d2-D6-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D6-1",
            "text": "Implement Quadratic form classification"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D6-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D6-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D6-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D6-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D6-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D6-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D6-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D6-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D6: Wave Equation Classifier\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D6-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Wave Equation Classifier\" using Quadratic form classification, signature, index. Show step-by-step matrix notation."
      },
      {
        "id": "p-D6-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form classification for \"Wave Equation Classifier\"."
      },
      {
        "id": "p-D6-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Wave Equation Classifier\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D6-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Wave Equation Classifier\"."
      },
      {
        "id": "p-D6-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Wave Equation Classifier\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D6-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Wave Equation Classifier\" suitable for college evaluation."
      },
      {
        "id": "p-D6-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D6: Wave Equation Classifier\" focusing on Quadratic form classification, signature, index."
      }
    ],
    "resources": [
      {
        "title": "Wave Equation Classifier Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D7",
    "projectCode": "D7",
    "title": "Conic Section Identifier",
    "category": "Quadratic Forms",
    "shortDescription": "Given ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0, build the matrix. Find eigenvalues. Classify:  ellipse, hyperbola, parabola, pair of lines, ci...",
    "problemStatement": "Given ax^2 + 2hxy + by^2 + 2gx + 2fy + c = 0, build the matrix. Find eigenvalues. Classify:  ellipse, hyperbola, parabola, pair of lines, circle, point, empty. Find center, axes, and rotation angle.  Plot the conic.",
    "mathUsed": [
      "Quadratic form",
      "canonical form",
      "orthogonal transformation"
    ],
    "realWorldConnection": "Computer vision (ellipse fitting), orbit mechanics (conic sections)",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D7-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D7-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D7-1",
            "text": "Construct system for Conic Section Identifier"
          },
          {
            "id": "d2-D7-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D7-1",
            "text": "Implement Quadratic form"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D7-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D7-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D7-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D7-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D7-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D7-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D7-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D7-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D7: Conic Section Identifier\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D7-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Conic Section Identifier\" using Quadratic form, canonical form, orthogonal transformation. Show step-by-step matrix notation."
      },
      {
        "id": "p-D7-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form for \"Conic Section Identifier\"."
      },
      {
        "id": "p-D7-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Conic Section Identifier\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D7-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Conic Section Identifier\"."
      },
      {
        "id": "p-D7-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Conic Section Identifier\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D7-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Conic Section Identifier\" suitable for college evaluation."
      },
      {
        "id": "p-D7-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D7: Conic Section Identifier\" focusing on Quadratic form, canonical form, orthogonal transformation."
      }
    ],
    "resources": [
      {
        "title": "Conic Section Identifier Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "D8",
    "projectCode": "D8",
    "title": "Magnetic Field Energy Form",
    "category": "Quadratic Forms",
    "shortDescription": "3 coils with mutual inductance. Energy stored = (1/2) i^T L i where L is inductance matrix  (symmetric). Classify the energy quadratic form....",
    "problemStatement": "3 coils with mutual inductance. Energy stored = (1/2) i^T L i where L is inductance matrix  (symmetric). Classify the energy quadratic form. Is it always positive definite? What does that mean  physically? Find principal inductances.",
    "mathUsed": [
      "Quadratic form",
      "positive definiteness",
      "eigenvalues"
    ],
    "realWorldConnection": "Electrical engineering \u2014 transformer and motor design",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Quadratic form",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-D8-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-D8-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-D8-1",
            "text": "Construct system for Magnetic Field Energy Form"
          },
          {
            "id": "d2-D8-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-D8-1",
            "text": "Implement Quadratic form"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-D8-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-D8-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-D8-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-D8-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-D8-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-D8-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-D8-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-D8-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"D8: Magnetic Field Energy Form\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-D8-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Magnetic Field Energy Form\" using Quadratic form, positive definiteness, eigenvalues. Show step-by-step matrix notation."
      },
      {
        "id": "p-D8-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Quadratic form for \"Magnetic Field Energy Form\"."
      },
      {
        "id": "p-D8-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Magnetic Field Energy Form\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-D8-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Magnetic Field Energy Form\"."
      },
      {
        "id": "p-D8-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Magnetic Field Energy Form\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-D8-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Magnetic Field Energy Form\" suitable for college evaluation."
      },
      {
        "id": "p-D8-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"D8: Magnetic Field Energy Form\" focusing on Quadratic form, positive definiteness, eigenvalues."
      }
    ],
    "resources": [
      {
        "title": "Magnetic Field Energy Form Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E1",
    "projectCode": "E1",
    "title": "\ufe0f Image Compressor (THE Classic SVD Project)",
    "category": "Singular Value Decomposition",
    "shortDescription": "Load a grayscale image as a matrix. Compute SVD. Reconstruct using top-k singular values  only. Show: k=1 (barely recognizable), k=5, k=10, ...",
    "problemStatement": "Load a grayscale image as a matrix. Compute SVD. Reconstruct using top-k singular values  only. Show: k=1 (barely recognizable), k=5, k=10, k=20, k=50, k=full. Show compression ratio vs  quality trade-off. Find the \"knee\" \u2014 best quality/size ratio.",
    "mathUsed": [
      "SVD",
      "low-rank approximation",
      "Eckart-Young theorem"
    ],
    "realWorldConnection": "JPEG, Netflix, Spotify \u2014 all use SVD for compression",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 3,
    "status": "full",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E1-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E1-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E1-1",
            "text": "Construct system for \ufe0f Image Compressor (THE Classic SVD Project)"
          },
          {
            "id": "d2-E1-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E1-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E1-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E1-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E1-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E1-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E1-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E1-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E1-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E1-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E1: \ufe0f Image Compressor (THE Classic SVD Project)\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E1-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"\ufe0f Image Compressor (THE Classic SVD Project)\" using SVD, low-rank approximation, Eckart-Young theorem. Show step-by-step matrix notation."
      },
      {
        "id": "p-E1-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"\ufe0f Image Compressor (THE Classic SVD Project)\"."
      },
      {
        "id": "p-E1-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"\ufe0f Image Compressor (THE Classic SVD Project)\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E1-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"\ufe0f Image Compressor (THE Classic SVD Project)\"."
      },
      {
        "id": "p-E1-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"\ufe0f Image Compressor (THE Classic SVD Project)\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E1-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"\ufe0f Image Compressor (THE Classic SVD Project)\" suitable for college evaluation."
      },
      {
        "id": "p-E1-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E1: \ufe0f Image Compressor (THE Classic SVD Project)\" focusing on SVD, low-rank approximation, Eckart-Young theorem."
      }
    ],
    "resources": [
      {
        "title": "\ufe0f Image Compressor (THE Classic SVD Project) Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E2",
    "projectCode": "E2",
    "title": "Movie Recommender Mini-System",
    "category": "Singular Value Decomposition",
    "shortDescription": "5 users, 8 movies, sparse rating matrix R. Compute SVD. Keep top-2 singular values. This  captures \"taste dimensions.\" Predict missing ratin...",
    "problemStatement": "5 users, 8 movies, sparse rating matrix R. Compute SVD. Keep top-2 singular values. This  captures \"taste dimensions.\" Predict missing ratings. Recommend the highest predicted unrated  movie to each user.",
    "mathUsed": [
      "SVD",
      "low-rank approximation",
      "collaborative filtering"
    ],
    "realWorldConnection": "Netflix, Amazon, YouTube recommendations \u2014 literally this",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E2-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E2-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E2-1",
            "text": "Construct system for Movie Recommender Mini-System"
          },
          {
            "id": "d2-E2-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E2-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E2-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E2-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E2-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E2-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E2-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E2-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E2-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E2-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E2: Movie Recommender Mini-System\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E2-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Movie Recommender Mini-System\" using SVD, low-rank approximation, collaborative filtering. Show step-by-step matrix notation."
      },
      {
        "id": "p-E2-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Movie Recommender Mini-System\"."
      },
      {
        "id": "p-E2-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Movie Recommender Mini-System\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E2-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Movie Recommender Mini-System\"."
      },
      {
        "id": "p-E2-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Movie Recommender Mini-System\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E2-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Movie Recommender Mini-System\" suitable for college evaluation."
      },
      {
        "id": "p-E2-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E2: Movie Recommender Mini-System\" focusing on SVD, low-rank approximation, collaborative filtering."
      }
    ],
    "resources": [
      {
        "title": "Movie Recommender Mini-System Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E3",
    "projectCode": "E3",
    "title": "Text Topic Extractor (LSA)",
    "category": "Singular Value Decomposition",
    "shortDescription": "6 documents, 30 words. Build term-document matrix. SVD decomposes it. Top-2 singular  vectors = hidden \"topics.\" Show which words belong to ...",
    "problemStatement": "6 documents, 30 words. Build term-document matrix. SVD decomposes it. Top-2 singular  vectors = hidden \"topics.\" Show which words belong to which topic. Show which documents are  about which topic.",
    "mathUsed": [
      "SVD",
      "Latent Semantic Analysis"
    ],
    "realWorldConnection": "Search engines, chatbots, document classification",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E3-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E3-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E3-1",
            "text": "Construct system for Text Topic Extractor (LSA)"
          },
          {
            "id": "d2-E3-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E3-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E3-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E3-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E3-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E3-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E3-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E3-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E3-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E3-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E3: Text Topic Extractor (LSA)\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E3-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Text Topic Extractor (LSA)\" using SVD, Latent Semantic Analysis. Show step-by-step matrix notation."
      },
      {
        "id": "p-E3-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Text Topic Extractor (LSA)\"."
      },
      {
        "id": "p-E3-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Text Topic Extractor (LSA)\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E3-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Text Topic Extractor (LSA)\"."
      },
      {
        "id": "p-E3-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Text Topic Extractor (LSA)\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E3-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Text Topic Extractor (LSA)\" suitable for college evaluation."
      },
      {
        "id": "p-E3-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E3: Text Topic Extractor (LSA)\" focusing on SVD, Latent Semantic Analysis."
      }
    ],
    "resources": [
      {
        "title": "Text Topic Extractor (LSA) Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E4",
    "projectCode": "E4",
    "title": "Audio Noise Reducer",
    "category": "Singular Value Decomposition",
    "shortDescription": "A short audio signal with noise. Represent as matrix (time \u00d7 frequency via STFT). SVD. Large  singular values = signal, small ones = noise. ...",
    "problemStatement": "A short audio signal with noise. Represent as matrix (time \u00d7 frequency via STFT). SVD. Large  singular values = signal, small ones = noise. Zero out small singular values. Reconstruct. Show clean  signal.",
    "mathUsed": [
      "SVD",
      "noise reduction",
      "rank reduction"
    ],
    "realWorldConnection": "Noise-cancelling headphones, audio editing, speech recognition",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E4-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E4-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E4-1",
            "text": "Construct system for Audio Noise Reducer"
          },
          {
            "id": "d2-E4-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E4-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E4-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E4-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E4-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E4-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E4-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E4-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E4-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E4-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E4: Audio Noise Reducer\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E4-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Audio Noise Reducer\" using SVD, noise reduction, rank reduction. Show step-by-step matrix notation."
      },
      {
        "id": "p-E4-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Audio Noise Reducer\"."
      },
      {
        "id": "p-E4-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Audio Noise Reducer\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E4-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Audio Noise Reducer\"."
      },
      {
        "id": "p-E4-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Audio Noise Reducer\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E4-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Audio Noise Reducer\" suitable for college evaluation."
      },
      {
        "id": "p-E4-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E4: Audio Noise Reducer\" focusing on SVD, noise reduction, rank reduction."
      }
    ],
    "resources": [
      {
        "title": "Audio Noise Reducer Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E5",
    "projectCode": "E5",
    "title": "Geoid Approximation from Satellite Data",
    "category": "Singular Value Decomposition",
    "shortDescription": "Sparse gravity measurements on Earth's surface. Arrange as matrix. SVD gives low-rank  smooth approximation = geoid model. Show how few sing...",
    "problemStatement": "Sparse gravity measurements on Earth's surface. Arrange as matrix. SVD gives low-rank  smooth approximation = geoid model. Show how few singular values capture global gravity pattern.",
    "mathUsed": [
      "SVD",
      "data completion",
      "low-rank approximation"
    ],
    "realWorldConnection": "GPS accuracy, satellite navigation, geophysics",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E5-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E5-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E5-1",
            "text": "Construct system for Geoid Approximation from Satellite Data"
          },
          {
            "id": "d2-E5-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E5-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E5-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E5-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E5-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E5-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E5-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E5-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E5-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E5-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E5: Geoid Approximation from Satellite Data\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E5-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Geoid Approximation from Satellite Data\" using SVD, data completion, low-rank approximation. Show step-by-step matrix notation."
      },
      {
        "id": "p-E5-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Geoid Approximation from Satellite Data\"."
      },
      {
        "id": "p-E5-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Geoid Approximation from Satellite Data\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E5-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Geoid Approximation from Satellite Data\"."
      },
      {
        "id": "p-E5-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Geoid Approximation from Satellite Data\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E5-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Geoid Approximation from Satellite Data\" suitable for college evaluation."
      },
      {
        "id": "p-E5-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E5: Geoid Approximation from Satellite Data\" focusing on SVD, data completion, low-rank approximation."
      }
    ],
    "resources": [
      {
        "title": "Geoid Approximation from Satellite Data Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E6",
    "projectCode": "E6",
    "title": "Gene Expression Pattern Finder",
    "category": "Singular Value Decomposition",
    "shortDescription": "Gene expression matrix: 10 genes \u00d7 5 conditions. SVD: singular vectors = patterns across  conditions. Top pattern = dominant biological proc...",
    "problemStatement": "Gene expression matrix: 10 genes \u00d7 5 conditions. SVD: singular vectors = patterns across  conditions. Top pattern = dominant biological process. Show which genes follow which pattern.",
    "mathUsed": [
      "SVD",
      "PCA on transposed data"
    ],
    "realWorldConnection": "Bioinformatics, drug discovery, cancer research",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Eigenvalues",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E6-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E6-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E6-1",
            "text": "Construct system for Gene Expression Pattern Finder"
          },
          {
            "id": "d2-E6-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E6-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E6-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E6-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E6-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E6-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E6-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E6-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E6-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E6-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E6: Gene Expression Pattern Finder\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E6-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Gene Expression Pattern Finder\" using SVD, PCA on transposed data. Show step-by-step matrix notation."
      },
      {
        "id": "p-E6-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Gene Expression Pattern Finder\"."
      },
      {
        "id": "p-E6-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Gene Expression Pattern Finder\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E6-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Gene Expression Pattern Finder\"."
      },
      {
        "id": "p-E6-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Gene Expression Pattern Finder\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E6-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Gene Expression Pattern Finder\" suitable for college evaluation."
      },
      {
        "id": "p-E6-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E6: Gene Expression Pattern Finder\" focusing on SVD, PCA on transposed data."
      }
    ],
    "resources": [
      {
        "title": "Gene Expression Pattern Finder Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E7",
    "projectCode": "E7",
    "title": "Map Reconstruction from Sparse Points",
    "category": "Singular Value Decomposition",
    "shortDescription": "A terrain's elevation measured at only 30 random points. Arrange as partial matrix. Use  SVD to fill in the gaps (matrix completion). Show r...",
    "problemStatement": "A terrain's elevation measured at only 30 random points. Arrange as partial matrix. Use  SVD to fill in the gaps (matrix completion). Show reconstructed terrain vs actual.",
    "mathUsed": [
      "SVD",
      "matrix completion"
    ],
    "realWorldConnection": "Google Maps, weather forecasting, ocean floor mapping",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E7-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E7-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E7-1",
            "text": "Construct system for Map Reconstruction from Sparse Points"
          },
          {
            "id": "d2-E7-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E7-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E7-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E7-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E7-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E7-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E7-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E7-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E7-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E7-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E7: Map Reconstruction from Sparse Points\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E7-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Map Reconstruction from Sparse Points\" using SVD, matrix completion. Show step-by-step matrix notation."
      },
      {
        "id": "p-E7-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Map Reconstruction from Sparse Points\"."
      },
      {
        "id": "p-E7-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Map Reconstruction from Sparse Points\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E7-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Map Reconstruction from Sparse Points\"."
      },
      {
        "id": "p-E7-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Map Reconstruction from Sparse Points\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E7-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Map Reconstruction from Sparse Points\" suitable for college evaluation."
      },
      {
        "id": "p-E7-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E7: Map Reconstruction from Sparse Points\" focusing on SVD, matrix completion."
      }
    ],
    "resources": [
      {
        "title": "Map Reconstruction from Sparse Points Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "E8",
    "projectCode": "E8",
    "title": "Data Center Temperature Pattern",
    "category": "Singular Value Decomposition",
    "shortDescription": "Temperature readings at 9 locations in a data center over 24 hours. Matrix: 9 locations \u00d7 24  hours. SVD reveals: singular vector 1 = overal...",
    "problemStatement": "Temperature readings at 9 locations in a data center over 24 hours. Matrix: 9 locations \u00d7 24  hours. SVD reveals: singular vector 1 = overall temperature pattern, singular vector 2 = hot spot  pattern, etc. Find where to place cooling.",
    "mathUsed": [
      "SVD",
      "spatial-temporal decomposition"
    ],
    "realWorldConnection": "Data center design, HVAC optimization, server room planning",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement SVD",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-E8-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-E8-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-E8-1",
            "text": "Construct system for Data Center Temperature Pattern"
          },
          {
            "id": "d2-E8-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-E8-1",
            "text": "Implement SVD"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-E8-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-E8-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-E8-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-E8-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-E8-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-E8-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-E8-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-E8-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"E8: Data Center Temperature Pattern\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-E8-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Data Center Temperature Pattern\" using SVD, spatial-temporal decomposition. Show step-by-step matrix notation."
      },
      {
        "id": "p-E8-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement SVD for \"Data Center Temperature Pattern\"."
      },
      {
        "id": "p-E8-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Data Center Temperature Pattern\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-E8-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Data Center Temperature Pattern\"."
      },
      {
        "id": "p-E8-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Data Center Temperature Pattern\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-E8-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Data Center Temperature Pattern\" suitable for college evaluation."
      },
      {
        "id": "p-E8-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"E8: Data Center Temperature Pattern\" focusing on SVD, spatial-temporal decomposition."
      }
    ],
    "resources": [
      {
        "title": "Data Center Temperature Pattern Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F1",
    "projectCode": "F1",
    "title": "Hill Cipher Encryption/Decryption",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "Implement the Hill cipher: break message into vectors, multiply by key matrix A  (encryption), multiply by A^(-1) (decryption). Use Gauss-Jo...",
    "problemStatement": "Implement the Hill cipher: break message into vectors, multiply by key matrix A  (encryption), multiply by A^(-1) (decryption). Use Gauss-Jordan for A^(-1). What happens if det(A) =  0? Show encryption and decryption with a real message.",
    "mathUsed": [
      "Matrix multiplication",
      "inverse via Gauss-Jordan",
      "modular arithmetic"
    ],
    "realWorldConnection": "Cryptography \u2014 Hill cipher is a real (though old) encryption system",
    "difficulty": "Beginner",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Gaussian Elimination",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Matrix multiplication",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F1-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F1-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F1-1",
            "text": "Construct system for Hill Cipher Encryption/Decryption"
          },
          {
            "id": "d2-F1-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F1-1",
            "text": "Implement Matrix multiplication"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F1-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F1-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F1-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F1-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F1-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F1-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F1-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F1-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F1: Hill Cipher Encryption/Decryption\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F1-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Hill Cipher Encryption/Decryption\" using Matrix multiplication, inverse via Gauss-Jordan, modular arithmetic. Show step-by-step matrix notation."
      },
      {
        "id": "p-F1-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Matrix multiplication for \"Hill Cipher Encryption/Decryption\"."
      },
      {
        "id": "p-F1-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Hill Cipher Encryption/Decryption\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F1-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Hill Cipher Encryption/Decryption\"."
      },
      {
        "id": "p-F1-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Hill Cipher Encryption/Decryption\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F1-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Hill Cipher Encryption/Decryption\" suitable for college evaluation."
      },
      {
        "id": "p-F1-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F1: Hill Cipher Encryption/Decryption\" focusing on Matrix multiplication, inverse via Gauss-Jordan, modular arithmetic."
      }
    ],
    "resources": [
      {
        "title": "Hill Cipher Encryption/Decryption Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F2",
    "projectCode": "F2",
    "title": "Robot Arm Position Calculator",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "2-link robot arm in 2D. Each link has a rotation matrix. Total transformation = R2 \u00d7 R1  (matrix multiplication). Given desired end position...",
    "problemStatement": "2-link robot arm in 2D. Each link has a rotation matrix. Total transformation = R2 \u00d7 R1  (matrix multiplication). Given desired end position, find joint angles (inverse kinematics). Show the  arm moving.",
    "mathUsed": [
      "Matrix multiplication",
      "rotation matrices",
      "inverse"
    ],
    "realWorldConnection": "Robotics \u2014 every robot arm from manufacturing to surgery",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Matrix multiplication",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F2-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F2-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F2-1",
            "text": "Construct system for Robot Arm Position Calculator"
          },
          {
            "id": "d2-F2-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F2-1",
            "text": "Implement Matrix multiplication"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F2-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F2-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F2-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F2-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F2-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F2-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F2-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F2-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F2: Robot Arm Position Calculator\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F2-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Robot Arm Position Calculator\" using Matrix multiplication, rotation matrices, inverse. Show step-by-step matrix notation."
      },
      {
        "id": "p-F2-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Matrix multiplication for \"Robot Arm Position Calculator\"."
      },
      {
        "id": "p-F2-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Robot Arm Position Calculator\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F2-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Robot Arm Position Calculator\"."
      },
      {
        "id": "p-F2-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Robot Arm Position Calculator\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F2-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Robot Arm Position Calculator\" suitable for college evaluation."
      },
      {
        "id": "p-F2-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F2: Robot Arm Position Calculator\" focusing on Matrix multiplication, rotation matrices, inverse."
      }
    ],
    "resources": [
      {
        "title": "Robot Arm Position Calculator Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F3",
    "projectCode": "F3",
    "title": "2D Game Transformation Engine",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "A sprite (character) in a game: rotate by angle \u03b8, scale by factor s, translate by (tx,ty). Each  is a matrix. Compose: Total = Translate \u00d7 ...",
    "problemStatement": "A sprite (character) in a game: rotate by angle \u03b8, scale by factor s, translate by (tx,ty). Each  is a matrix. Compose: Total = Translate \u00d7 Rotate \u00d7 Scale. Apply to a triangle. Show the transformation  step by step.",
    "mathUsed": [
      "Matrix multiplication",
      "transformation composition"
    ],
    "realWorldConnection": "Every 2D game (Mario, Angry Birds, etc.) uses this",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Matrix multiplication",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F3-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F3-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F3-1",
            "text": "Construct system for 2D Game Transformation Engine"
          },
          {
            "id": "d2-F3-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F3-1",
            "text": "Implement Matrix multiplication"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F3-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F3-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F3-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F3-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F3-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F3-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F3-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F3-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F3: 2D Game Transformation Engine\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F3-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"2D Game Transformation Engine\" using Matrix multiplication, transformation composition. Show step-by-step matrix notation."
      },
      {
        "id": "p-F3-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Matrix multiplication for \"2D Game Transformation Engine\"."
      },
      {
        "id": "p-F3-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"2D Game Transformation Engine\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F3-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"2D Game Transformation Engine\"."
      },
      {
        "id": "p-F3-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"2D Game Transformation Engine\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F3-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"2D Game Transformation Engine\" suitable for college evaluation."
      },
      {
        "id": "p-F3-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F3: 2D Game Transformation Engine\" focusing on Matrix multiplication, transformation composition."
      }
    ],
    "resources": [
      {
        "title": "2D Game Transformation Engine Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F4",
    "projectCode": "F4",
    "title": "Complete Linear Algebra Toolkit",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "Build a tool that takes any matrix and computes: rank, determinant, inverse (Gauss-Jordan),  eigenvalues, eigenvectors, diagonalization, C-H...",
    "problemStatement": "Build a tool that takes any matrix and computes: rank, determinant, inverse (Gauss-Jordan),  eigenvalues, eigenvectors, diagonalization, C-H verification, quadratic form nature, SVD. One tool, all  Unit I + II.",
    "mathUsed": [
      "Everything from Units I & II"
    ],
    "realWorldConnection": "This is what MATLAB/Octave/NumPy do \u2014 you're building a mini version",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 3,
    "status": "full",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Everything from Units I & II",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F4-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F4-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F4-1",
            "text": "Construct system for Complete Linear Algebra Toolkit"
          },
          {
            "id": "d2-F4-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F4-1",
            "text": "Implement Everything from Units I & II"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F4-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F4-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F4-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F4-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F4-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F4-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F4-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F4-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F4: Complete Linear Algebra Toolkit\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F4-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Complete Linear Algebra Toolkit\" using Everything from Units I & II. Show step-by-step matrix notation."
      },
      {
        "id": "p-F4-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Everything from Units I & II for \"Complete Linear Algebra Toolkit\"."
      },
      {
        "id": "p-F4-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Complete Linear Algebra Toolkit\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F4-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Complete Linear Algebra Toolkit\"."
      },
      {
        "id": "p-F4-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Complete Linear Algebra Toolkit\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F4-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Complete Linear Algebra Toolkit\" suitable for college evaluation."
      },
      {
        "id": "p-F4-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F4: Complete Linear Algebra Toolkit\" focusing on Everything from Units I & II."
      }
    ],
    "resources": [
      {
        "title": "Complete Linear Algebra Toolkit Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F5",
    "projectCode": "F5",
    "title": "Web Page Similarity via SVD + Eigenvalue",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "5 web pages. Compute similarity matrix (cosine similarity of word vectors). Find  eigenvalues = importance scores. Find SVD = topic decompos...",
    "problemStatement": "5 web pages. Compute similarity matrix (cosine similarity of word vectors). Find  eigenvalues = importance scores. Find SVD = topic decomposition. Rank pages two ways. Compare  rankings.",
    "mathUsed": [
      "Eigenvalue centrality + SVD topic modeling"
    ],
    "realWorldConnection": "SEO, search engines, content recommendation",
    "difficulty": "Advanced",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Low-Rank SVD",
      "Matrix Operations",
      "Eigenvalues",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalue centrality + SVD topic modeling",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F5-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F5-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F5-1",
            "text": "Construct system for Web Page Similarity via SVD + Eigenvalue"
          },
          {
            "id": "d2-F5-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F5-1",
            "text": "Implement Eigenvalue centrality + SVD topic modeling"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F5-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F5-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F5-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F5-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F5-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F5-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F5-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F5-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F5: Web Page Similarity via SVD + Eigenvalue\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F5-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Web Page Similarity via SVD + Eigenvalue\" using Eigenvalue centrality + SVD topic modeling. Show step-by-step matrix notation."
      },
      {
        "id": "p-F5-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalue centrality + SVD topic modeling for \"Web Page Similarity via SVD + Eigenvalue\"."
      },
      {
        "id": "p-F5-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Web Page Similarity via SVD + Eigenvalue\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F5-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Web Page Similarity via SVD + Eigenvalue\"."
      },
      {
        "id": "p-F5-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Web Page Similarity via SVD + Eigenvalue\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F5-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Web Page Similarity via SVD + Eigenvalue\" suitable for college evaluation."
      },
      {
        "id": "p-F5-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F5: Web Page Similarity via SVD + Eigenvalue\" focusing on Eigenvalue centrality + SVD topic modeling."
      }
    ],
    "resources": [
      {
        "title": "Web Page Similarity via SVD + Eigenvalue Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F6",
    "projectCode": "F6",
    "title": "Screen Rotation as Orthogonal Transformation",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "Phone screen rotation is an orthogonal matrix (det = \u00b11, preserves distances). Show  portrait \u2192 landscape rotation matrix. Show that it's or...",
    "problemStatement": "Phone screen rotation is an orthogonal matrix (det = \u00b11, preserves distances). Show  portrait \u2192 landscape rotation matrix. Show that it's orthogonal (Q^T Q = I). Apply to screen  coordinates. Show that rotating twice = 180\u00b0 rotation.",
    "mathUsed": [
      "Orthogonal matrices",
      "rotation matrices",
      "quadratic form invariance"
    ],
    "realWorldConnection": "Every app on your phone uses this when you rotate the screen",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Orthogonal matrices",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F6-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F6-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F6-1",
            "text": "Construct system for Screen Rotation as Orthogonal Transformation"
          },
          {
            "id": "d2-F6-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F6-1",
            "text": "Implement Orthogonal matrices"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F6-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F6-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F6-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F6-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F6-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F6-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F6-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F6-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F6: Screen Rotation as Orthogonal Transformation\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F6-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Screen Rotation as Orthogonal Transformation\" using Orthogonal matrices, rotation matrices, quadratic form invariance. Show step-by-step matrix notation."
      },
      {
        "id": "p-F6-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Orthogonal matrices for \"Screen Rotation as Orthogonal Transformation\"."
      },
      {
        "id": "p-F6-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Screen Rotation as Orthogonal Transformation\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F6-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Screen Rotation as Orthogonal Transformation\"."
      },
      {
        "id": "p-F6-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Screen Rotation as Orthogonal Transformation\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F6-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Screen Rotation as Orthogonal Transformation\" suitable for college evaluation."
      },
      {
        "id": "p-F6-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F6: Screen Rotation as Orthogonal Transformation\" focusing on Orthogonal matrices, rotation matrices, quadratic form invariance."
      }
    ],
    "resources": [
      {
        "title": "Screen Rotation as Orthogonal Transformation Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F7",
    "projectCode": "F7",
    "title": "Loan Payment Matrix Model",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "3 loan types with interest and payment structure. Transition matrix A maps  [principal_remaining] month-by-month. Using C-H theorem, find A^...",
    "problemStatement": "3 loan types with interest and payment structure. Transition matrix A maps  [principal_remaining] month-by-month. Using C-H theorem, find A^60 (5 years). Find total interest  paid. Find when each loan is paid off.",
    "mathUsed": [
      "Matrix powers via C-H",
      "eigenvalues",
      "steady state"
    ],
    "realWorldConnection": "Banking \u2014 every EMI calculation uses matrix models",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Matrix powers via C-H",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F7-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F7-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F7-1",
            "text": "Construct system for Loan Payment Matrix Model"
          },
          {
            "id": "d2-F7-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F7-1",
            "text": "Implement Matrix powers via C-H"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F7-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F7-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F7-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F7-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F7-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F7-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F7-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F7-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F7: Loan Payment Matrix Model\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F7-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Loan Payment Matrix Model\" using Matrix powers via C-H, eigenvalues, steady state. Show step-by-step matrix notation."
      },
      {
        "id": "p-F7-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Matrix powers via C-H for \"Loan Payment Matrix Model\"."
      },
      {
        "id": "p-F7-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Loan Payment Matrix Model\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F7-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Loan Payment Matrix Model\"."
      },
      {
        "id": "p-F7-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Loan Payment Matrix Model\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F7-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Loan Payment Matrix Model\" suitable for college evaluation."
      },
      {
        "id": "p-F7-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F7: Loan Payment Matrix Model\" focusing on Matrix powers via C-H, eigenvalues, steady state."
      }
    ],
    "resources": [
      {
        "title": "Loan Payment Matrix Model Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  },
  {
    "projectId": "F8",
    "projectCode": "F8",
    "title": "Mixture Temperature Equilibrium",
    "category": "Mixed / Multi-Topic",
    "shortDescription": "3 liquids at different temperatures are mixed and exchange heat. Heat exchange matrix  (symmetric). Eigenvalues = decay rates (fastest/slowe...",
    "problemStatement": "3 liquids at different temperatures are mixed and exchange heat. Heat exchange matrix  (symmetric). Eigenvalues = decay rates (fastest/slowest cooling). Eigenvectors = temperature  distribution modes. Find equilibrium temperature.",
    "mathUsed": [
      "Eigenvalues of symmetric matrix",
      "exponential decay modes"
    ],
    "realWorldConnection": "Chemical engineering, thermodynamics, HVAC design",
    "difficulty": "Intermediate",
    "estimatedDuration": 10,
    "requiredSkills": [
      "Linear Algebra",
      "Eigenvalues",
      "Matrix Operations",
      "Python / JS"
    ],
    "recommendedTechStack": {
      "frontend": "React / HTML / CSS",
      "backend": "Python / Node.js",
      "math": "NumPy / SymPy",
      "charts": "Recharts / Chart.js",
      "db": "Cloud Firestore"
    },
    "selectionLimit": 3,
    "selectedTeamCount": 0,
    "status": "available",
    "implementationGuide": [
      {
        "stepNumber": 1,
        "title": "Understand the Problem",
        "tasks": [
          "Read problem statement",
          "Identify inputs & outputs",
          "Identify equations"
        ],
        "deliverable": "Problem analysis doc"
      },
      {
        "stepNumber": 2,
        "title": "Mathematical Model",
        "tasks": [
          "Define variables",
          "Construct equations",
          "Create matrix A & vector B"
        ],
        "deliverable": "Mathematical model"
      },
      {
        "stepNumber": 3,
        "title": "Algorithm",
        "tasks": [
          "Implement Eigenvalues of symmetric matrix",
          "Test with sample values",
          "Verify results"
        ],
        "deliverable": "Working algorithm"
      },
      {
        "stepNumber": 4,
        "title": "Frontend Interface",
        "tasks": [
          "Create UI",
          "Add input fields",
          "Add visualization"
        ],
        "deliverable": "Working UI"
      },
      {
        "stepNumber": 5,
        "title": "Integration",
        "tasks": [
          "Connect frontend/backend",
          "Handle errors"
        ],
        "deliverable": "Integrated app"
      },
      {
        "stepNumber": 6,
        "title": "Testing",
        "tasks": [
          "Test normal cases",
          "Test edge cases"
        ],
        "deliverable": "Test report"
      },
      {
        "stepNumber": 7,
        "title": "Documentation",
        "tasks": [
          "Theory writeup",
          "Methodology",
          "Results"
        ],
        "deliverable": "Final report"
      },
      {
        "stepNumber": 8,
        "title": "Final Presentation",
        "tasks": [
          "Prepare demo",
          "Prepare slide deck",
          "Viva preparation"
        ],
        "deliverable": "Slide deck"
      }
    ],
    "dailyTasks": [
      {
        "day": 1,
        "title": "Day 1 \u2014 Problem Understanding",
        "objectives": [
          "Read & analyze statement"
        ],
        "tasks": [
          {
            "id": "d1-F8-1",
            "text": "Read problem statement"
          },
          {
            "id": "d1-F8-2",
            "text": "Identify inputs and outputs"
          }
        ],
        "expectedOutput": "Requirements Doc"
      },
      {
        "day": 2,
        "title": "Day 2 \u2014 Mathematical Modelling",
        "objectives": [
          "Formulate matrix equations"
        ],
        "tasks": [
          {
            "id": "d2-F8-1",
            "text": "Construct system for Mixture Temperature Equilibrium"
          },
          {
            "id": "d2-F8-2",
            "text": "Verify rank condition"
          }
        ],
        "expectedOutput": "Matrix Model"
      },
      {
        "day": 3,
        "title": "Day 3 \u2014 Algorithm Development",
        "objectives": [
          "Code numerical engine"
        ],
        "tasks": [
          {
            "id": "d3-F8-1",
            "text": "Implement Eigenvalues of symmetric matrix"
          }
        ],
        "expectedOutput": "Algorithm Code"
      },
      {
        "day": 4,
        "title": "Day 4 \u2014 Implementation",
        "objectives": [
          "Build core backend"
        ],
        "tasks": [
          {
            "id": "d4-F8-1",
            "text": "Build calculation engine"
          }
        ],
        "expectedOutput": "Math Engine"
      },
      {
        "day": 5,
        "title": "Day 5 \u2014 Frontend Setup",
        "objectives": [
          "Build user interface"
        ],
        "tasks": [
          {
            "id": "d5-F8-1",
            "text": "Design input controls"
          }
        ],
        "expectedOutput": "Frontend App"
      },
      {
        "day": 6,
        "title": "Day 6 \u2014 Integration",
        "objectives": [
          "Connect components"
        ],
        "tasks": [
          {
            "id": "d6-F8-1",
            "text": "Link UI to math engine"
          }
        ],
        "expectedOutput": "Integrated App"
      },
      {
        "day": 7,
        "title": "Day 7 \u2014 Testing",
        "objectives": [
          "Verify accuracy"
        ],
        "tasks": [
          {
            "id": "d7-F8-1",
            "text": "Test edge cases"
          }
        ],
        "expectedOutput": "Test Results"
      },
      {
        "day": 8,
        "title": "Day 8 \u2014 Visualization",
        "objectives": [
          "Create charts"
        ],
        "tasks": [
          {
            "id": "d8-F8-1",
            "text": "Add visual plots"
          }
        ],
        "expectedOutput": "Interactive Charts"
      },
      {
        "day": 9,
        "title": "Day 9 \u2014 Documentation",
        "objectives": [
          "Write report"
        ],
        "tasks": [
          {
            "id": "d9-F8-1",
            "text": "Prepare mini project report"
          }
        ],
        "expectedOutput": "Project Report"
      },
      {
        "day": 10,
        "title": "Day 10 \u2014 Final Presentation",
        "objectives": [
          "Viva & PPT"
        ],
        "tasks": [
          {
            "id": "d10-F8-1",
            "text": "Prepare 10-slide presentation"
          }
        ],
        "expectedOutput": "PPT & Demo"
      }
    ],
    "prompts": [
      {
        "id": "p-F8-1",
        "title": "1. Project Understanding Prompt",
        "category": "Understanding",
        "promptText": "You are helping build the mini-project \"F8: Mixture Temperature Equilibrium\". Explain the problem statement, identify the key input parameters, and describe the expected user interface output."
      },
      {
        "id": "p-F8-2",
        "title": "2. Mathematics Formulation Prompt",
        "category": "Mathematics",
        "promptText": "Explain the mathematical model for \"Mixture Temperature Equilibrium\" using Eigenvalues of symmetric matrix, exponential decay modes. Show step-by-step matrix notation."
      },
      {
        "id": "p-F8-3",
        "title": "3. Coding Prompt",
        "category": "Coding",
        "promptText": "Write a Python/JavaScript function to implement Eigenvalues of symmetric matrix for \"Mixture Temperature Equilibrium\"."
      },
      {
        "id": "p-F8-4",
        "title": "4. Debugging Prompt",
        "category": "Debugging",
        "promptText": "Analyze potential edge cases in \"Mixture Temperature Equilibrium\" such as zero determinants or singular matrices. Provide defensive checks."
      },
      {
        "id": "p-F8-5",
        "title": "5. Testing Prompt",
        "category": "Testing",
        "promptText": "Provide sample test cases and expected numerical outputs for verifying \"Mixture Temperature Equilibrium\"."
      },
      {
        "id": "p-F8-6",
        "title": "6. Documentation Prompt",
        "category": "Documentation",
        "promptText": "Write a mini-project report for \"Mixture Temperature Equilibrium\" including Introduction, Mathematical Theory, Implementation, and Results."
      },
      {
        "id": "p-F8-7",
        "title": "7. PPT Outline Prompt",
        "category": "PPT",
        "promptText": "Create a 10-slide presentation outline for \"Mixture Temperature Equilibrium\" suitable for college evaluation."
      },
      {
        "id": "p-F8-8",
        "title": "8. Viva Preparation Prompt",
        "category": "Viva",
        "promptText": "List top 10 viva voce questions and answers for mini project \"F8: Mixture Temperature Equilibrium\" focusing on Eigenvalues of symmetric matrix, exponential decay modes."
      }
    ],
    "resources": [
      {
        "title": "Mixture Temperature Equilibrium Reference",
        "type": "Doc",
        "url": "https://wikipedia.org",
        "description": "Linear algebra reference documentation."
      }
    ]
  }
];
