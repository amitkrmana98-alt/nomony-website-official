import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlertOctagon, ArrowLeft, FileText, HelpCircle, Compass, Terminal } from 'lucide-react';
import { NAV_LINKS, NOMONY_APP_URL } from '../data/navigation';

export default function NotFoundPage() {
  const location = useLocation();
  const currentPath = location.pathname || '/';

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 font-mono space-y-8">
      {/* Header Diagnostic Card */}
      <div className="bg-[#111827] border-2 border-red-500 p-6 sm:p-8 shadow-[6px_6px_0px_0px_#EF4444]">
        <div className="flex items-center space-x-3 mb-4">
          <AlertOctagon className="w-8 h-8 text-red-500 flex-shrink-0" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              404 — Path Not Found
            </h1>
            <p className="text-xs text-[#9CA3AF] uppercase tracking-wider">
              Client-Side Route Diagnostic Report
            </p>
          </div>
        </div>

        {/* Current Path Identifier */}
        <div className="bg-[#0B0F17] border border-[#1F2937] p-3 rounded mb-6 font-mono text-xs">
          <span className="text-[#9CA3AF]">Requested Path: </span>
          <span className="text-[#0EA5E9] font-bold break-all">{currentPath}</span>
        </div>

        <div className="space-y-4 text-xs text-[#9CA3AF] leading-relaxed">
          <p className="text-white font-bold uppercase tracking-wider">
            Why are you seeing this 404 error?
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#9CA3AF]">
            <li>
              <strong className="text-gray-200">Unregistered Client Route:</strong> The path <code className="text-[#0EA5E9]">{currentPath}</code> is not registered in <code className="text-[#0EA5E9]">src/App.jsx</code> routing table, causing React Router to trigger the fallback wildcard route (<code className="text-[#0EA5E9]">*</code>).
            </li>
            <li>
              <strong className="text-gray-200">SPA Deep-Link Reload:</strong> Directly accessing or refreshing subpaths on static hosts without rewrite rules (fallback to <code className="text-[#0EA5E9]">index.html</code>) triggers server-level HTTP 404 errors.
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1F2937] flex flex-wrap gap-3">
          <Link
            to="/"
            className="bg-[#0EA5E9] hover:bg-[#0284C7] text-black px-5 py-2.5 text-xs font-extrabold uppercase inline-flex items-center space-x-2 border-2 border-[#0EA5E9] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/docs"
            className="bg-[#111827] hover:bg-[#1F2937] text-white px-5 py-2.5 text-xs font-bold uppercase inline-flex items-center space-x-2 border-2 border-[#1F2937] transition-colors"
          >
            <FileText className="w-4 h-4 text-[#0EA5E9]" />
            <span>Documentation</span>
          </Link>
          <Link
            to="/support"
            className="bg-[#111827] hover:bg-[#1F2937] text-white px-5 py-2.5 text-xs font-bold uppercase inline-flex items-center space-x-2 border-2 border-[#1F2937] transition-colors"
          >
            <HelpCircle className="w-4 h-4 text-[#0EA5E9]" />
            <span>Support Center</span>
          </Link>
        </div>
      </div>

      {/* Directory of Valid Routes */}
      <div className="bg-[#111827] border-2 border-[#1F2937] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1F2937]">
        <div className="flex items-center space-x-2 mb-4">
          <Compass className="w-5 h-5 text-[#0EA5E9]" />
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">
            Available Application Routes
          </h2>
        </div>
        <p className="text-xs text-[#9CA3AF] mb-6">
          The following client routes are valid and active in Nomony AI:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="flex items-center justify-between p-3 bg-[#0B0F17] border border-[#1F2937] hover:border-[#0EA5E9] rounded group transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Terminal className="w-3.5 h-3.5 text-[#0EA5E9]" />
                <span className="text-xs font-bold text-white group-hover:text-[#0EA5E9] transition-colors">
                  {link.label}
                </span>
              </div>
              <span className="text-[10px] text-[#9CA3AF] font-mono">{link.path}</span>
            </Link>
          ))}
          <Link
            to={NOMONY_APP_URL}
            className="flex items-center justify-between p-3 bg-[#0B0F17] border border-[#1F2937] hover:border-[#0EA5E9] rounded group transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Terminal className="w-3.5 h-3.5 text-[#0EA5E9]" />
              <span className="text-xs font-bold text-white group-hover:text-[#0EA5E9] transition-colors">
                ACCOUNT WORKSPACE
              </span>
            </div>
            <span className="text-[10px] text-[#9CA3AF] font-mono">{NOMONY_APP_URL}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
