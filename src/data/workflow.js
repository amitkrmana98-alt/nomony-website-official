export const WORKFLOW_STAGES = [
  {
    step: 1,
    id: 'objective',
    name: 'OBJECTIVE',
    shortDesc: 'Understand prompt & requirements',
    description: 'You describe the feature, site, or app. Nomony parses the core requirements, constraints, and scope without guessing missing details.',
    visualIcon: 'Target'
  },
  {
    step: 2,
    id: 'plan',
    name: 'PLAN',
    shortDesc: 'Construct file structure & roadmap',
    description: 'Nomony forms a structured architectural plan, deciding which components, routes, data structures, and state logic to construct.',
    visualIcon: 'MapPin'
  },
  {
    step: 3,
    id: 'research',
    name: 'RESEARCH',
    shortDesc: 'Check package APIs & parameters',
    description: 'Nomony verifies exact function signatures, library specs, and API contracts required for implementation.',
    visualIcon: 'Search'
  },
  {
    step: 4,
    id: 'design',
    name: 'DESIGN',
    shortDesc: 'Format dark neubrutalist UI/UX',
    description: 'Layout wireframing, color palette mapping, contrast checks, and responsive component structure design.',
    visualIcon: 'Layout'
  },
  {
    step: 5,
    id: 'code',
    name: 'CODE',
    shortDesc: 'Synthesize clean modular JSX/JS',
    description: 'Generates clean, maintainable modular source code across all project files with zero hardcoded syntax errors.',
    visualIcon: 'Code2'
  },
  {
    step: 6,
    id: 'build',
    name: 'BUILD',
    shortDesc: 'Wire modules & compile bundle',
    description: 'Executes module linking, import resolution, and build compilation to confirm no syntax or resolution failures exist.',
    visualIcon: 'Box'
  },
  {
    step: 7,
    id: 'test',
    name: 'TEST',
    shortDesc: 'Execute unit & interactive checks',
    description: 'Runs component-level validation, link checks, state flow tests, and edge case scenario tests.',
    visualIcon: 'CheckSquare'
  },
  {
    step: 8,
    id: 'repair',
    name: 'REPAIR',
    shortDesc: 'Diagnose failures & self-heal',
    description: 'If tests or builds fail, Nomony captures precise diagnostic errors, isolates the offending code, and applies targeted patches.',
    visualIcon: 'Wrench'
  },
  {
    step: 9,
    id: 'validate',
    name: 'VALIDATE',
    shortDesc: 'Responsive & data honesty audit',
    description: 'Inspects DOM structure, responsive breakpoints (320px to 1440px), and ensures zero placeholder data violations exist.',
    visualIcon: 'ShieldCheck'
  },
  {
    step: 10,
    id: 'deliver',
    name: 'DELIVER',
    shortDesc: 'Provide fully functional output',
    description: 'Delivers the complete workspace with runnable code, project files, and activity history ready for deployment.',
    visualIcon: 'CheckCircle2'
  }
];