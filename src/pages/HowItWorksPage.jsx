import React from 'react';
import { WORKFLOW_STAGES } from '../data/workflow';
import WorkflowPipeline from '../components/WorkflowPipeline';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal } from 'lucide-react';

export default function HowItWorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="border-b-2 border-[#1F2937] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] border border-[#0EA5E9] text-xs font-mono text-[#0EA5E9] font-bold uppercase mb-4">
          <Terminal className="w-4 h-4" />
          <span>EXECUTION WORKFLOW</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-mono font-black text-white uppercase tracking-tight mb-4">
          How Nomony AI Works
        </h1>
        <p className="text-sm sm:text-base font-mono text-[#9CA3AF] max-w-3xl leading-relaxed">
          Nomony uses an explicit 10-stage pipeline to transform high-level objective prompts into tested, validated source code.
        </p>
      </div>

      {/* Interactive Pipeline Widget */}
      <div className="space-y-4">
        <h2 className="text-xl font-mono font-bold text-white uppercase">
          Interactive 10-Stage Pipeline Breakdown
        </h2>
        <WorkflowPipeline />
      </div>

      {/* Sequential List View */}
      <div className="space-y-6 pt-6 border-t-2 border-[#1F2937]">
        <h2 className="text-2xl font-mono font-black text-white uppercase mb-6">
          Step-by-Step Stage Guide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKFLOW_STAGES.map((stage) => (
            <div key={stage.id} className="bg-[#111827] border-2 border-[#1F2937] p-6 relative shadow-[4px_4px_0px_0px_#1F2937]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono font-bold text-xs text-[#0EA5E9] bg-[#0B0F17] px-2 py-1 border border-[#1F2937]">
                  STEP 0{stage.step}
                </span>
                <span className="font-mono text-[11px] text-[#9CA3AF]">{stage.shortDesc}</span>
              </div>
              <h3 className="text-lg font-mono font-black text-white uppercase mb-2">
                {stage.name}
              </h3>
              <p className="font-mono text-xs text-[#9CA3AF] leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#111827] border-2 border-[#0EA5E9] p-8 shadow-[6px_6px_0px_0px_#0EA5E9] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-mono font-black text-white uppercase">
            Ready to see Nomony run your objective?
          </h3>
          <p className="font-mono text-xs text-[#9CA3AF] mt-1">
            Create a project workspace and launch your first autonomous build execution.
          </p>
        </div>
        <Link
          to="/signup"
          className="neu-button bg-[#0EA5E9] text-black px-6 py-3 text-xs font-mono font-extrabold uppercase shrink-0 flex items-center gap-2"
        >
          <span>Start Your First Build</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}