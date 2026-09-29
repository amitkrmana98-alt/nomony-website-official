import React from 'react';
import { PRICING_TIERS, USAGE_EXPLANATION } from '../data/pricing';
import NeubrutalistCard from '../components/NeubrutalistCard';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="border-b-2 border-[#1F2937] pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] border border-[#0EA5E9] text-xs font-mono text-[#0EA5E9] font-bold uppercase mb-4">
          <span>OFFICIAL PLANS & PRICING</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-mono font-black text-white uppercase tracking-tight mb-4">
          Outcome-Based Pricing Plans
        </h1>
        <p className="text-sm sm:text-base font-mono text-[#9CA3AF] max-w-3xl leading-relaxed">
          Simple, transparent pricing denominated in Indian Rupees (₹). Structure focused on completed autonomous build execution allowances.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRICING_TIERS.map(tier => (
          <NeubrutalistCard key={tier.id} highlight={tier.popular}>
            {tier.popular && (
              <div className="bg-[#0EA5E9] text-black text-[10px] font-mono font-black px-2 py-0.5 uppercase tracking-widest inline-block mb-3 border border-white">
                MOST POPULAR
              </div>
            )}
            <div className="font-mono text-xl font-extrabold text-white uppercase mb-1">{tier.name}</div>
            <div className="flex items-baseline gap-1 my-3">
              <span className="text-3xl sm:text-4xl font-mono font-black text-[#0EA5E9]">{tier.price}</span>
              <span className="text-xs font-mono text-[#9CA3AF]">{tier.period}</span>
            </div>
            <p className="text-xs font-mono text-[#9CA3AF] mb-4 min-h-[36px]">{tier.tagline}</p>
            
            <div className="p-3 bg-[#0B0F17] border border-[#1F2937] text-xs font-mono font-bold text-white mb-6">
              <span className="text-[#0EA5E9] block text-[10px] uppercase font-mono">ALLOWANCE:</span>
              {tier.allowance}
            </div>

            <ul className="space-y-2.5 mb-8 text-xs font-mono text-[#9CA3AF]">
              {tier.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              to={tier.action === 'contact' ? '/support' : '/signup'}
              className={`w-full py-3.5 text-xs font-mono font-extrabold uppercase tracking-wider block text-center border-2 ${
                tier.popular
                  ? 'bg-[#0EA5E9] text-black border-white neu-button'
                  : 'bg-[#0B0F17] text-white border-[#1F2937] hover:border-[#0EA5E9]'
              }`}
            >
              {tier.cta}
            </Link>
          </NeubrutalistCard>
        ))}
      </div>

      <div className="bg-[#111827] border-2 border-[#1F2937] p-8 shadow-[6px_6px_0px_0px_#1F2937] space-y-4">
        <h2 className="text-xl font-mono font-black text-white uppercase flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#0EA5E9]" />
          <span>{USAGE_EXPLANATION.heading}</span>
        </h2>
        <p className="text-xs sm:text-sm font-mono text-[#9CA3AF] leading-relaxed">
          {USAGE_EXPLANATION.description}
        </p>
        <ul className="space-y-2 pt-2 border-t border-[#1F2937]">
          {USAGE_EXPLANATION.points.map((pt, i) => (
            <li key={i} className="text-xs font-mono text-white flex items-start gap-2">
              <span className="text-[#0EA5E9] font-bold">•</span>
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 bg-[#0B0F17] border border-[#1F2937] text-xs font-mono text-[#9CA3AF]">
        <span className="text-[#0EA5E9] font-bold">PAYMENT NOTICE: </span>
        Subscriptions and build credits will be connected directly to your workspace account. No unverified transactions or payment gateway operations are processed on this site.
      </div>
    </div>
  );
}
