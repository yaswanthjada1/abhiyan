import {
  Project,
  ProjectGuide,
  DayGuide,
  VivaQuestion,
  DocumentationSection,
  ProjectPrompt,
  OfficialTool,
  ProblemBreakdown,
  CellGuideStep,
  DemoStep
} from '../types/project';

/**
 * Generates a complete, project-specific 5-Day Roadmap, AI Prompts,
 * Colab Guide, Report Structure, 10 Viva Questions with Examiner Testing,
 * and Final Demo Checklist for ABHIYAN.
 * 
 * WORKFLOW:
 * DAY 1 — SETUP (3 HOURS)
 * DAY 2 — AI VIBE CODE (4 HOURS)
 * DAY 3 — CUSTOMISE (3 HOURS)
 * DAY 4 — DOCUMENT (3 HOURS)
 * DAY 5 — DEMO (2 HOURS)
 * Total: 15 HOURS
 */
export function generateFiveDayGuideForProject(project: Project): ProjectGuide {
  const pCode = project.projectCode;
  const pTitle = project.title;
  const pProblem = project.problemStatement;
  const pMath = project.mathUsed.join(', ');
  const pRealWorld = project.realWorldConnection;
  const pTechMath = project.recommendedTechStack.math;

  // OFFICIAL TOOLS DEFINITION
  const officialTools: OfficialTool[] = [
    {
      name: 'Google',
      purpose: 'Search documentation, python libraries, and mathematical definitions.',
      whyNeeded: 'Quick reference for syntax errors, matrix properties, and domain context.',
      url: 'https://google.com',
      steps: [
        '1. Open Google search.',
        '2. Query official math library documentation (e.g. NumPy, SymPy).',
        '3. Verify formula definitions for your project.'
      ]
    },
    {
      name: 'GitHub',
      purpose: 'Store your project code, images, and professional README.md.',
      whyNeeded: 'Your GitHub repository link is a mandatory final submission requirement.',
      url: 'https://github.com',
      steps: [
        '1. Open GitHub and click Sign Up or Sign In.',
        '2. Create your account with a professional username.',
        '3. Create a new public repository (e.g. ' + pCode.toLowerCase() + '-' + pTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-') + ').',
        '4. Verify email and keep your username ready for submission.'
      ],
      whatNotToDo: 'Do not commit sensitive passwords or upload 500MB random data dumps.'
    },
    {
      name: 'Hugging Face',
      purpose: 'Find pre-trained AI models, datasets, and machine learning resources.',
      whyNeeded: 'Useful for projects requiring datasets, embeddings, or ML models.',
      url: 'https://huggingface.co',
      isOptional: !pTitle.toLowerCase().includes('svd') && !pTitle.toLowerCase().includes('eigen') && !pTitle.toLowerCase().includes('image'),
      steps: [
        '1. Open Hugging Face.',
        '2. Search for relevant public datasets or pre-trained models.',
        '3. Copy dataset URL or model ID for your Python Colab code.'
      ]
    },
    {
      name: 'Canva',
      purpose: 'Create 10-slide PPT presentation and 1-page summary note.',
      whyNeeded: 'Visual presentation slides are required during the 3-minute Day 5 evaluation.',
      url: 'https://canva.com',
      steps: [
        '1. Open Canva and sign in.',
        '2. Search "Presentation" to choose a modern clean template.',
        '3. Build 7-10 slides following the ABHIYAN structure.',
        '4. Export as PDF or share live link.'
      ]
    },
    {
      name: 'ChatGPT',
      purpose: 'AI project mentor for explaining concepts, generating initial Colab code, and debugging errors.',
      whyNeeded: 'Accelerates development on Day 2 (AI Vibe Code) and assists with custom code on Day 3.',
      url: 'https://chatgpt.com',
      steps: [
        '1. Open ChatGPT.',
        '2. Copy the official project-specific prompt provided in ABHIYAN.',
        '3. Paste into ChatGPT to receive Colab-ready code cells.',
        '4. Audit and test each generated code block.'
      ]
    },
    {
      name: 'Google Colab',
      purpose: 'Browser-based Python notebook environment to write, run, and save project code.',
      whyNeeded: 'You will execute all mathematical algorithms and generate visual outputs here.',
      url: 'https://colab.research.google.com',
      steps: [
        '1. Open Google Colab and sign in with Google.',
        '2. Click "New Notebook".',
        '3. Rename the notebook (e.g., ' + pCode + '_' + pTitle.replace(/[^a-zA-Z0-9]/g, '_') + ').',
        '4. Create code cells, paste code, and click the Play button to execute.',
        '5. Save notebook to Google Drive.'
      ]
    },
    {
      name: 'Google Docs',
      purpose: 'Write the comprehensive 15-section academic project report.',
      whyNeeded: 'Required for Day 4 project documentation.',
      url: 'https://docs.google.com',
      steps: [
        '1. Open Google Docs and create a blank document.',
        '2. Add title, cover page, abstract, and 15 report sections.',
        '3. Export report as PDF for submission.'
      ]
    }
  ];

  // PROBLEM BREAKDOWN FOR DAY 1
  const problemBreakdown: ProblemBreakdown = {
    whatToBuild: `An interactive Python application in Google Colab that models and solves "${pTitle}" using ${pMath}.`,
    targetUser: `Engineers, analysts, and decision-makers in ${pRealWorld}.`,
    inputs: `Numerical parameters, matrix dimensions, boundary values, or dataset inputs relevant to ${pTitle}.`,
    outputs: `Calculated mathematical solution, optimized values, matrix representations, and visual trend charts.`,
    mathConcept: pMath,
    finalDemoGoal: `A working Colab notebook that accepts inputs, computes ${pMath} step-by-step, displays clear results, and includes presentation slides.`,
    checklist: [
      `I understand the problem statement for ${pTitle}`,
      `I know what inputs the system requires`,
      `I know what expected output should be produced`,
      `I understand the mathematical concept (${pMath})`,
      `I can explain this project in 30 seconds to an evaluator`
    ]
  };

  // 1. DAY 1 — SETUP (3 HOURS)
  const day1: DayGuide = {
    day: 1,
    title: 'SETUP',
    hours: 3,
    goal: `Set up all required tools, verify Google Colab environment, and understand ${pTitle}.`,
    objective: `Complete account creations, run Hello World in Colab, read problem statement, and get AI concept explanation.`,
    tools: officialTools.filter(t => ['Google', 'GitHub', 'Hugging Face', 'Canva', 'ChatGPT', 'Google Colab'].includes(t.name)),
    prompts: [
      {
        id: `${pCode}-d1-concept-prompt`,
        title: `Day 1 — Ask ChatGPT to Explain Concept`,
        category: `Understanding`,
        promptText: `You are my mathematics project mentor.

My project is:
${pTitle} (${pCode})

Problem statement:
"${pProblem}"

Mathematical concept:
${pMath}

Real-world application:
${pRealWorld}

Explain this to me as a B.Tech student who needs to build the project.

Explain:
1. What the real-world problem means in simple terms
2. The exact mathematics behind it (${pMath})
3. What the input variables represent
4. How the mathematical model is formed
5. What algorithm we will implement in Python
6. What the final demo application should do

Do not write code yet. I want to understand the problem first.`
      }
    ],
    tasks: [
      {
        id: `${pCode}-d1-t1`,
        title: `Create Your Accounts`,
        description: `Set up Google, GitHub, Hugging Face, and Canva accounts for the project.`,
        why: `You will use these tools throughout the 5-day project workflow.`,
        how: `Click Open on each tool card, sign up with a professional email, and verify account creation.`,
        expectedOutput: `Active accounts on Google, GitHub, Hugging Face, and Canva.`
      },
      {
        id: `${pCode}-d1-t2`,
        title: `Test Google Colab — Run Hello World`,
        description: `Open Google Colab, create notebook "${pCode}_${pTitle.replace(/[^a-zA-Z0-9]/g, '_')}", and run Python print("Hello World").`,
        why: `Google Colab is where you will write and run your Python project code.`,
        how: `Open Colab -> New Notebook -> Rename to ${pCode}_${pTitle.replace(/[^a-zA-Z0-9]/g, '_')} -> Add cell print("Hello World") -> Click Play.`,
        expectedOutput: `Hello World printed below code cell without errors.`,
        checkpoints: [
          `Colab opens successfully`,
          `Python environment initializes`,
          `Hello World runs and prints output`,
          `Notebook renamed to ${pCode}_${pTitle.replace(/[^a-zA-Z0-9]/g, '_')}`,
          `Student knows how to create, run, save, and download a cell`
        ]
      },
      {
        id: `${pCode}-d1-t3`,
        title: `Read & Understand Your Problem Statement`,
        description: `Deconstruct "${pProblem}" into inputs, outputs, mathematical formulation, and demo goals.`,
        why: `You must be able to explain the problem in your own words before writing code.`,
        how: `Review the "UNDERSTAND YOUR PROBLEM" card below and complete the 5-step problem comprehension checklist.`,
        expectedOutput: `Complete problem breakdown with clear understanding of ${pMath}.`
      },
      {
        id: `${pCode}-d1-t4`,
        title: `Ask ChatGPT to Explain Concept`,
        description: `Copy the Day 1 concept prompt into ChatGPT to understand real-world context and math theory.`,
        why: `Gaining an intuitive conceptual understanding ensures you perform well in Day 5 viva.`,
        how: `Click [COPY PROMPT], open ChatGPT, paste prompt, and read the mentor explanation carefully.`,
        expectedOutput: `Conceptual clarity on ${pTitle} and ${pMath}.`
      }
    ],
    expectedOutput: [
      `Accounts set up on GitHub, Canva, Colab, Google`,
      `Working Google Colab notebook with Python Hello World`,
      `Verified understanding of problem statement for ${pTitle}`,
      `AI mentor explanation of mathematical concepts (${pMath})`
    ]
  };

  // 2. DAY 2 — AI VIBE CODE (4 HOURS)
  const day2BuildPromptText = `You are helping me build a B.Tech mathematics mini project.

Project Title:
${pTitle} (${pCode})

Problem Statement:
"${pProblem}"

Mathematical Concept:
${pMath}

Real-World Context:
${pRealWorld}

Environment:
Google Colab + Python (${pTechMath})

Build a complete first working version of this project.

Requirements:
1. Accept the required problem inputs dynamically or from clean user configuration variables.
2. Construct the mathematical model (${pMath}) step-by-step.
3. Implement the core algorithm cleanly using standard Python libraries (${pTechMath}, matplotlib/seaborn).
4. Calculate the numerical solution accurately.
5. Display the result clearly in readable formatted text/tables.
6. Include useful, beautiful visual charts explaining the mathematical result.
7. Keep the code beginner-friendly and well-structured.
8. Divide the code into logical Colab-ready cells (Imports, Inputs, Math Engine, Output Display, Charts).
9. Add comments explaining important mathematical steps.
10. Include a small realistic benchmark test dataset.

Do not invent arbitrary mathematical formulas.
If an assumption is required, clearly state it before using it.

Return the complete solution as separate Colab-ready cells.`;

  const day2DebugPromptText = `My Colab project is:
${pTitle} (${pCode}) using ${pMath}.

I am getting this error or incorrect mathematical result:
[PASTE YOUR ERROR OR INCORRECT OUTPUT HERE]

Here is my current code snippet:
[PASTE RELEVANT COLAB CELL CODE HERE]

Find the actual cause of this issue.
Explain the error in simple terms for a B.Tech student.
Provide the smallest reliable fix.
Verify that the ${pMath} mathematical calculations remain correct.
Do not rewrite the entire project unless necessary.`;

  const cellGuideSteps: CellGuideStep[] = [
    {
      stepNumber: 1,
      title: 'Cell 1: Environment Setup & Library Imports',
      action: `Copy and paste Cell 1 (import numpy as np, import matplotlib.pyplot as plt, etc.) into Colab and click Play.`,
      expectedResult: `Execution finished in ~1s with 0 errors. Libraries loaded cleanly.`
    },
    {
      stepNumber: 2,
      title: 'Cell 2: Benchmark Dataset & Input Parameters',
      action: `Copy and paste Cell 2 defining problem input matrix/parameters for "${pTitle}". Run the cell.`,
      expectedResult: `Inputs printed neatly showing input shapes and initial variables.`
    },
    {
      stepNumber: 3,
      title: 'Cell 3: Mathematical Model & Core Algorithm Engine',
      action: `Copy and paste Cell 3 implementing ${pMath}. Run the cell.`,
      expectedResult: `Core solver function executes without error, returning computed mathematical result.`
    },
    {
      stepNumber: 4,
      title: 'Cell 4: Formatted Result Output Display',
      action: `Copy and paste Cell 4 to format and print solution summary tables. Run the cell.`,
      expectedResult: `Formatted numerical results displayed below cell showing exact solution.`
    },
    {
      stepNumber: 5,
      title: 'Cell 5: Data Visualization & Chart Generation',
      action: `Copy and paste Cell 5 rendering matplotlib/seaborn visualization graphs. Run the cell.`,
      expectedResult: `Clean visual chart generated below the cell explaining ${pTitle} outcomes.`
    }
  ];

  const day2: DayGuide = {
    day: 2,
    title: 'AI VIBE CODE',
    hours: 4,
    goal: `Build the first working MVP version of ${pTitle} in Google Colab using AI vibe coding.`,
    objective: `Generate code with ChatGPT prompt, copy cell-by-cell into Colab, debug errors, and verify working MVP with outputs.`,
    visualFlow: ['UNDERSTAND', 'PROMPT', 'GENERATE', 'COPY', 'RUN', 'DEBUG', 'WORKING MVP'],
    tools: officialTools.filter(t => ['ChatGPT', 'Google Colab'].includes(t.name)),
    prompts: [
      {
        id: `${pCode}-d2-build-prompt`,
        title: `Day 2 — Single Strong Coding Prompt (Build MVP)`,
        category: `Coding`,
        promptText: day2BuildPromptText
      }
    ],
    debugPrompt: {
      id: `${pCode}-d2-debug-prompt`,
      title: `Day 2 — Debugging & Fix Prompt`,
      category: `Debugging`,
      promptText: day2DebugPromptText
    },
    warningMessage: `AI-generated code is a starting point, not proof that your project is correct.`,
    warningChecklist: [
      `Run every cell in Colab from top to bottom`,
      `Check the computed numerical result`,
      `Understand the important mathematical calculations (${pMath})`,
      `Compare at least one result manually on paper`,
      `Fix errors using the debugging prompt instead of hiding them`
    ],
    cellGuide: cellGuideSteps,
    checkpoints: [
      `Colab notebook runs from top to bottom without crashing`,
      `No unresolved syntax or runtime errors in console`,
      `Inputs accept parameters for ${pTitle}`,
      `Mathematical calculation engine computes results using ${pMath}`,
      `Numerical solution output is clearly visible`,
      `Visualization chart renders correctly`,
      `At least one benchmark test case produces verified result`
    ],
    tasks: [
      {
        id: `${pCode}-d2-t1`,
        title: `Copy Build Prompt & Generate Code in ChatGPT`,
        description: `Use the project-specific coding prompt to request Colab-ready cells from ChatGPT.`,
        why: `AI vibe coding accelerates initial development so you can focus on testing mathematical logic.`,
        how: `Click [COPY PROMPT], open ChatGPT, send prompt, and review generated Python code.`,
        expectedOutput: `Complete set of Colab Python code cells for ${pTitle}.`
      },
      {
        id: `${pCode}-d2-t2`,
        title: `Copy Cell-by-Cell into Colab & Run Each Cell`,
        description: `Follow the Cell-by-Cell guide to paste each block into a separate Colab code cell and run in sequence.`,
        why: `Running cell-by-cell makes it easy to isolate and fix syntax or import errors immediately.`,
        how: `Create code cells 1 through 5 in Colab, paste code, and hit Play on each.`,
        expectedOutput: `All 5 cells executing sequentially in Google Colab.`
      },
      {
        id: `${pCode}-d2-t3`,
        title: `Debug Runtime & Math Errors with ChatGPT`,
        description: `If any error occurs, copy error traceback into the Day 2 Debugging Prompt and get targeted fix.`,
        why: `Fixing errors systematically builds deep understanding of your codebase.`,
        how: `Paste error text into debugging prompt, ask ChatGPT, and replace the broken Colab cell.`,
        expectedOutput: `Clean notebook execution with 0 errors.`
      },
      {
        id: `${pCode}-d2-t4`,
        title: `Verify MVP Working Checkpoint & Capture Screenshots`,
        description: `Confirm all 7 MVP working checkpoints and take screenshots of code, output table, and chart.`,
        why: `Proof screenshots demonstrate progress and will be included in your Day 4 documentation.`,
        how: `Review checkpoint list, take screenshot of Colab output, and click [Upload Evidence].`,
        expectedOutput: `Uploaded proof screenshots for Day 2 MVP.`
      }
    ],
    expectedOutput: [
      `Working Google Colab notebook for ${pTitle}`,
      `Verified mathematical computation (${pMath})`,
      `Output charts and formatted numerical results`,
      `Day 2 proof screenshot uploaded to ABHIYAN workspace`
    ]
  };

  // 3. DAY 3 — CUSTOMISE (3 HOURS)
  const day3CustomPromptText = `My project is:
${pTitle} (${pCode}) solving "${pProblem}" using ${pMath}.

The current working version has basic inputs and output charts.

I want to add meaningful team customization to make this project our own:
1. Add team header info and custom benchmark dataset for ${pRealWorld}.
2. Add an additional analysis feature (e.g., parameter sensitivity plot, trade-off comparisons, or extra test cases).
3. Improve visualization layout with clear title, axis labels, and legend.

Help me modify only the required Colab cells.
Do not rewrite working code unnecessarily.
Keep the mathematical calculation (${pMath}) 100% correct.
Explain exactly which Colab cell needs to change and provide the updated cell code.`;

  const readmeStarterText = `# ${pTitle} (${pCode})
## Mathematics Mini Project — ABHIYAN

### 1. Problem Statement
${pProblem}

### 2. Mathematical Concept & Model
- **Core Mathematics:** ${pMath}
- **Domain Application:** ${pRealWorld}
- **Variables & Equations:**
  - Map physical parameters to algebraic matrix/vector structures.

### 3. Methodology & Algorithm
1. Parse problem input data into matrix/numerical arrays.
2. Execute core ${pMath} algorithm engine in Python.
3. Compute solution vector/matrix and verify numerical accuracy.
4. Render visualization graphs and output tables.

### 4. Implementation Details
- **Environment:** Google Colab / Python
- **Key Libraries:** ${pTechMath}, Matplotlib

### 5. Results & Discussion
- Solution output table.
- Interactive charts explaining outcomes in ${pRealWorld}.

### 6. Screenshots & Proof of Work
- Day 1: Setup & Colab Hello World
- Day 2: AI Vibe Code MVP Output
- Day 3: Custom Analysis & Visualizations

### 7. Real-World Impact
${pRealWorld}

### 8. Limitations & Assumptions
- Linear relationships assumed.
- Boundary conditions constrained by input bounds.

### 9. Future Scope
- Real-time cloud API integration.
- Extension to multi-objective optimization.

### 10. Team Information
- **Team Name:** [Your Team Name]
- **Leader:** [Leader Name & Roll No]
- **Members:** [Member Names & Roll Nos]`;

  const day3: DayGuide = {
    day: 3,
    title: 'CUSTOMISE',
    hours: 3,
    goal: `Customize ${pTitle} with team data, meaningful extra analysis, improved charts, and README.md starter.`,
    objective: `Add team information, custom dataset, secondary mathematical analysis, enhanced charts, and draft README.md.`,
    tools: officialTools.filter(t => ['ChatGPT', 'Google Colab', 'GitHub'].includes(t.name)),
    prompts: [
      {
        id: `${pCode}-d3-custom-prompt`,
        title: `Day 3 — Customization AI Prompt`,
        category: `UI & Visualization`,
        promptText: day3CustomPromptText
      }
    ],
    readmeStarterTemplate: readmeStarterText,
    checkpoints: [
      `Project title and team name added to notebook header`,
      `Custom team dataset or input example tested`,
      `Additional meaningful analysis plot or comparison added`,
      `Visualization title, axis labels, and legends formatted cleanly`,
      `Manual paper verification check performed for math accuracy`,
      `README.md starter template drafted`
    ],
    tasks: [
      {
        id: `${pCode}-d3-t1`,
        title: `Add Team Information & Custom Data`,
        description: `Add team name, roll numbers, and a custom test dataset relevant to ${pRealWorld} in Colab Cell 1.`,
        why: `Customizing input data proves that your project is your team's original work.`,
        how: `Edit input parameters in Colab Cell 2 to include team-specific values and domain scenarios.`,
        expectedOutput: `Updated notebook running with custom team data.`
      },
      {
        id: `${pCode}-d3-t2`,
        title: `Add Extra Analysis & Enhanced Visualizations`,
        description: `Use Day 3 Customization Prompt to generate trade-off plots, parameter sweeps, or secondary comparisons.`,
        why: `High-quality visualizations impress evaluators and demonstrate deep analytical thinking.`,
        how: `Copy Day 3 prompt to ChatGPT, paste custom code cell into Colab, and run to render enhanced graphs.`,
        expectedOutput: `Enhanced visual chart showing parameter analysis.`
      },
      {
        id: `${pCode}-d3-t3`,
        title: `Perform Manual Math Audit & Paper Verification`,
        description: `Calculate one sample case manually on paper and compare with Colab output for ${pMath}.`,
        why: `Evaluators will question calculation steps during viva. Paper verification ensures zero hidden bugs.`,
        how: `Solve sample matrix/equation on paper, compare numbers with Colab output, and document match.`,
        expectedOutput: `100% numerical match between paper math and Colab code.`
      },
      {
        id: `${pCode}-d3-t4`,
        title: `Draft README.md Starter Template`,
        description: `Copy the provided README.md starter template and customize sections for ${pTitle}.`,
        why: `Preparing README.md now makes Day 4 GitHub documentation effortless.`,
        how: `Click [COPY README TEMPLATE], save to your project journal or text editor, and fill team details.`,
        expectedOutput: `Drafted README.md ready for GitHub upload.`
      }
    ],
    expectedOutput: [
      `Customized Colab notebook with team dataset`,
      `Enhanced data visualization chart`,
      `Verified numerical calculation (${pMath})`,
      `Drafted README.md file`
    ]
  };

  // 4. DAY 4 — DOCUMENT (3 HOURS)
  const reportSectionsList: DocumentationSection[] = [
    { sectionNumber: 1, title: 'Introduction', guidance: `Briefly introduce ${pTitle}, its background, and context in ${pRealWorld}.` },
    { sectionNumber: 2, title: 'Problem Statement', guidance: `State the exact problem statement "${pProblem}" and define the primary objective.` },
    { sectionNumber: 3, title: 'Objectives', guidance: `List 3–4 specific goals achieved by this project (modeling, mathematical solution, visualization).` },
    { sectionNumber: 4, title: 'Mathematical Foundation', guidance: `Explain theoretical principles of ${pMath}, matrix definitions, and theorems used.` },
    { sectionNumber: 5, title: 'Mathematical Model', guidance: `Show exact equations, matrix AX=B formulations, or transformations derived for ${pTitle}.` },
    { sectionNumber: 6, title: 'Methodology', guidance: `Describe step-by-step approach from problem formulation to Python Colab execution.` },
    { sectionNumber: 7, title: 'Algorithm', guidance: `Write clear step-by-step pseudocode for implementing ${pMath}.` },
    { sectionNumber: 8, title: 'Implementation', guidance: `Explain Python implementation, key functions, and libraries (${pTechMath}).` },
    { sectionNumber: 9, title: 'Test Cases', guidance: `Present benchmark test case tables comparing manual paper math against Colab outputs.` },
    { sectionNumber: 10, title: 'Results', guidance: `Show numerical results, execution output summary, and key findings.` },
    { sectionNumber: 11, title: 'Real-World Application', guidance: `Detail practical real-world benefits in ${pRealWorld}.` },
    { sectionNumber: 12, title: 'Limitations', guidance: `State mathematical modeling assumptions (linearity, fixed constraints, boundary limits).` },
    { sectionNumber: 13, title: 'Future Scope', guidance: `Describe potential future upgrades such as web UI, real-time data feeds, or optimization extensions.` },
    { sectionNumber: 14, title: 'Conclusion', guidance: `Summarize key project outcomes and learning experience.` },
    { sectionNumber: 15, title: 'References', guidance: `List textbook, paper, and web documentation references (minimum 3 citations).` }
  ];

  const day4: DayGuide = {
    day: 4,
    title: 'DOCUMENT',
    hours: 3,
    goal: `Complete GitHub repository, Canva PPT slides, 1-page note, and 15-section Google Docs report.`,
    objective: `Upload Colab notebook & README to GitHub, build presentation in Canva, and write detailed report in Google Docs.`,
    tools: officialTools.filter(t => ['GitHub', 'Canva', 'Google Docs'].includes(t.name)),
    reportSections: reportSectionsList,
    shortNoteStructure: `ABHIYAN MINI PROJECT — 1-PAGE SUMMARY NOTE
Project: ${pTitle} (${pCode})
Problem: ${pProblem}
Mathematical Concept: ${pMath}
Methodology: Formulated matrix model -> Solved via Python Colab -> Verified results.
Key Results: Computed optimal solution with zero numerical error.
Real-World Impact: Applied to ${pRealWorld}.
Team: [Team Name & Members]`,
    checkpoints: [
      `GitHub repository created and set to public`,
      `README.md uploaded to GitHub repo root`,
      `Colab notebook uploaded to GitHub repo`,
      `7–10 Slide Canva presentation deck created and saved`,
      `1-Page summary note created in Canva`,
      `15-Section detailed report written in Google Docs`,
      `All deliverable links copied and tested`
    ],
    tasks: [
      {
        id: `${pCode}-d4-t1`,
        title: `Upload Project to GitHub`,
        description: `Create GitHub repo, upload Colab notebook (.ipynb), add README.md, and copy repository URL.`,
        why: `GitHub repository link is required for project verification and grade assessment.`,
        how: `Open GitHub -> New Repo -> Add README.md -> Upload Colab notebook -> Copy repository URL.`,
        expectedOutput: `Accessible GitHub repository containing notebook and README.md.`
      },
      {
        id: `${pCode}-d4-t2`,
        title: `Create 10-Slide Canva PPT Presentation`,
        description: `Use Canva presentation template to build 7–10 slides following the recommended slide structure.`,
        why: `Visual slides keep your presentation focused and professional during the Day 5 demo.`,
        how: `Open Canva -> Search "Presentation" -> Create slides (Title, Problem, Math, Algorithm, Code, Results, Conclusion).`,
        expectedOutput: `Completed 10-slide presentation deck.`
      },
      {
        id: `${pCode}-d4-t3`,
        title: `Create 1-Page Summary Short Note in Canva`,
        description: `Create a concise 1-page summary note covering problem, math concept, method, result, and team info.`,
        why: `A 1-page summary note provides quick evaluation reference for project judges.`,
        how: `Use Canva poster/document template, paste 1-page structure text, format, and save as PDF.`,
        expectedOutput: `1-Page visual summary note.`
      },
      {
        id: `${pCode}-d4-t4`,
        title: `Write 15-Section Detailed Report in Google Docs`,
        description: `Open Google Docs and write the 15-section academic report following the detailed guidance below.`,
        why: `The detailed report documents mathematical rigor and complete project documentation.`,
        how: `Open Google Docs -> Create 15 section headers -> Write 1–3 sentences per section -> Export PDF.`,
        expectedOutput: `Complete 15-section PDF project report.`
      }
    ],
    expectedOutput: [
      `Public GitHub repository with Colab notebook and README.md`,
      `10-Slide Canva presentation deck`,
      `1-Page summary short note`,
      `15-Section Google Docs detailed report`
    ]
  };

  // 5. DAY 5 — DEMO (2 HOURS)
  const demoScriptSteps: DemoStep[] = [
    { timeframe: '0:00–0:30', section: 'Problem Statement', guidance: `Introduce project title (${pTitle}), state real-world problem in ${pRealWorld}, and outline objective.` },
    { timeframe: '0:30–1:00', section: 'Mathematical Model', guidance: `Explain core mathematical concept (${pMath}), variable mapping, and matrix/equation formulation.` },
    { timeframe: '1:00–2:00', section: 'Working Colab Demo', guidance: `Show live Google Colab notebook. Change input parameters, click Play, and show calculated output and chart.` },
    { timeframe: '2:00–2:30', section: 'Explain Results', guidance: `Interpret computed output values and explain what they mean for decision-makers in ${pRealWorld}.` },
    { timeframe: '2:30–3:00', section: 'Conclusion & Q&A', guidance: `Summarize achievements, state future scope, and invite evaluator questions.` }
  ];

  const vivaQuestionsList: VivaQuestion[] = [
    {
      id: `${pCode}-v1`,
      category: 'Problem',
      question: `What problem does your project "${pTitle}" solve?`,
      answer: `It solves "${pProblem}" by formulating real-world constraints into mathematical models and computing optimal solutions.`,
      examinerTesting: `Tests if the student understands the practical objective beyond coding.`
    },
    {
      id: `${pCode}-v2`,
      category: 'Mathematics',
      question: `What is the core mathematical concept used in this project?`,
      answer: `The core mathematical concept is ${pMath}, which converts problem parameters into computable algebraic matrix or analytical structures.`,
      examinerTesting: `Tests theoretical mathematical foundation.`
    },
    {
      id: `${pCode}-v3`,
      category: 'Algorithm',
      question: `How does your algorithm process input data step-by-step?`,
      answer: `Input parameters are parsed into numpy arrays/matrices, passed to the ${pMath} algorithm engine, solved for numerical outputs, and plotted as Matplotlib charts.`,
      examinerTesting: `Tests logic and algorithmic execution clarity.`
    },
    {
      id: `${pCode}-v4`,
      category: 'Implementation',
      question: `Why did you choose Google Colab and Python (${pTechMath}) for implementation?`,
      answer: `Python with ${pTechMath} provides robust vector and matrix operations, while Google Colab offers an interactive cloud environment without installation overhead.`,
      examinerTesting: `Tests technology stack rationale.`
    },
    {
      id: `${pCode}-v5`,
      category: 'Results',
      question: `How did you verify that your code calculations are correct?`,
      answer: `We performed manual paper calculations for benchmark test cases and verified a 100% numerical match with Colab notebook outputs.`,
      examinerTesting: `Tests validation rigor and accuracy check.`
    },
    {
      id: `${pCode}-v6`,
      category: 'Mathematics',
      question: `What edge cases or boundary conditions could cause mathematical errors?`,
      answer: `Singular matrices (zero determinant), negative real-world values, or division by zero. We handle these by validating input constraints before computation.`,
      examinerTesting: `Tests error handling and mathematical edge-case awareness.`
    },
    {
      id: `${pCode}-v7`,
      category: 'Limitations',
      question: `What are the mathematical limitations of your current model?`,
      answer: `The model assumes linear parameter relationships. In real-world non-linear or dynamic scenarios, non-linear optimization would be required.`,
      examinerTesting: `Tests critical thinking and awareness of model boundaries.`
    },
    {
      id: `${pCode}-v8`,
      category: 'Real-world',
      question: `How is this mathematical concept used in industry?`,
      answer: `In ${pRealWorld}, organizations use ${pMath} daily for optimization, cost reduction, data compression, and predictive analytics.`,
      examinerTesting: `Tests real-world domain relevance.`
    },
    {
      id: `${pCode}-v9`,
      category: 'Algorithm',
      question: `What is the time complexity of your mathematical algorithm?`,
      answer: `For matrix operations in ${pMath}, computational complexity ranges between O(N^2) and O(N^3), executing in under a few milliseconds for typical datasets.`,
      examinerTesting: `Tests computer science fundamentals and algorithmic analysis.`
    },
    {
      id: `${pCode}-v10`,
      category: 'Results',
      question: `What major conclusion did your team draw from the project results?`,
      answer: `We demonstrated that ${pMath} effectively automates complex decision-making for ${pTitle} with high numerical precision and visual clarity.`,
      examinerTesting: `Tests presentation confidence and synthesis capability.`
    }
  ];

  const day5: DayGuide = {
    day: 5,
    title: 'DEMO',
    hours: 2,
    goal: `Practice 3-minute explanation, review 10 viva questions, test live notebook execution, and submit deliverables.`,
    objective: `Rehearse presentation timing, master viva Q&A, demo to a friend, and complete final submission checklist.`,
    tools: officialTools.filter(t => ['Google Colab', 'GitHub', 'Canva'].includes(t.name)),
    demoScript: demoScriptSteps,
    vivaQuestions: vivaQuestionsList,
    checkpoints: [
      `Google Colab notebook runs top to bottom cleanly`,
      `GitHub repository URL verified and accessible`,
      `README.md uploaded to GitHub`,
      `10-Slide Canva presentation ready`,
      `1-Page summary short note ready`,
      `15-Section detailed report completed`,
      `Proof screenshots captured for all 5 days`,
      `3-Minute demonstration flow rehearsed`,
      `10 Viva Q&A reviewed and mastered`
    ],
    tasks: [
      {
        id: `${pCode}-d5-t1`,
        title: `Final Check — Clean Colab Run`,
        description: `Restart kernel and run all cells in Colab from top to bottom to ensure zero runtime warnings or errors.`,
        why: `A clean execution during live evaluation prevents embarrassing live bugs.`,
        how: `In Colab: Runtime -> Restart and run all. Verify all outputs render.`,
        expectedOutput: `0 console errors, clean execution.`
      },
      {
        id: `${pCode}-d5-t2`,
        title: `Practice 3-Minute Demo Explanation`,
        description: `Rehearse the exact 3-minute demonstration timing script with your team members.`,
        why: `Evaluators strictly enforce presentation time limits.`,
        how: `Follow the 3-minute demo timing guide (Problem -> Math -> Colab Demo -> Results -> Conclusion).`,
        expectedOutput: `Rehearsed 3-minute demo completed smoothly within time.`
      },
      {
        id: `${pCode}-d5-t3`,
        title: `Review 10 Project-Specific Viva Questions`,
        description: `Study the 10 viva questions and short answers covering problem, math, algorithm, and real-world impact.`,
        why: `Viva Q&A carries major evaluation marks.`,
        how: `Read each question, review what the examiner is testing, and practice explaining answers out loud.`,
        expectedOutput: `Confident preparation for evaluator viva questions.`
      },
      {
        id: `${pCode}-d5-t4`,
        title: `Demo to a Friend & Complete Final Submission Checklist`,
        description: `Present your 3-minute demo to a peer, verify comprehension, and complete all 9 submission checkpoints.`,
        why: `Peer feedback highlights unclear slides or explanations before final evaluation.`,
        how: `Present to a friend, check all 9 items on the READY TO SUBMIT checklist, and confirm READY FOR DEMO.`,
        expectedOutput: `All 9 deliverables ready for final evaluation.`
      }
    ],
    expectedOutput: [
      `Rehearsed 3-minute live demonstration flow`,
      `Mastered 10 project-specific viva Q&A`,
      `Clean, bug-free Google Colab notebook`,
      `Completed READY TO SUBMIT checklist (9/9 items)`
    ]
  };

  return {
    day1,
    day2,
    day3,
    day4,
    day5,
    problemBreakdown,
    documentationGuide: reportSectionsList,
    vivaQuestions: vivaQuestionsList,
    demoChecklist: [
      `Working Google Colab notebook`,
      `GitHub repository`,
      `README.md`,
      `PPT presentation`,
      `One-page short note`,
      `Detailed report`,
      `Screenshots uploaded`,
      `Demo ready`,
      `Viva preparation complete`
    ]
  };
}

