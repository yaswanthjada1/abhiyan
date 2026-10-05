import { Project, ProjectGuide, DayGuide, VivaQuestion, DocumentationSection, ProjectPrompt } from '../types/project';

/**
 * Generates a complete, project-specific 5-Day Roadmap, AI Prompts, Documentation Guide,
 * 10 Viva Questions, and Final Demo Checklist for any given project.
 */
export function generateFiveDayGuideForProject(project: Project): ProjectGuide {
  const pCode = project.projectCode;
  const pTitle = project.title;
  const pProblem = project.problemStatement;
  const pMath = project.mathUsed.join(', ');
  const pRealWorld = project.realWorldConnection;
  const pTechFrontend = project.recommendedTechStack.frontend;
  const pTechBackend = project.recommendedTechStack.backend;
  const pTechMath = project.recommendedTechStack.math;

  // 1. DAY 1 — SETUP
  const day1: DayGuide = {
    day: 1,
    title: 'SETUP',
    goal: `Understand ${pTitle}, set up development environment, and prepare inputs.`,
    objective: `Deconstruct the mathematical problem, establish system requirements, define variables, and set up local code structure for ${pTitle}.`,
    tasks: [
      {
        id: `${pCode}-d1-t1`,
        title: `Analyze ${pTitle} Problem Statement`,
        description: `Read and breakdown the problem statement: "${pProblem}". Identify input variables, target outputs, and constraints.`,
        expectedOutput: `Written problem decomposition document detailing input data types, constraints, and required calculations.`
      },
      {
        id: `${pCode}-d1-t2`,
        title: `Define Mathematical Model & Equations`,
        description: `Formulate the mathematical model using ${pMath}. Map real-world variables to mathematical matrices, vectors, or equations.`,
        expectedOutput: `Formulated mathematical equations and matrices (e.g. AX = B or eigenvalue system) on paper or markdown.`
      },
      {
        id: `${pCode}-d1-t3`,
        title: `Set Up Local Development Environment`,
        description: `Initialize project repository using ${pTechFrontend} / ${pTechBackend}. Install required mathematical libraries (${pTechMath}).`,
        expectedOutput: `Clean project template running locally with verified library imports.`
      },
      {
        id: `${pCode}-d1-t4`,
        title: `Prepare Real-World Test Data`,
        description: `Create 3 distinct sample datasets (small, realistic, and edge case) inspired by ${pRealWorld}.`,
        expectedOutput: `JSON or CSV sample dataset files ready for algorithm consumption.`
      },
      {
        id: `${pCode}-d1-t5`,
        title: `Define Application Architecture`,
        description: `Design data flow architecture connecting user inputs to ${pMath} calculations and visual dashboard outputs.`,
        expectedOutput: `System architecture diagram detailing UI components, math engine, and result display.`
      }
    ],
    expectedOutput: [
      `Deconstructed mathematical model for ${pTitle}`,
      `Configured development workspace with ${pTechMath}`,
      `3 Verified sample datasets based on ${pRealWorld}`,
      `Application architecture specification`
    ]
  };

  // 2. DAY 2 — AI VIBE CODE
  const day2Prompts: ProjectPrompt[] = [
    {
      id: `${pCode}-prompt-1`,
      title: `Prompt 1 — Project Architecture & Skeleton`,
      category: `Architecture`,
      promptText: `You are an expert full-stack developer assisting with the college mini project "${pTitle}".
Problem Statement: "${pProblem}"
Mathematical Concept: ${pMath}
Tech Stack: ${pTechFrontend}, ${pTechMath}

Generate a clean modular project architecture. Provide index.html, main application logic, and styling structure. Include clear placeholder sections for user input forms, calculation engine, step-by-step math solver, and interactive visualization dashboard.`
    },
    {
      id: `${pCode}-prompt-2`,
      title: `Prompt 2 — Core Mathematical Computation Engine`,
      category: `Core Logic`,
      promptText: `Write a robust JavaScript/TypeScript module that implements the exact mathematics for "${pTitle}" using ${pMath}.
Specific problem requirements:
- Input parameters derived from: "${pProblem}"
- Implement algorithm to compute: ${pMath}
- Return step-by-step intermediate matrices, vectors, determinant/eigenvalue calculations, and final output values.
- Handle zero divisions, singular matrices, or invalid inputs gracefully with informative error messages.`
    },
    {
      id: `${pCode}-prompt-3`,
      title: `Prompt 3 — Interactive UI & Dashboard Components`,
      category: `UI & Visualization`,
      promptText: `Create modern, accessible, professional UI components for "${pTitle}".
Include:
1. Dynamic input controls (sliders, matrix grids, data table inputs).
2. "Run Calculation" button with instant validation.
3. Results summary section highlighting key computed metrics and real-world interpretation (${pRealWorld}).
4. Step-by-step mathematical breakdown showing every intermediate row operation, vector transformation, or formula evaluation.`
    },
    {
      id: `${pCode}-prompt-4`,
      title: `Prompt 4 — Debugging & Edge-Case Validation`,
      category: `Debugging`,
      promptText: `Help me debug and test the core logic for "${pTitle}".
Check for edge cases such as:
1. Matrix dimension mismatches or invalid coefficients.
2. Boundary values (zeros, negative inputs, extreme values).
3. Floating point precision rounding for ${pMath}.
Provide a self-contained diagnostic function that logs raw calculation steps and highlights any discrepancy between expected and calculated outputs.`
    },
    {
      id: `${pCode}-prompt-5`,
      title: `Prompt 5 — Comprehensive Test Runner & Verification`,
      category: `Testing`,
      promptText: `Generate 3 unit test cases for "${pTitle}" using ${pMath}:
Case 1: Standard benchmark problem with known exact numerical answer.
Case 2: Minimal non-trivial scenario.
Case 3: Edge case (boundary condition).
Include inline code comments explaining how the mathematical formulas map to each assertion.`
    }
  ];

  const day2: DayGuide = {
    day: 2,
    title: 'AI VIBE CODE',
    goal: `Generate a functional MVP using project-specific AI prompts.`,
    objective: `Use structured AI coding prompts to build the core mathematical calculation engine and user interface for ${pTitle}.`,
    prompts: day2Prompts,
    tasks: [
      {
        id: `${pCode}-d2-t1`,
        title: `Generate Initial Project Skeleton (Prompt 1)`,
        description: `Execute Prompt 1 to establish the folder layout, HTML structure, and styling base for ${pTitle}.`,
        expectedOutput: `Base application skeleton loading without browser errors.`
      },
      {
        id: `${pCode}-d2-t2`,
        title: `Build Core Math Computation Engine (Prompt 2)`,
        description: `Feed Prompt 2 into AI tool (Claude, Gemini, ChatGPT) to generate algorithms for ${pMath}.`,
        expectedOutput: `Verified math module returning accurate output for sample data.`
      },
      {
        id: `${pCode}-d2-t3`,
        title: `Develop Interactive Frontend & Dashboard (Prompt 3)`,
        description: `Implement UI components for data input, calculation triggers, and result rendering.`,
        expectedOutput: `Interactive web form accepting custom inputs and rendering results.`
      },
      {
        id: `${pCode}-d2-t4`,
        title: `Integrate Core Engine with UI`,
        description: `Connect input forms to calculation functions and populate result cards.`,
        expectedOutput: `End-to-end interactive MVP running on local server.`
      },
      {
        id: `${pCode}-d2-t5`,
        title: `Run Debugging & Edge-Case Pass (Prompt 4)`,
        description: `Execute Prompt 4 to identify and fix runtime errors or calculation bugs.`,
        expectedOutput: `Stable MVP passing initial manual test runs.`
      }
    ],
    expectedOutput: [
      `Working MVP application for ${pTitle}`,
      `Functional ${pMath} computation module`,
      `Interactive input form and result display`,
      `Initial AI vibe-coded codebase`
    ]
  };

  // 3. DAY 3 — CUSTOMISE
  const day3: DayGuide = {
    day: 3,
    title: 'CUSTOMISE',
    goal: `Refine, verify mathematics, customize UI, and replace dummy data.`,
    objective: `CRITICAL STEP: Manually audit and verify all AI-generated code and calculations. Customize UI for ${pTitle} domain specificity.`,
    tasks: [
      {
        id: `${pCode}-d3-t1`,
        title: `MANUAL MATH AUDIT & VERIFICATION (Mandatory)`,
        description: `WARNING: Do NOT blindly trust AI code! Calculate ${pMath} manually on paper or using a verified CAS calculator for sample inputs and compare with application output.`,
        expectedOutput: `100% verified numerical matching between manual calculations and app output.`
      },
      {
        id: `${pCode}-d3-t2`,
        title: `Replace Dummy Data with Real-World Domain Data`,
        description: `Integrate realistic scenarios from ${pRealWorld}. Update labels, units, and data descriptions.`,
        expectedOutput: `Domain-authentic data models with accurate units and terminology.`
      },
      {
        id: `${pCode}-d3-t3`,
        title: `Refine Mathematical Output & Step-by-Step View`,
        description: `Add intermediate calculation steps (e.g., intermediate row operations or matrix factors) to help evaluate project depth during viva.`,
        expectedOutput: `Step-by-step mathematical breakdown section in UI.`
      },
      {
        id: `${pCode}-d3-t4`,
        title: `Enhance Visualizations & Graphs`,
        description: `Add interactive chart visualizations (${project.recommendedTechStack.charts}) showing key trends, optimal points, or matrix transformations.`,
        expectedOutput: `Dynamic interactive charts visualising ${pTitle} outcomes.`
      },
      {
        id: `${pCode}-d3-t5`,
        title: `Implement Input Validation & Boundary Checks`,
        description: `Prevent invalid user entries (negative values, blank inputs, incompatible dimensions). Display clear error notifications.`,
        expectedOutput: `User-friendly validation messages for all input fields.`
      }
    ],
    expectedOutput: [
      `Manually verified calculation engine (zero math errors)`,
      `Custom domain UI tailored for ${pRealWorld}`,
      `Step-by-step mathematical breakdown panel`,
      `Interactive data visualization charts`
    ]
  };

  // 4. DAY 4 — DOCUMENT
  const day4: DayGuide = {
    day: 4,
    title: 'DOCUMENT',
    goal: `Complete project report, documentation checklist, and proof screenshots.`,
    objective: `Write comprehensive 17-section mini-project report with explicit mathematical modeling for ${pTitle}.`,
    tasks: [
      {
        id: `${pCode}-d4-t1`,
        title: `Write Title, Abstract & Introduction`,
        description: `Draft abstract summarizing ${pTitle}, objectives, and real-world significance (${pRealWorld}).`,
        expectedOutput: `Sections 1–3 of report complete.`
      },
      {
        id: `${pCode}-d4-t2`,
        title: `Write Mathematical Theory & Model Section`,
        description: `Explain ${pMath} in detail. Document exact equations, matrix definitions, theorems, and algorithms used.`,
        expectedOutput: `Complete Section 4 & 5 with LaTeX/formatted mathematical equations.`
      },
      {
        id: `${pCode}-d4-t3`,
        title: `Document Methodology, Tech Stack & Architecture`,
        description: `Detail technology stack (${pTechFrontend}, ${pTechMath}), system architecture, and step-by-step implementation algorithm.`,
        expectedOutput: `Sections 6–9 covering methodology and code architecture.`
      },
      {
        id: `${pCode}-d4-t4`,
        title: `Capture & Attach Proof Screenshots`,
        description: `Take high-resolution screenshots of Day 1 setup, Day 2 MVP, Day 3 UI, Day 4 tests, and Day 5 outputs. Upload screenshots to workspace.`,
        expectedOutput: `5 Organized proof screenshots attached to report.`
      },
      {
        id: `${pCode}-d4-t5`,
        title: `Compile Results, Limitations, Future Scope & References`,
        description: `Summarize test case results, state assumptions/limitations, list future enhancements, and cite 3+ academic references.`,
        expectedOutput: `Final complete 17-section PDF/Word report draft.`
      }
    ],
    expectedOutput: [
      `Complete 17-section academic project report`,
      `Detailed mathematical model documentation`,
      `Proof screenshots for Days 1–5 uploaded`,
      `Bibliographic references and citations`
    ]
  };

  // 5. DAY 5 — DEMO
  const day5: DayGuide = {
    day: 5,
    title: 'DEMO',
    goal: `Final polish, presentation slides, viva Q&A review, and project demonstration.`,
    objective: `Prepare slides, rehearse 12-step demo sequence, master 10 project-specific viva questions, and execute final demonstration.`,
    tasks: [
      {
        id: `${pCode}-d5-t1`,
        title: `Final UI Polish & Demonstration Data Preparation`,
        description: `Clean application interface, verify responsive layout, and prep exact sample values for live demonstration.`,
        expectedOutput: `Production-ready application running smoothly without bugs.`
      },
      {
        id: `${pCode}-d5-t2`,
        title: `Prepare Project Presentation (PPT)`,
        description: `Create 10-slide presentation deck (Problem, Math Model, Architecture, Live Demo, Results, Viva preparation).`,
        expectedOutput: `10-slide PowerPoint / PDF presentation.`
      },
      {
        id: `${pCode}-d5-t3`,
        title: `Review 10 Project-Specific Viva Questions`,
        description: `Study and rehearse answers for all 10 project viva questions covering ${pMath} and implementation details.`,
        expectedOutput: `Confident mastery over viva questions.`
      },
      {
        id: `${pCode}-d5-t4`,
        title: `Complete Final Demo Checklist (10 Items)`,
        description: `Verify all 10 demo items (app operational, sample data ready, math checked, slides ready, team aligned).`,
        expectedOutput: `Signed 10-item demo checklist.`
      },
      {
        id: `${pCode}-d5-t5`,
        title: `Conduct Rehearsal & Live Presentation`,
        description: `Execute 12-step presentation flow: Intro -> Problem -> Math -> App Demo -> Results -> Q&A.`,
        expectedOutput: `Successful project presentation and viva defence.`
      }
    ],
    expectedOutput: [
      `10-Slide presentation deck`,
      `Rehearsed 12-step demo flow`,
      `10 Project-specific viva Q&A master list`,
      `Completed final demo checklist`
    ]
  };

  // 17-SECTION DOCUMENTATION GUIDE
  const documentationGuide: DocumentationSection[] = [
    { sectionNumber: 1, title: 'Title & Cover Page', guidance: `Official project title "${pTitle}", project code (${pCode}), team members, department, and submission date.` },
    { sectionNumber: 2, title: 'Abstract', guidance: `Concise 150-word summary of ${pTitle}, mathematical model using ${pMath}, and key results.` },
    { sectionNumber: 3, title: 'Introduction & Problem Statement', guidance: `Detailed problem description: "${pProblem}". Contextualize with real-world application in ${pRealWorld}.` },
    { sectionNumber: 4, title: 'Mathematical Theory', guidance: `Comprehensive theoretical background of ${pMath}, foundational definitions, matrix properties, and theorems.` },
    { sectionNumber: 5, title: 'Mathematical Model (Project Specific)', guidance: `Exact mathematical formulation for ${pTitle}. Map domain variables to matrices, vectors, determinants, or linear transformations.` },
    { sectionNumber: 6, title: 'Methodology', guidance: `Step-by-step approach from problem formulation to software execution and numerical output verification.` },
    { sectionNumber: 7, title: 'Algorithm & Pseudocode', guidance: `Detailed algorithmic pseudocode for computing ${pMath}, including time and space complexity.` },
    { sectionNumber: 8, title: 'System Architecture & Tech Stack', guidance: `Architecture block diagram explaining frontend (${pTechFrontend}), computation engine (${pTechMath}), and visualization components.` },
    { sectionNumber: 9, title: 'Implementation Details', guidance: `Code snippets highlighting core calculation functions, matrix handling, and data binding logic.` },
    { sectionNumber: 10, title: 'Proof Screenshots (Days 1–5)', guidance: `High-resolution annotated screenshots showing Day 1 Setup, Day 2 Code, Day 3 UI, Day 4 Reports, and Day 5 Output.` },
    { sectionNumber: 11, title: 'Test Cases & Numerical Verification', guidance: `3 Test cases (Standard, Minimal, Edge case) comparing manual mathematical calculations against system outputs.` },
    { sectionNumber: 12, title: 'Results & Performance Analysis', guidance: `Tabular results, execution speed, calculation accuracy, and dynamic chart visualizations.` },
    { sectionNumber: 13, title: 'Real-World Application & Impact', guidance: `Practical significance of solving ${pTitle} in real-world scenarios (${pRealWorld}).` },
    { sectionNumber: 14, title: 'Limitations & Assumptions', guidance: `Assumptions made in mathematical modeling (e.g. linearity, constant coefficients, boundary limits).` },
    { sectionNumber: 15, title: 'Future Scope & Enhancements', guidance: `Potential enhancements such as multi-variable expansion, cloud deployment, or AI optimization.` },
    { sectionNumber: 16, title: 'Conclusion', guidance: `Summary of project achievements, key mathematical insights gained, and software deliverables.` },
    { sectionNumber: 17, title: 'References', guidance: `Academic textbooks, papers, and web documentation cited (minimum 3 references).` }
  ];

  // 10 VIVA QUESTIONS (PROJECT SPECIFIC)
  const vivaQuestions: VivaQuestion[] = [
    {
      id: `${pCode}-v1`,
      category: 'Problem',
      question: `What is the core real-world problem addressed by "${pTitle}"?`,
      answer: `The project addresses: "${pProblem}". It solves this problem by translating real-world constraints into mathematical structures and computing optimal or exact solutions.`
    },
    {
      id: `${pCode}-v2`,
      category: 'Mathematics',
      question: `Which core mathematical concepts are used in this project?`,
      answer: `This project relies on ${pMath}. These mathematical tools allow us to formalize the relations between inputs and compute precise quantitative outcomes.`
    },
    {
      id: `${pCode}-v3`,
      category: 'Algorithm',
      question: `How does the algorithm process the input data step-by-step?`,
      answer: `First, input values are parsed into mathematical data structures (matrices/vectors). Next, algorithm operations (${pMath}) are applied iteratively or analytically. Finally, the calculated results are extracted and formatted for UI presentation.`
    },
    {
      id: `${pCode}-v4`,
      category: 'Implementation',
      question: `What technology stack was used to implement ${pTitle} and why?`,
      answer: `We used ${pTechFrontend} for responsive frontend UI, ${pTechMath} for mathematical computation, and ${project.recommendedTechStack.charts} for data visualization because they offer fast performance and precision.`
    },
    {
      id: `${pCode}-v5`,
      category: 'Results',
      question: `How did you verify that the mathematical output of your software is accurate?`,
      answer: `We performed manual step-by-step paper calculations for benchmark datasets and verified that the software output matches manual results with 100% numerical precision.`
    },
    {
      id: `${pCode}-v6`,
      category: 'Mathematics',
      question: `What happens mathematically if singular or invalid matrix inputs are provided?`,
      answer: `If singular or invalid inputs occur (e.g., zero determinant, linearly dependent rows), the system detects non-invertibility or undefined states, preventing crashes and returning an informative boundary warning.`
    },
    {
      id: `${pCode}-v7`,
      category: 'Limitations',
      question: `What are the key mathematical assumptions or limitations of this model?`,
      answer: `The model assumes linear relationships and fixed parameters. In highly non-linear or rapidly fluctuating real-world conditions, additional non-linear parameters or stochastic models would be required.`
    },
    {
      id: `${pCode}-v8`,
      category: 'Real-world',
      question: `How can this project be applied in industry (${pRealWorld})?`,
      answer: `In industry (${pRealWorld}), decision makers use these exact mathematical principles to optimize resource allocation, predict system behavior, reduce costs, and improve operational efficiency.`
    },
    {
      id: `${pCode}-v9`,
      category: 'Implementation',
      question: `How did AI assistance improve your development process during Day 2 (AI Vibe Code)?`,
      answer: `AI assisted in rapidly generating initial boilerplate code, HTML/CSS UI components, and initial function structures, allowing us to spend more time customizing and auditing the core mathematical logic on Day 3.`
    },
    {
      id: `${pCode}-v10`,
      category: 'Algorithm',
      question: `What is the computational complexity of the core algorithm in your project?`,
      answer: `For standard matrix operations (${pMath}), the polynomial time complexity ranges between O(N^2) and O(N^3). For typical mini-project dataset sizes, execution takes less than a few milliseconds.`
    }
  ];

  // FINAL DEMO CHECKLIST
  const demoChecklist: string[] = [
    `Application runs cleanly without console errors`,
    `Real-world sample input dataset prepared`,
    `Expected output verified against manual calculation`,
    `Step-by-step mathematical model display tested`,
    `UI styling cleaned and responsive on mobile & desktop`,
    `17-Section project report completed and printed/exported`,
    `Day 1 to Day 5 proof screenshots uploaded`,
    `10-Slide presentation deck (PPT) ready`,
    `12-Step demonstration flow rehearsed with team`,
    `10 Project-specific viva questions reviewed and mastered`
  ];

  return {
    day1,
    day2,
    day3,
    day4,
    day5,
    documentationGuide,
    vivaQuestions,
    demoChecklist
  };
}
