import React, { useState } from 'react';
import { WORKFLOW_STAGES } from '../data/workflow';
import {
  Target, MapPin, Search, Layout, Code2, Box, CheckSquare, Wrench, ShieldCheck, CheckCircle2, ChevronRight
} from 'lucide-react';

const ICON_MAP = {
  Target, MapPin, Search, Layout, Code2, Box, CheckSquare, Wrench, ShieldCheck, CheckCircle2
};

export default function WorkflowPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = WORKFLOW_STAGES[activeStep];

  return (
    <div className="space-y-6">
      {/* Step selector pills / horizontal pipeline */}
      <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
        {WORKFLOW_STAGES.map((stage, idx) => {
          const IconComponent = ICON_MAP[stage.visualIcon] || Target;
          const isActive = activeStep === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 flex flex-col items-center text-center transition-all border-2 ${' '}
                ${isActive
                  ? 'bg-[#0EA5E9] text-black border-white shadow-[3px_3px_0px_0px_#FFFFFF] font-bold'
                  : 'bg-[#111827] text-[#9CA3AF] border-[#1F2937] hover:border-[#374151] hover:text-white'
                }`}
            >
              <span className="text-[10px] font-mono tracking-widest opacity-80">STEP {stage.step}</span>
              <IconComponent className="w-4 h-4 my-1.5 shrink-0" />
              <span className="text-[11px] font-mono uppercase tracking-wider truncate w-full">{stage.name}</span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Details Card */}
      <div className="bg-[#111827] border-2 border-[#0EA5E9] p-6 shadow-[5px_5px_0px_0px_#0EA5E9] relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-4 border-b-2 border-[#1F2937]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0EA5E9] text-black font-mono font-black text-xl flex items-center justify-center border-2 border-white shadow-[2px_2px_0px_0px_#FFFFFF]">
              {currentStage.step}
            </div>
            <div>
              <div className="text-xs font-mono text-[#0EA5E9] tracking-widest uppercase">PIPELINE STAGE {currentStage.step} OF 10</div>
              <h3 className="text-xl font-mono font-extrabold text-white uppercase">{currentStage.name}</h3>
            </div>
          </div>
          <div className="px-3 py-1 bg-[#0B0F17] border border-[#374151] text-xs font-mono text-[#9CA3AF] self-start md:self-auto">
            {currentStage.shortDesc}
          </div>
        </div>

        <p className="text-sm text-[#F9FAFB] leading-relaxed mb-6 font-mono">
          {currentStage.description}
        </p>

        {/* Navigation controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            className="px-4 py-2 bg-[#0B0F17] text-xs font-mono border-2 border-[#1F2937] text-white disabled:opacity-40 hover:border-[#374151]"
          >
            ← PREVIOUS STAGE
          </button>
          <div className="text-xs font-mono text-[#9CA3AF]">
            {activeStep + 1} / {WORKFLOW_STAGES.length}
          </div>
          <button
            disabled={activeStep === WORKFLOW_STAGES.length - 1}
            onClick={() => setActiveStep(prev => Math.min(WORKFLOW_STAGES.length - 1, prev + 1))}
            className="neu-button bg-[#0EA5E9] text-black px-4 py-2 text-xs font-mono font-bold flex items-center gap-1.5 disabled:opacity-40"
          >
            <span>NEXT STAGE</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}