import { Project } from '../types/project';

export interface ComprehensiveProjectDetail {
  understandProject: {
    problem: string;
    whyItExists: string;
    targetUsers: string;
    whatWeAreBuilding: string;
    finalGoal: string;
  };
  mathFoundation: {
    concepts: string[];
    equations: string[];
    variables: { symbol: string; meaning: string }[];
    algorithm: string;
  };
  inputProcessOutput: {
    input: string[];
    process: string[];
    output: string[];
  };
  whatYouWillBuild: string[];
  finalDeliverable: string[];
  expectedDemoScenario: string[];
}

/**
 * Returns project-specific enriched overview data for any project (A1-F8).
 */
export function getComprehensiveProjectDetails(project: Project): ComprehensiveProjectDetail {
  const code = project.projectCode;
  const title = project.title;
  const problem = project.problemStatement;
  const mathStr = project.mathUsed.join(', ');
  const realWorld = project.realWorldConnection;

  // Customized details for A1 (Hospital Ward Staffing Optimizer) as explicitly specified in requirements
  if (code === 'A1') {
    return {
      understandProject: {
        problem: `A hospital operates 3 distinct wards (Ward A, Ward B, Ward C) needing nurse coverage. Ward A requires 20 staff-hours, Ward B requires 25 staff-hours, and Ward C requires 15 staff-hours. Three staff categories are available: Senior Nurses (Rs.800/hr), Junior Nurses (Rs.400/hr), and Assistant Nurses (Rs.200/hr). Each staff type spends different proportions of their shift per ward.`,
        whyItExists: `Hospitals spend up to 40% of their operational budget on nurse scheduling. Improper staffing causes overtime costs, nurse burnout, or understaffed critical care units. Manual scheduling fails to optimize costs while satisfying strict ward hours.`,
        targetUsers: `Hospital Chief Medical Officers, Ward Supervisors, Resource Planning Executives, and Healthcare Operations Managers.`,
        whatWeAreBuilding: `A web application that allows hospital administrators to enter ward hour requirements and staff hourly rates, automatically constructs the linear equation system AX = B, applies Gauss elimination, and displays the cheapest staffing mix.`,
        finalGoal: `Find the exact optimal number of Senior, Junior, and Assistant nurse hours that satisfy all ward demands at the lowest total daily cost.`
      },
      mathFoundation: {
        concepts: ['System of Linear Equations', 'Gaussian Elimination', 'Matrix Operations', 'Linear Cost Optimization'],
        equations: [
          'a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = 20 \\quad \\text{(Ward A demand)}',
          'a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = 25 \\quad \\text{(Ward B demand)}',
          'a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = 15 \\quad \\text{(Ward C demand)}',
          '\\text{Total Cost} = 800 x_1 + 400 x_2 + 200 x_3',
          'AX = B \\implies \\begin{bmatrix} a_{11} & a_{12} & a_{13} \\\\ a_{21} & a_{22} & a_{23} \\\\ a_{31} & a_{32} & a_{33} \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\\\ x_3 \\end{bmatrix} = \\begin{bmatrix} 20 \\\\ 25 \\\\ 15 \\end{bmatrix}'
        ],
        variables: [
          { symbol: 'x_1', meaning: 'Hours allocated to Senior Nurses (Rs.800/hr)' },
          { symbol: 'x_2', meaning: 'Hours allocated to Junior Nurses (Rs.400/hr)' },
          { symbol: 'x_3', meaning: 'Hours allocated to Assistant Nurses (Rs.200/hr)' },
          { symbol: 'A', meaning: 'Matrix of staff-hour allocation ratios across Wards A, B, and C' },
          { symbol: 'B', meaning: 'Vector of total required hours per ward [20, 25, 15]^T' }
        ],
        algorithm: 'Forward Gaussian elimination to transform Augmented Matrix [A|B] into Row Echelon Form, followed by Back-Substitution.'
      },
      inputProcessOutput: {
        input: [
          'Ward hour requirements (Ward A: 20h, Ward B: 25h, Ward C: 15h)',
          'Staff type hourly wages (Senior: Rs.800, Junior: Rs.400, Assistant: Rs.200)',
          'Staff shift distribution ratios across wards'
        ],
        process: [
          'Formulate linear equations relating staff hours to ward demands',
          'Construct coefficient matrix A and demand vector B',
          'Apply Gaussian elimination with row pivot operations',
          'Perform back-substitution to calculate exact staff hours x_1, x_2, x_3',
          'Multiply staff hours by hourly rates to compute total daily cost'
        ],
        output: [
          'Optimal staffing allocation breakdown (Senior, Junior, Assistant hours)',
          'Total daily hospital staffing cost in Rupees',
          'Step-by-step augmented matrix row operation table',
          'Ward demand vs. fulfilled capacity chart'
        ]
      },
      whatYouWillBuild: [
        'Interactive staffing requirement form with adjustable ward hours and hourly wages',
        'Dynamic matrix visualizer showing raw linear equations and augmented matrix [A|B]',
        'Gaussian elimination step-by-step calculation breakdown displaying intermediate row operations',
        'Cost analysis card highlighting optimal staffing mix and total daily cost',
        'Sensitivity analyzer testing alternative wage rates or emergency ward demand surges'
      ],
      finalDeliverable: [
        'Working web application with input form, matrix solver, and cost calculator',
        'Verified Gaussian elimination algorithm with step-by-step row operations',
        'Interactive result visualization charts showing staff distribution across wards',
        '17-Section academic project report with complete mathematical derivation',
        '5 Uploaded proof screenshots covering Days 1–5 development steps',
        '10-Slide presentation deck and rehearsed demo script'
      ],
      expectedDemoScenario: [
        '1. Open the application and present the hospital staffing scenario.',
        '2. Enter sample ward requirements (Ward A: 20h, Ward B: 25h, Ward C: 15h).',
        '3. Click "Generate Mathematical System" to display coefficient matrix A and vector B.',
        '4. Click "Run Gauss Elimination" and walk through the step-by-step row echelon operations.',
        '5. Display the final solution vector X (Senior, Junior, Assistant nurse hours).',
        '6. Show the total daily cost calculation in Rupees.',
        '7. Modify Ward A demand to 30 hours and demonstrate instant re-calculation.',
        '8. Conclude by demonstrating how hospital managers save cost using this model.'
      ]
    };
  }

  // Dynamic project-specific details generated based on category and math concept
  return {
    understandProject: {
      problem: problem,
      whyItExists: `Solving ${title} manually for real-world datasets is prone to human error, computationally slow, and difficult to visualize. Efficient mathematical automation enables rapid decision-making in domain applications like ${realWorld}.`,
      targetUsers: `Engineers, Analysts, Researchers, and Students working in ${realWorld}.`,
      whatWeAreBuilding: `An interactive web application that accepts domain input parameters, formulates the underlying mathematical model using ${mathStr}, computes the solution, and presents visual analytics.`,
      finalGoal: `Provide a reliable, mathematically verified software tool for ${title} with step-by-step breakdown and clear output visualization.`
    },
    mathFoundation: {
      concepts: project.mathUsed,
      equations: [
        `\\text{Formulate model for } ${title} \\text{ using } ${mathStr}`,
        `f(X) = Y \\quad \\text{where } X \\in \\mathbb{R}^n`
      ],
      variables: [
        { symbol: 'X', meaning: 'Input parameter vector / matrix derived from problem statement' },
        { symbol: 'Y', meaning: 'Computed target result / state output vector' }
      ],
      algorithm: `Algorithmic procedure implementing ${mathStr} with boundary validation.`
    },
    inputProcessOutput: {
      input: [
        `Problem inputs derived from ${title}`,
        `Real-world parameters inspired by ${realWorld}`,
        `System constraints and boundary parameters`
      ],
      process: [
        `Construct mathematical matrices / functions from inputs`,
        `Execute computational algorithm using ${mathStr}`,
        `Validate numerical convergence and precision`
      ],
      output: [
        `Computed numerical outputs and state variables`,
        `Step-by-step intermediate calculation log`,
        `Interactive chart visualizations of results`
      ]
    },
    whatYouWillBuild: [
      `User input form for ${title} parameters`,
      `Core calculation engine implementing ${mathStr}`,
      `Step-by-step mathematical breakdown panel`,
      `Interactive result dashboard with visual charts`,
      `Test case execution runner`
    ],
    finalDeliverable: [
      `Working web application for ${title}`,
      `Verified mathematical calculation engine`,
      `Interactive result visualizer and charts`,
      `17-Section academic project report`,
      `5 Uploaded proof screenshots covering Days 1–5`,
      `10-Slide presentation deck and rehearsed demo`
    ],
    expectedDemoScenario: [
      `1. Introduce ${title} and state the real-world application in ${realWorld}.`,
      `2. Enter sample parameters from the problem statement into the app.`,
      `3. Generate and explain the mathematical formulation (${mathStr}).`,
      `4. Run the calculation engine and inspect intermediate mathematical steps.`,
      `5. Review calculated final outputs and visual chart breakdowns.`,
      `6. Adjust an input parameter to demonstrate real-time model responsiveness.`,
      `7. Answer evaluator viva questions confidently.`
    ]
  };
}
