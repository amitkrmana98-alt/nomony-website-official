import React from 'react';
import { PRODUCT_CAPABILITIES } from '../data/features';
import NeubrutalistCard from '../components/NeubrutalistCard';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="border-b-2 border-[#1F2937] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] border border-[#0EA5E9] text-xs font-mono text-[#0EA5E9] font-bold uppercase mb-4">
          <Cpu className="w-4 h-4" />
          <span>PRODUCT CAPABILITIES</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-mono font-black text-white uppercase tracking-tight mb-4">
          Nomony Platform Overview
        </h1>
        <p className="text-sm sm:text-base font-mono text-[#9CA3AF] max-w-3xl leading-relaxed">
          Nomony AI provides an end-to-end autonomous workspace environment designed to handle software engineering tasks through transparent pipeline execution.
        </p>
      </div>

      {/* Capabilities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCT_CAPABILITIES.map((cap, idx) => (
          <NeubrutalistCard key={idx}>
            <div className="flex items-center justify-between mb-3 border-b border-[#1F2937] pb-2">
              <span className="text-xs font-mono text-[#0EA5E9] font-bold">CAPABILITY 0{idx + 1}</span>
              <span className="text-[10px] font-mono text-[#9CA3AF] uppercase bg-[#0B0F17] px-2 py-0.5 border border-[#1F2937]">
                {cap.subtitle}
              </span>
            </div>

            <h2 className="text-lg font-mono font-extrabold text-white uppercase mb-3">
              {cap.title}
            </h2>

            <div className="space-y-3 font-mono text-xs text-[#9CA3AF] mb-4">
              <div>
                <span className="text-white font-bold block mb-0.5">WHAT IT DOES:</span>
                <p className="leading-relaxed">{cap.whatItDoes}</p>
              </div>
              <div>
                <span className="text-white font-bold block mb-0.5">WHY IT MATTERS:</span>
                <p className="leading-relaxed">{cap.whyItMatters}</p>
              </div>
            </div>

            <div className="p-3 bg-[#0B0F17] border border-[#1F2937] text-[11px] font-mono">
              <span className="text-[#0EA5E9] font-bold block mb-0.5">WHAT YOU SEE IN APP:</span>
              <span className="text-white">{cap.whatYouSee}</span>
            </div>
          </NeubrutalistCard>
        ))}
      </div>

      {/* Security & Limitations Honesty Statement */}
      <div className="bg-[#111827] border-2 border-[#1F2937] p-8 shadow-[6px_6px_0px_0px_#1F2937]">
        <h3 className="text-lg font-mono font-bold text-white uppercase mb-3 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />
          <span>Platform Scope & Native Mobile Apps Note</span>
        </h3>
        <p className="text-xs font-mono text-[#9CA3AF] leading-relaxed mb-4">
          Nomony AI builds high-performance responsive web applications using modern web technologies (React, JavaScript, CSS). Native iOS/Android mobile builds (React Native binaries, Swift, Kotlin) are currently unavailable and not marketed as available.
        </p>
        <Link to="/how-it-works" className="neu-button bg-[#0EA5E9] text-black px-4 py-2 text-xs font-mono font-extrabold uppercase inline-flex items-center gap-2">
          <span>Explore How It Works</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}