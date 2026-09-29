export const DOCS_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'GETTING STARTED',
    articles: [
      {
        slug: 'what-is-nomony',
        title: 'What is Nomony?',
        summary: 'Overview of Nomony as an autonomous software engineering platform.',
        content: `Nomony AI is an autonomous software engineering platform. Rather than acting as a standard chat box that outputs isolated code snippets, Nomony receives high-level objectives and autonomously coordinates the planning, design, coding, building, testing, self-repair, and delivery of functional web applications.\n\nCore Philosophy: Your Autonomous Digital Worker\n\nUnlike basic code completions, Nomony operates iteratively across a full 10-stage pipeline to turn ideas into tested, runnable web applications without requiring constant step-by-step handholding.`
      },
      {
        slug: 'creating-an-account',
        title: 'Creating an Account',
        summary: 'How to sign up and configure your workspace.',
        content: `To begin using Nomony AI, create an account through the official portal using a supported authentication method:\n\n1. Google OAuth Authentication\n2. Email Code (OTP)\n\nNote: Phone number authentication is currently unavailable and remains disabled until backend server configurations are finalized.`
      },
      {
        slug: 'creating-your-first-project',
        title: 'Creating Your First Project',
        summary: 'Step-by-step guide to initializing a workspace.',
        content: `1. Log in and navigate to your Account Workspace or click "OPEN NOMONY".\n2. Click "New Project Workspace".\n3. Provide a clear workspace title.\n4. Write a detailed initial prompt specifying functional requirements and visual style.\n5. Launch the autonomous worker pipeline.`
      },
      {
        slug: 'starting-your-first-build',
        title: 'Starting Your First Build',
        summary: 'Initiating and supervising your initial build run.',
        content: `When you submit an objective prompt, Nomony generates an execution plan. Review the roadmap steps and click "Confirm & Execute". Nomony will then cycle through Research, Design, Code, Build, Test, Repair, and Validation phases.`
      },
      {
        slug: 'understanding-build-progress',
        title: 'Understanding Build Progress',
        summary: 'How to interpret real-time agent execution feeds.',
        content: `During active build execution, Nomony updates the workflow timeline live across 10 phases:\n\n• OBJECTIVE — Parsing prompt requirements\n• PLAN — Route and component architecture planning\n• RESEARCH — Package & API spec verification\n• DESIGN — Dark neubrutalist visual layout structuring\n• CODE — Writing modular React / JSX files\n• BUILD — Asset compilation & module linking\n• TEST — Unit & state verification\n• REPAIR — Self-healing diagnostic error patches\n• VALIDATE — Responsive breakpoint checks (320px–1440px)\n• DELIVER — Final runnable workspace delivery`
      }
    ]
  },
  {
    id: 'building',
    title: 'BUILDING',
    articles: [
      {
        slug: 'writing-a-good-objective',
        title: 'Writing a Good Objective',
        summary: 'Best practices for prompt requirements that yield optimal software results.',
        content: `To get the highest quality output from Nomony:\n\n• State the core functional goals clearly (e.g., "Build a multi-step pricing estimator in INR").\n• Define layout expectations (e.g., "Sticky header, mobile drawer menu, 3-column pricing grid").\n• Specify desired styling preferences (e.g., "Dark neubrutalist theme with graphite background").\n• Avoid vague descriptions like "Make a cool website".`
      },
      {
        slug: 'planning',
        title: 'Planning Stage',
        summary: 'How Nomony designs file trees and execution steps.',
        content: `During the PLAN stage, Nomony analyzes your objective and breaks it down into explicit file dependencies, routing hierarchies, state containers, and UI component specifications.`
      },
      {
        slug: 'research',
        title: 'Research Stage',
        summary: 'API verification and package dependency inspection.',
        content: `Before synthesizing code, Nomony inspects package signatures and interface contracts to ensure correct module imports and avoid hallucinated library function calls.`
      },
      {
        slug: 'design',
        title: 'Design & Aesthetics',
        summary: 'Dark neubrutalist visual framework parameters.',
        content: `Nomony applies strict neubrutalist design rules: graphite/near-black backgrounds (#0B0F17, #111827), high contrast borders (2px #1F2937), crisp unblurred offset shadows, and vibrant electric blue/cyan accents (#0EA5E9).`
      },
      {
        slug: 'code',
        title: 'Code Synthesis',
        summary: 'Generating clean, modular React and JavaScript.',
        content: `Nomony outputs standard, human-readable React components using modern JSX syntax, standard hooks, Tailwind CSS utility classes, and modular data models.`
      },
      {
        slug: 'testing',
        title: 'Automated Testing',
        summary: 'Component verification and state flow validation.',
        content: `The TEST stage executes component render checks, state updates, and route resolution checks to detect syntax or logic defects before delivery.`
      },
      {
        slug: 'self-repair',
        title: 'Self-Repair Mechanics',
        summary: 'Iterative diagnostic error recovery.',
        content: `If a syntax error or import mismatch occurs during BUILD or TEST, Nomony enters REPAIR mode:\n\n1. Captures the compiler stack trace.\n2. Isolates the offending source file.\n3. Applies a targeted patch without replacing unrelated logic.\n4. Re-compiles and re-tests the build.`
      },
      {
        slug: 'validation',
        title: 'Browser Validation',
        summary: 'Responsive screen size and DOM checks.',
        content: `Validates layout behavior across 320px, 390px, 430px, 768px, 1024px, and 1440px viewports to ensure zero horizontal scrolling overflow.`
      }
    ]
  },
  {
    id: 'projects',
    title: 'PROJECTS',
    articles: [
      {
        slug: 'projects-overview',
        title: 'Workspace & Projects',
        summary: 'Managing active project sandboxes.',
        content: `Projects represent isolated workspace containers holding source code, assets, build logs, and execution state history.`
      },
      {
        slug: 'files-and-structure',
        title: 'Project Files',
        summary: 'Exploring generated source code files.',
        content: `Inspect generated code in the file tree viewer. Files include package manifest, index.html, App component, routes, data models, and sub-components.`
      },
      {
        slug: 'activity-logs',
        title: 'Activity & Observability',
        summary: 'Reviewing real-time agent activity logs.',
        content: `Every agent action, code patch, test result, and stage transition is logged chronologically for auditability.`
      },
      {
        slug: 'build-history',
        title: 'Build History',
        summary: 'Accessing past build execution runs.',
        content: `View historical build runs, inspect code diffs between iterations, and rollback or fork past states.`
      },
      {
        slug: 'app-preview',
        title: 'Live Interactive Preview',
        summary: 'Testing generated web applications live.',
        content: `The interactive live preview allows you to test button clicks, navigation flows, and form inputs directly inside the workspace.`
      }
    ]
  },
  {
    id: 'autonomy',
    title: 'AUTONOMY',
    articles: [
      {
        slug: 'autonomous-workflows',
        title: 'How Autonomous Workflows Work',
        summary: 'Sequential agent task execution loops.',
        content: `Nomony breaks build objectives into atomic tasks and coordinates sub-agents to complete each phase systematically.`
      },
      {
        slug: 'approvals-and-gates',
        title: 'User Approvals',
        summary: 'Controlling stage transitions.',
        content: `Configure whether Nomony proceeds through pipeline stages automatically or waits for manual confirmation between major phases.`
      },
      {
        slug: 'cancellation-controls',
        title: 'Halting & Cancellation',
        summary: 'Stopping an active build execution.',
        content: `You can click "Halt Workflow" at any point during an active execution to stop processing immediately.`
      },
      {
        slug: 'execution-limits',
        title: 'Execution Timeouts & Limits',
        summary: 'Safety caps on build runtime.',
        content: `To prevent infinite loops, each build execution has a maximum timeout limit based on your subscription plan tier.`
      },
      {
        slug: 'error-handling',
        title: 'Error Handling Architecture',
        summary: 'Transparent error reporting.',
        content: `When a failure cannot be resolved after max self-repair attempts, Nomony presents an honest diagnostic log showing the exact breakdown point.`
      }
    ]
  },
  {
    id: 'account',
    title: 'ACCOUNT',
    articles: [
      {
        slug: 'user-profile',
        title: 'Profile Management',
        summary: 'Updating user credentials and preferences.',
        content: `Manage your name, primary email address, and authentication preferences in the Account section.`
      },
      {
        slug: 'workspace-isolation',
        title: 'Workspace Security',
        summary: 'Data isolation between user accounts.',
        content: `Every user account operates within an isolated workspace sandbox to protect source code and project data.`
      },
      {
        slug: 'security-practices',
        title: 'Security & Data Handling',
        summary: 'Our approach to user privacy.',
        content: `Nomony encrypts session tokens and data in transit. Code generated within your projects belongs entirely to you.`
      },
      {
        slug: 'integrations',
        title: 'Platform Integrations',
        summary: 'Connecting external deployment tools.',
        content: `Configure external deployment hooks or repository syncing from your Account Integrations settings.`
      },
      {
        slug: 'usage-allowances',
        title: 'Build Allowances & Metering',
        summary: 'Understanding monthly execution counts.',
        content: `Build allowances are measured in complete 10-stage execution runs rather than token math. Free accounts include 2 builds/mo; paid plans scale up to 300+ builds/mo.`
      },
      {
        slug: 'subscription-plans',
        title: 'Subscription & INR Billing',
        summary: 'Pricing tiers in Indian Rupees (₹).',
        content: `Plans range from Free (₹0/mo), Starter (₹499/mo), Creator (₹999/mo), Pro (₹1,999/mo), Business (₹4,999/mo), to Custom Enterprise options.`
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'TROUBLESHOOTING',
    articles: [
      {
        slug: 'build-failed',
        title: 'Build Failed or Interrupted',
        summary: 'Resolving execution stop errors.',
        content: `1. Open the Activity Log.\n2. Inspect the precise error message.\n3. Refine prompt requirements to clarify ambiguous requirements.\n4. Relaunch the build execution.`
      },
      {
        slug: 'gemini-quota',
        title: 'Gemini Quota & Rate Limits',
        summary: 'Handling rate limit responses.',
        content: `If backend API quotas are exceeded, Nomony pauses execution and displays a cooldown indicator before retrying automatically.`
      },
      {
        slug: 'preview-unavailable',
        title: 'Preview Frame Unavailable',
        summary: 'Fixing iframe rendering issues.',
        content: `If the live preview fails to render, check for missing component default exports or broken syntax in src/App.jsx.`
      },
      {
        slug: 'backend-unavailable',
        title: 'Backend API Connection Issues',
        summary: 'Diagnosing connectivity problems.',
        content: `If the server connection indicator reads Offline, verify network connectivity or check system status notifications.`
      },
      {
        slug: 'authentication-problems',
        title: 'Auth Session Errors',
        summary: 'Resolving session expiration.',
        content: `If your session expires, log out via the Account menu and log back in using Google OAuth or Email Code.`
      },
      {
        slug: 'workflow-cancelled',
        title: 'Workflow Cancelled State',
        summary: 'What happens when a run is halted.',
        content: `When a workflow is cancelled, partial code changes remain saved in the file tree, allowing manual edits or incremental retries.`
      }
    ]
  }
];