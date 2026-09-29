import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRICING_TIERS } from '../data/pricing';
import { PRODUCT_CAPABILITIES } from '../data/features';
import { FAQS } from '../data/faqs';
import WorkflowPipeline from '../components/WorkflowPipeline';
import {
  ArrowRight,
  Terminal,
  Shield,
  Zap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  Search,
  Palette,
  FileCode2,
  Wrench,
  Monitor,
  Database,
  Sliders,
  Activity,
  Lock,
  Globe
} from 'lucide-react';

const CAPABILITY_ICON_MAP = {
  Cpu,
  Search,
  Palette,
  FileCode2,
  Terminal,
  Wrench,
  Monitor,
  Database,
  Sliders,
  Activity
};

export default function HomePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 pb-20 font-mono">
      <section className="relative overflow-hidden pt-12 pb-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-wider mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>AGENTS & WORKFLOW AUTOMATION V2.4 RELEASED</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Agentic Engine</span> for Complex Workflows
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Design, orchestrate, and execute multi-modal AI pipelines with real-time memory contexts, secure sandboxes, and automated error mitigation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Build Agent Pipeline</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium transition-colors"
            >
              <Terminal className="w-4 h-4 text-slate-400" />
              <span>Explore Docs</span>
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500 border-t border-slate-800/60 pt-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Sandboxed Execution Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>End-to-End Encrypted State</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Multi-Cloud Edge Deployment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Visual Pipeline Architecture
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Inspect real-time execution graphs, node states, and payload transforms.
          </p>
        </div>
        <div className="p-1 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 border border-slate-800 shadow-2xl">
          <WorkflowPipeline />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Features & Tools</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Engineered for High-Scale Agentic Work
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl mx-auto">
            Everything you need to orchestrate LLM agents, custom toolkits, and autonomous decision trees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CAPABILITIES.map((cap, idx) => {
            const IconComponent = CAPABILITY_ICON_MAP[cap.icon] || Cpu;
            return (
              <div
                key={cap.id || idx}
                className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/5 group"
              >
                <div className="w-10 h-10 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 transition-colors mb-4">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{cap.whatItDoes}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 pt-16">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">Flexible Scale</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Transparent Tiering
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Start small with developer sandbox, scale to enterprise multi-tenant deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_TIERS.slice(0, 3).map((tier, idx) => (
            <div
              key={tier.id || idx}
              className={`rounded-xl p-6 flex flex-col justify-between transition-all ${
                tier.popular
                  ? 'bg-slate-900 border-2 border-cyan-500 shadow-xl shadow-cyan-500/10 relative'
                  : 'bg-slate-900/40 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{tier.tagline}</p>
                
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-extrabold text-white">{tier.price}</span>
                  {tier.period && <span className="text-xs text-slate-400 ml-1">{tier.period}</span>}
                </div>

                <ul className="space-y-2.5 border-t border-slate-800 pt-6 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className={`w-full text-center py-2.5 px-4 rounded-md font-bold text-xs transition-colors ${
                  tier.popular
                    ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Got questions about setup, security, or custom deployments?
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-800/50"
                >
                  <span className="font-semibold text-sm text-slate-200">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-900/40 via-slate-900 to-purple-900/40 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Orchestrate Autonomous Agents?
            </h2>
            <p className="text-sm text-slate-300">
              Launch your workspace in seconds or explore our sandbox templates today.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 rounded-md bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
