import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../data/navigation';
import { Shield, CheckCircle2, Terminal } from 'lucide-react';

export default function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}uploads/screen.png`;

  return (
    <footer className="bg-[#0B0F17] border-t-2 border-[#1F2937] text-[#9CA3AF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b-2 border-[#1F2937]">
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logoSrc}
                alt="Nomony AI Logo"
                className="w-8 h-8 rounded object-cover border border-white shadow-[2px_2px_0px_0px_#FFFFFF]"
              />
              <span className="font-mono text-lg font-extrabold text-white tracking-wider">
                NOMONY<span className="text-[#0EA5E9]">AI</span>
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-[#9CA3AF]">
              Your Autonomous Digital Worker. Describe what you want to build; Nomony autonomously plans, researches, codes, tests, repairs, and delivers working software.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111827] border border-[#1F2937] text-[11px] font-mono text-[#0EA5E9]">
              <Terminal className="w-3.5 h-3.5" />
              <span>Platform Status: Operational</span>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-[#1F2937] pb-1 inline-block">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-[#0EA5E9] transition-colors flex items-center gap-1">
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-[#1F2937] pb-1 inline-block">
              PIPELINE STAGES
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-[#9CA3AF]">
              <li>1. Objective Analysis</li>
              <li>2. System Planning</li>
              <li>3. API Research</li>
              <li>4. UI Design Engine</li>
              <li>5. Code Generation</li>
              <li>6. Build & Compilation</li>
              <li>7. Component Testing</li>
              <li>8. Iterative Self-Repair</li>
              <li>9. Responsive Audit</li>
              <li>10. Project Delivery</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4 border-b border-[#1F2937] pb-1 inline-block">
              DATA HONESTY & TRUST
            </h4>
            <p className="text-xs leading-relaxed mb-3">
              Nomony AI reports actual system capabilities without exaggerated claims or unverified outcomes.
            </p>
            <div className="space-y-2 text-[11px] font-mono text-[#9CA3AF]">
              <div className="flex items-start gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>Isolated workspace sandboxing</span>
              </div>
              <div className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0 mt-0.5" />
                <span>Clear outcome-based INR allowances</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#9CA3AF] gap-4">
          <div>
            © {new Date().getFullYear()} Nomony AI. All rights reserved. Official Public Website & Customer Portal.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/docs" className="hover:text-white transition-colors">Documentation</Link>
            <Link to="/support" className="hover:text-white transition-colors">Support Portal</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
