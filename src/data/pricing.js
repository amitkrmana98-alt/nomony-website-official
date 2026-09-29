export const PRICING_TIERS = [
  {
    id: 'free',
    name: 'FREE',
    price: '₹0',
    period: '/month',
    tagline: 'Get started with basic autonomous planning',
    popular: false,
    allowance: '2 autonomous build executions / month',
    features: [
      'Objective-to-Plan breakdown',
      'Standard queue execution',
      'Single project workspace',
      'Community support access',
      'Standard code inspection'
    ],
    cta: 'Get Started Free',
    action: 'signup'
  },
  {
    id: 'starter',
    name: 'STARTER',
    price: '₹499',
    period: '/month',
    tagline: 'Ideal for independent developers testing ideas',
    popular: false,
    allowance: '15 autonomous build executions / month',
    features: [
      'Full 10-stage autonomous pipeline',
      'Automatic unit test creation',
      'Single-attempt self-repair retry',
      'File tree & source exporter',
      'Standard build velocity',
      'Email customer support'
    ],
    cta: 'Start Starter Plan',
    action: 'signup'
  },
  {
    id: 'creator',
    name: 'CREATOR',
    price: '₹999',
    period: '/month',
    tagline: 'For active builders and solo founders',
    popular: true,
    allowance: '40 autonomous build executions / month',
    features: [
      'Full 10-stage autonomous pipeline',
      'Multi-pass self-repair diagnostics',
      'Live browser validation engine',
      'Persistent project memory context',
      'Priority build queue execution',
      'Standard support SLA response'
    ],
    cta: 'Start Creator Plan',
    action: 'signup'
  },
  {
    id: 'pro',
    name: 'PRO',
    price: '₹1,999',
    period: '/month',
    tagline: 'High volume building & self-repair capabilities',
    popular: false,
    allowance: '100 autonomous build executions / month',
    features: [
      'Unlimited project workspaces',
      'Extended diagnostic self-repair loops',
      'Deep browser DOM validation',
      'High priority build queue',
      'Detailed activity & observability logs',
      'Priority technical support'
    ],
    cta: 'Start Pro Plan',
    action: 'signup'
  },
  {
    id: 'business',
    name: 'BUSINESS',
    price: '₹4,999',
    period: '/month',
    tagline: 'Designed for production workflows & teams',
    popular: false,
    allowance: '300 autonomous build executions / month',
    features: [
      'Team multi-seat workspace access',
      'Maximal execution timeout thresholds',
      'Shared project memory & history',
      'Dedicated build queue allocation',
      'Dedicated support channel',
      'Invoice billing options available'
    ],
    cta: 'Start Business Plan',
    action: 'signup'
  },
  {
    id: 'enterprise',
    name: 'ENTERPRISE',
    price: 'Custom',
    period: '',
    tagline: 'Custom limits, dedicated compute & tailored support',
    popular: false,
    allowance: 'Tailored monthly execution allowance',
    features: [
      'Dedicated autonomous agent instances',
      'Custom integration configurations',
      'Custom execution timeouts',
      'Dedicated account technical engineer',
      'Custom billing & security agreements',
      '99.9% uptime SLA contract'
    ],
    cta: 'Contact Sales',
    action: 'contact'
  }
];

export const USAGE_EXPLANATION = {
  heading: 'How Nomony Usage Works',
  description: 'Nomony allocates dedicated autonomous computing resources to execute full engineering pipelines (plan, research, code, test, repair, validate). Usage is measured strictly in complete build execution allowances rather than obscure token conversions.',  points: [
    'No token accounting math: You receive clean, outcome-focused build execution allowances.',
    'Full Pipeline Coverage: Each execution covers all required steps from initial prompt to browser validation.',
    'Honest Execution Tracking: Progress is reported directly from agent workflow runs without fake metrics.'
  ]
};