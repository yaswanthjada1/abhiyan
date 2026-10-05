import { Project, ProjectGuide, DayGuide, VivaQuestion, DocumentationSection, ProjectPrompt } from '../types/project';

/**
 * Generates a complete, project-specific 5-Day Roadmap, 6 Realistic AI Prompts,
 * Documentation Guide, 10 Viva Questions, and Final Demo Checklist for any given project.
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

  // 6 REALISTIC, HIGH-QUALITY, PROJECT-SPECIFIC AI PROMPTS
  const projectPrompts: ProjectPrompt[] = [
    {
      id: `${pCode}-prompt-1`,
      title: `Prompt 1 — Build the First Version (MVP)`,
      category: `Architecture`,
      promptText: `You are helping me build a college mini-project titled "${pTitle}".

Problem Statement:
"${pProblem}"

Mathematics:
${pMath}

Tech Stack:
Use ${pTechFrontend} with JavaScript/TypeScript and ${pTechMath}.

Build a simple working MVP application that allows the user to enter the required problem parameters, constructs the mathematical model, solves it using ${pMath}, and displays the solution.

Do not invent mathematical assumptions. Clearly identify any assumptions you need me to provide.

Start by creating the application structure, input form, and core calculation module.`
    },
    {
      id: `${pCode}-prompt-2`,
      title: `Prompt 2 — Fix & Debug Code / Math`,
      category: `Debugging`,
      promptText: `I have implemented the core logic for "${pTitle}".

Mathematical concept:
${pMath}

Problem statement context:
"${pProblem}"

Here is my current code:
[paste your code here]

Here is the error or incorrect output:
[paste error or wrong numerical result]

Find the actual bug in my code or mathematical implementation.
Do not rewrite the entire project unnecessarily.
Explain what is wrong and provide the smallest reliable fix.
Verify that the ${pMath} calculations remain mathematically accurate after the fix.`
    },
    {
      id: `${pCode}-prompt-3`,
      title: `Prompt 3 — Customise & Polish UI`,
      category: `UI & Visualization`,
      promptText: `The MVP for "${pTitle}" is now working. Now help me customise and polish it.

Domain application:
${pRealWorld}

Current features:
- Parameters input form
- Math calculation engine (${pMath})
- Basic results output

I want to improve:
1. Domain-authentic labels and units based on ${pRealWorld}.
2. Step-by-step mathematical breakdown showing intermediate matrix/formula operations.
3. Interactive visual chart using ${project.recommendedTechStack.charts}.

Keep the mathematical calculation unchanged unless there is a verified error. Make the result easy for evaluators to understand.`
    },
    {
      id: `${pCode}-prompt-4`,
      title: `Prompt 4 — Mathematical Verification`,
      category: `Mathematics`,
      promptText: `Act as a mathematical reviewer for my mini-project "${pTitle}".

Mathematical Model:
Using ${pMath} to solve: "${pProblem}".

Here is my mathematical implementation:
[paste your calculation function or matrix code here]

Verify:
1. Variable definitions & constraints
2. Equations and formula mapping
3. Matrix / vector construction
4. Algorithm implementation (${pMath})
5. Calculated outputs against benchmark values
6. Edge cases (zeros, boundary conditions, singular inputs)

Do not assume my implementation is correct. Point out every mathematical mistake or precision oversight you find.`
    },
    {
      id: `${pCode}-prompt-5`,
      title: `Prompt 5 — Generate Documentation`,
      category: `Documentation`,
      promptText: `I need to document my project "${pTitle}".

Based ONLY on my actual implementation below:
[paste code or describe working features]

Help me write:
1. Title & Abstract (150 words)
2. Problem Statement & Real-World Context (${pRealWorld})
3. Mathematical Foundation (${pMath})
4. Algorithm Pseudocode
5. System Architecture
6. Test Cases & Verification Results
7. Limitations & Future Scope

Do not invent features or results that are not present in my actual project.`
    },
    {
      id: `${pCode}-prompt-6`,
      title: `Prompt 6 — Demo Scenario & Viva Preparation`,
      category: `Viva`,
      promptText: `I am presenting my mini-project "${pTitle}" to evaluators.

Project Details:
- Problem: "${pProblem}"
- Math: ${pMath}
- Real-World: ${pRealWorld}

Based on my project:
1. Provide a 3-5 minute live demonstration script (step-by-step).
2. The exact mathematical explanation I should give while presenting.
3. 10 likely viva questions evaluators will ask regarding ${pMath} and my implementation.
4. Concise, accurate answers for each viva question.

Keep answers realistic and grounded in my actual project.`
    }
  ];

  // 1. DAY 1 — SETUP
  const day1: DayGuide = {
    day: 1,
    title: 'SETUP',
    goal: `Understand ${pTitle}, set up development environment, and formulate mathematical model.`,
    objective: `Deconstruct the problem statement, define mathematical variables, and establish the local codebase.`,
    prompts: [projectPrompts[0]],
    tasks: [
      {
        id: `${pCode}-d1-t1`,
        title: `Analyze Problem Statement & Define Scope`,
        description: `Read and decompose the problem statement: "${pProblem}".`,
        why: `You cannot code or build a mathematical model without knowing exact inputs, constraints, and target outputs.`,
        how: `List all given values, unknown variables, unit measurements, and constraints on paper or markdown.`,
        expectedOutput: `Written problem analysis document detailing inputs, unknown variables, and target outputs.`,
        commonMistakes: `Skipping variable definitions and jumping straight into writing random code.`,
        screenshotSuggestion: `Capture your written problem decomposition or initial notes.`
      },
      {
        id: `${pCode}-d1-t2`,
        title: `Define Mathematical Model & Equations`,
        description: `Formulate equations and matrices using ${pMath}.`,
        why: `The real-world problem needs to be converted into mathematical structures before coding algorithm logic.`,
        how: `Map physical quantities to algebraic variables (e.g. x1, x2) and express constraints as matrix AX = B or equations.`,
        expectedOutput: `Formulated mathematical equations and matrix structure (AX = B) verified on paper.`,
        commonMistakes: `Mismatched dimensions or misassigning coefficients in matrix formulation.`,
        screenshotSuggestion: `Capture the mathematical model derivation on paper or notebook.`
      },
      {
        id: `${pCode}-d1-t3`,
        title: `Initialize Development Workspace`,
        description: `Create project repository and install required mathematical libraries (${pTechMath}).`,
        why: `Setting up a clean folder structure early avoids import and build errors during development.`,
        how: `Create project root, set up ${pTechFrontend} template, and verify library installation.`,
        expectedOutput: `Working local development environment loading without console errors.`,
        commonMistakes: `Installing mismatched library versions or missing configuration files.`,
        screenshotSuggestion: `Capture terminal output showing successful workspace setup.`
      },
      {
        id: `${pCode}-d1-t4`,
        title: `Prepare Sample Benchmark Test Datasets`,
        description: `Create 3 distinct sample datasets (small, realistic, boundary case) based on ${pRealWorld}.`,
        why: `Benchmark datasets are necessary to test if your math calculations produce accurate results.`,
        how: `Construct JSON/JS objects representing sample input parameters and calculate expected outputs manually.`,
        expectedOutput: `3 Verified benchmark test datasets with known manual results.`,
        commonMistakes: `Using arbitrary numbers that produce unsolvable or negative real-world values.`,
        screenshotSuggestion: `Capture your benchmark dataset files or data table.`
      }
    ],
    expectedOutput: [
      `Deconstructed mathematical model for ${pTitle}`,
      `Configured local workspace with ${pTechMath}`,
      `3 Verified benchmark test datasets`
    ]
  };

  // 2. DAY 2 — AI VIBE CODE
  const day2: DayGuide = {
    day: 2,
    title: 'AI VIBE CODE',
    goal: `Generate a functional MVP using project-specific AI prompts.`,
    objective: `Use structured AI coding prompts to build the core mathematical calculation engine and user interface.`,
    prompts: [projectPrompts[0], projectPrompts[1]],
    tasks: [
      {
        id: `${pCode}-d2-t1`,
        title: `Generate Initial MVP Codebase (Prompt 1)`,
        description: `Use Prompt 1 with your AI assistant to generate application skeleton and input UI.`,
        why: `AI vibe coding accelerates initial boilerplate setup so you can focus on auditing logic.`,
        how: `Copy Prompt 1 into AI tool (Claude/Gemini/ChatGPT), save generated HTML/JS files, and test locally.`,
        expectedOutput: `Functional application shell with input fields and run calculation button.`,
        commonMistakes: `Accepting AI code without testing whether it actually runs in your browser.`,
        screenshotSuggestion: `Capture the initial running web interface generated by AI.`
      },
      {
        id: `${pCode}-d2-t2`,
        title: `Implement Core Math Calculation Engine (Prompt 1 & 2)`,
        description: `Build and wire the core algorithm module implementing ${pMath}.`,
        why: `The mathematical algorithm is the heart of your mini-project.`,
        how: `Write or integrate the solver function, passing user inputs and returning numerical results.`,
        expectedOutput: `Calculation module returning outputs for test inputs.`,
        commonMistakes: `Hardcoding result values instead of computing them dynamically from inputs.`,
        screenshotSuggestion: `Capture browser console or UI showing calculated output.`
      },
      {
        id: `${pCode}-d2-t3`,
        title: `Connect User Input Form to Math Engine`,
        description: `Bind UI input fields to the mathematical calculation engine.`,
        why: `Users must be able to change input parameters and see updated results.`,
        how: `Attach event listeners to form submit/click buttons to pass inputs to solver and update DOM.`,
        expectedOutput: `Interactive UI accepting custom inputs and rendering computed output cards.`,
        commonMistakes: `Passing string inputs instead of parsing numbers (e.g. "5" + "10" = "510").`,
        screenshotSuggestion: `Capture the UI after submitting custom inputs.`
      },
      {
        id: `${pCode}-d2-t4`,
        title: `Debug Runtime Errors & Calculations (Prompt 2)`,
        description: `Use Prompt 2 to resolve any execution errors or incorrect numerical outputs.`,
        why: `AI-generated code often has subtle calculation or syntax bugs.`,
        how: `Feed console error stack traces or wrong outputs to AI with Prompt 2 to get targeted fixes.`,
        expectedOutput: `Stable MVP running cleanly without console errors.`,
        commonMistakes: `Blindly re-prompts AI to rewrite the entire project, introducing new bugs.`,
        screenshotSuggestion: `Capture clean browser developer console showing 0 errors.`
      }
    ],
    expectedOutput: [
      `Working MVP application for ${pTitle}`,
      `Functional ${pMath} computation module`,
      `Interactive input form and result display`
    ]
  };

  // 3. DAY 3 — CUSTOMISE
  const day3: DayGuide = {
    day: 3,
    title: 'CUSTOMISE',
    goal: `Manually audit mathematics, refine UI for domain specificity, and add step-by-step visual views.`,
    objective: `CRITICAL STEP: Manually audit AI calculations, replace dummy labels with ${pRealWorld} domain terminology, and add charts.`,
    prompts: [projectPrompts[2], projectPrompts[3]],
    tasks: [
      {
        id: `${pCode}-d3-t1`,
        title: `MANUAL MATH AUDIT & VERIFICATION (Prompt 4)`,
        description: `Calculate ${pMath} manually on paper for a benchmark test case and compare with app output.`,
        why: `Evaluators will check your math during viva. AI code frequently makes subtle mathematical errors.`,
        how: `Solve one sample case step-by-step on paper, run same input in app, and ensure 100% numerical match.`,
        expectedOutput: `100% verified numerical matching between paper calculation and app output.`,
        commonMistakes: `Assuming the AI code is correct without performing manual paper verification.`,
        screenshotSuggestion: `Capture paper calculation side-by-side with app output.`
      },
      {
        id: `${pCode}-d3-t2`,
        title: `Refine UI with Real-World Domain Terms (Prompt 3)`,
        description: `Replace generic labels with domain-specific terms from ${pRealWorld}.`,
        why: `Evaluators want to see domain relevance, not generic "x1, x2, x3" labels everywhere.`,
        how: `Update input headers, tooltips, and result summary cards to reflect real-world quantities.`,
        expectedOutput: `Domain-authentic UI tailored for ${pRealWorld}.`,
        commonMistakes: `Leaving placeholder text like "Enter value 1" or "Test Data".`,
        screenshotSuggestion: `Capture the customized domain-authentic interface.`
      },
      {
        id: `${pCode}-d3-t3`,
        title: `Add Step-by-Step Mathematical Breakdown View`,
        description: `Render intermediate calculation steps (e.g. intermediate matrices, row operations, or formula steps).`,
        why: `Showing step-by-step math proves your app executes the true algorithm rather than a black box.`,
        how: `Store intermediate state during calculation and render a step-by-step breakdown table/card.`,
        expectedOutput: `Step-by-step mathematical breakdown panel in UI.`,
        commonMistakes: `Hiding all intermediate steps, making the project look like a simple black-box calculator.`,
        screenshotSuggestion: `Capture the step-by-step mathematical breakdown section.`
      },
      {
        id: `${pCode}-d3-t4`,
        title: `Implement Interactive Charts & Visualizations`,
        description: `Add dynamic visual charts using ${project.recommendedTechStack.charts} to graph results.`,
        why: `Visual charts make results immediately understandable for presentation evaluators.`,
        how: `Pass computed result arrays to chart components and render trend or comparison graphs.`,
        expectedOutput: `Interactive chart visualizing key ${pTitle} outcomes.`,
        commonMistakes: `Using static un-updated chart images instead of live reactive data graphs.`,
        screenshotSuggestion: `Capture the interactive chart component in your application.`
      }
    ],
    expectedOutput: [
      `Manually verified calculation engine (zero math errors)`,
      `Custom domain UI tailored for ${pRealWorld}`,
      `Step-by-step mathematical breakdown panel`,
      `Interactive data visualization chart`
    ]
  };

  // 4. DAY 4 — DOCUMENT
  const day4: DayGuide = {
    day: 4,
    title: 'DOCUMENT',
    goal: `Complete project report, documentation checklist, and proof screenshots.`,
    objective: `Write comprehensive 17-section mini-project report with explicit mathematical modeling.`,
    prompts: [projectPrompts[4]],
    tasks: [
      {
        id: `${pCode}-d4-t1`,
        title: `Draft Introduction & Mathematical Theory (Prompt 5)`,
        description: `Write Sections 1–5 of the project report covering abstract, problem statement, and ${pMath} theory.`,
        why: `Academic reports require clear theoretical foundation before presenting software results.`,
        how: `Use Prompt 5 to outline sections based on your actual problem statement and mathematical model.`,
        expectedOutput: `Sections 1–5 of report complete with mathematical formulas.`,
        commonMistakes: `Copy-pasting generic internet theory that does not match your specific project code.`,
        screenshotSuggestion: `Capture your report draft document showing mathematical theory.`
      },
      {
        id: `${pCode}-d4-t2`,
        title: `Document System Architecture & Algorithm Pseudocode`,
        description: `Detail technology stack, system block diagram, and algorithmic pseudocode.`,
        why: `Evaluators check pseudocode to verify algorithm clarity and execution flow.`,
        how: `Write clear pseudocode for your ${pMath} implementation and describe frontend/backend architecture.`,
        expectedOutput: `Sections 6–9 of report complete with pseudocode and architecture diagrams.`,
        commonMistakes: `Writing vague pseudocode that omits key mathematical operations.`,
        screenshotSuggestion: `Capture pseudocode section in report.`
      },
      {
        id: `${pCode}-d4-t3`,
        title: `Capture & Attach 5 Proof Screenshots`,
        description: `Take proof screenshots for Days 1–5 and upload them to your project workspace.`,
        why: `Screenshots provide proof of step-by-step project progression.`,
        how: `Use the Screenshot Upload tool in My Project to attach proof images with captions for each day.`,
        expectedOutput: `5 Proof screenshots attached to workspace and report.`,
        commonMistakes: `Uploading low-resolution or unreadable blurry images containing unreadable code text.`,
        screenshotSuggestion: `Capture workspace screenshot gallery.`
      },
      {
        id: `${pCode}-d4-t4`,
        title: `Compile Test Cases, Results & References`,
        description: `Complete Sections 10–17 covering test case tables, real-world impact, limitations, and 3+ references.`,
        why: `A complete report demonstrates thorough academic rigor.`,
        how: `Insert your 3 benchmark test cases into a verification table and list academic reference citations.`,
        expectedOutput: `Complete 17-section PDF/Word project report.`,
        commonMistakes: `Missing reference citations or leaving placeholder test case values.`,
        screenshotSuggestion: `Capture completed report title page and table of contents.`
      }
    ],
    expectedOutput: [
      `Complete 17-section academic project report`,
      `Detailed mathematical model documentation`,
      `Proof screenshots for Days 1–5 uploaded`
    ]
  };

  // 5. DAY 5 — DEMO
  const day5: DayGuide = {
    day: 5,
    title: 'DEMO',
    goal: `Final polish, presentation slides, viva Q&A review, and project demonstration.`,
    objective: `Prepare slides, rehearse demo scenario, master 10 viva questions, and execute final presentation.`,
    prompts: [projectPrompts[5]],
    tasks: [
      {
        id: `${pCode}-d5-t1`,
        title: `Final App Polish & Demo Data Check`,
        description: `Clean UI, verify mobile responsiveness, and prepare sample input values for presentation.`,
        why: `Unexpected bugs during live demo create a poor impression.`,
        how: `Run through your application from start to finish on sample inputs to confirm zero errors.`,
        expectedOutput: `Production-ready application running smoothly.`,
        commonMistakes: `Testing on random untested inputs during live evaluator presentation.`,
        screenshotSuggestion: `Capture final polished application dashboard.`
      },
      {
        id: `${pCode}-d5-t2`,
        title: `Prepare 10-Slide Presentation (PPT)`,
        description: `Create presentation deck covering Problem, Math Model, Architecture, Live Demo, and Results.`,
        why: `Slides structure your presentation and keep your team on track during defense.`,
        how: `Create slides: Title -> Problem -> Math Model -> Tech Stack -> Architecture -> App Screenshots -> Results -> Conclusion.`,
        expectedOutput: `10-Slide presentation deck.`,
        commonMistakes: `Overcrowding slides with dense text instead of clear bullet points and math formulas.`,
        screenshotSuggestion: `Capture presentation slides overview.`
      },
      {
        id: `${pCode}-d5-t3`,
        title: `Review 10 Project-Specific Viva Questions (Prompt 6)`,
        description: `Rehearse answers for 10 project viva questions covering ${pMath} and implementation.`,
        why: `Viva questions determine a major portion of your project grade.`,
        how: `Practice answering each question out loud with your team using Prompt 6 master Q&A.`,
        expectedOutput: `Confident mastery over viva questions.`,
        commonMistakes: `Unable to explain how your code actually executes the underlying math formulas.`,
        screenshotSuggestion: `Capture viva Q&A review notes.`
      },
      {
        id: `${pCode}-d5-t4`,
        title: `Rehearse Live Presentation Scenario`,
        description: `Execute 3-5 minute live demonstration flow with all team members.`,
        why: `Rehearsing ensures smooth handoffs between team members during evaluation.`,
        how: `Assign roles (Leader: Intro & Problem, Member 1: Math & Code, Member 2: Live Demo & Q&A) and practice.`,
        expectedOutput: `Rehearsed presentation flow completed in under 5 minutes.`,
        commonMistakes: `Exceeding allocated presentation time or team members talking over each other.`,
        screenshotSuggestion: `Capture team rehearsal photo or final project presentation slide.`
      }
    ],
    expectedOutput: [
      `10-Slide presentation deck`,
      `Rehearsed 5-step demo flow`,
      `10 Project-specific viva Q&A master list`,
      `Completed final project demonstration`
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
      answer: `The project addresses: "${pProblem}". It solves this problem by translating real-world constraints into mathematical structures and computing optimal solutions.`
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
