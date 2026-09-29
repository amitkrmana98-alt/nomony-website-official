import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Monitor,
  Smartphone,
  Tablet,
  RefreshCw,
  Code2,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ArrowLeft,
  Activity,
  BarChart2,
  Bell,
  Zap,
  Sliders,
  Globe
} from 'lucide-react';

export default function PreviewPage() {
  const { id } = useParams();
  const previewId = id || 'nnlU8nm3Q4rdClF2DqWqRg';
  
  const [viewport, setViewport] = useState('desktop');
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedFile, setSelectedFile] = useState('src/App.jsx');

  const [appCounter, setAppCounter] = useState(1280);
  const [appFilter, setAppFilter] = useState('all');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const shareUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 600);
  };

  const projectFiles = [
    {
      path: 'src/App.jsx',
      language: 'jsx',
      code: `import React, { useState } from 'react';\nimport Dashboard from './components/Dashboard';\nimport Sidebar from './components/Sidebar';\n\nexport default function App() {\n  const [activeTab, setActiveTab] = useState('overview');\n\n  return (\n    <div className="min-h-screen bg-[#0B0F17] text-[#F9FAFB] flex">\n      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />\n      <main className="flex-1 p-6">\n        <Dashboard activeTab={activeTab} />\n      </main>\n    </div>\n  );\n}`
    },
    {
      path: 'src/components/Dashboard.jsx',
      language: 'jsx',
      code: `import React from 'react';\nimport MetricsCard from './MetricsCard';\n\nexport default function Dashboard({ activeTab }) {\n  return (\n    <div className="space-y-6">\n      <div className="flex justify-between items-center border-b border-[#1F2937] pb-4">\n        <h1 className="text-2xl font-black text-white uppercase tracking-wider">\n          {activeTab} Overview\n        </h1>\n        <span className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-mono px-3 py-1 border border-[#0EA5E9]/30 rounded">\n          Live Sync Active\n        </span>\n      </div>\n      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">\n        <MetricsCard title="Total Deployments" value="1,420" change="+12.5%" />\n        <MetricsCard title="Active Pipeline Runs" value="84" change="+4.2%" />\n        <MetricsCard title="System Uptime" value="99.98%" change="Optimal" />\n      </div>\n    </div>\n  );\n}`
    },
    {
      path: 'package.json',
      language: 'json',
      code: `{\n  "name": "nomony-generated-app",\n  "private": true,\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.2.0",\n    "react-dom": "^18.2.0",\n    "lucide-react": "^0.344.0"\n  }\n}`
    }
  ];

  const activeFileObj = projectFiles.find(f => f.path === selectedFile) || projectFiles[0];

  const pipelineSteps = [
    { name: 'OBJECTIVE', status: 'Passed', detail: 'Parsed requirements for autonomous web dashboard' },
    { name: 'PLAN', status: 'Passed', detail: 'Generated 3 components and routing layout structure' },
    { name: 'RESEARCH', status: 'Passed', detail: 'Verified React 18 & Lucide icon contract interfaces' },
    { name: 'DESIGN', status: 'Passed', detail: 'Applied dark neubrutalist theme palette #0B0F17' },
    { name: 'CODE', status: 'Passed', detail: 'Synthesized 3 clean React files' },
    { name: 'BUILD', status: 'Passed', detail: 'Compiled bundle with 0 syntax errors' },
    { name: 'TEST', status: 'Passed', detail: 'Component render and click handlers verified' },
    { name: 'REPAIR', status: 'Passed', detail: '0 diagnostic patches needed' },
    { name: 'VALIDATE', status: 'Passed', detail: 'Tested viewports 320px to 1440px with 0 overflow' },
    { name: 'DELIVER', status: 'Passed', detail: 'Preview sandbox ready for interactive execution' }
  ];

  return (
    <div className="min-h-screen bg-[#0B0F17] text-[#F9FAFB] flex flex-col font-sans max-w-full overflow-x-hidden">
      <header className="border-b border-[#1F2937] bg-[#111827] px-4 py-3 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center space-x-3 shrink-0 min-w-0">
            <Link
              to="/account"
              className="p-1.5 text-gray-400 hover:text-white bg-[#0B0F17] border border-[#1F2937] rounded hover:border-[#0EA5E9] transition-colors shrink-0"
              title="Back to Workspace"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="min-w-0">
              <div className="flex items-center space-x-2 flex-wrap">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0EA5E9]">
                  NOMONY LIVE PREVIEW
                </span>
                <span className="bg-[#1F2937] text-gray-300 text-[10px] font-mono px-2 py-0.5 rounded font-semibold border border-gray-700 truncate max-w-[140px] sm:max-w-none">
                  {previewId}
                </span>
              </div>
              <h1 className="text-sm font-bold text-white flex items-center gap-2 truncate">
                <span className="truncate">Autonomous Application Sandbox</span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-800 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
                  RUNNABLE
                </span>
              </h1>
            </div>
          </div>

          <div className="flex items-center bg-[#0B0F17] border border-[#1F2937] p-1 rounded font-mono text-xs overflow-x-auto max-w-full shrink-0">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded flex items-center space-x-1.5 font-bold transition-all shrink-0 ${
                activeTab === 'preview' ? 'bg-[#0EA5E9] text-black shadow-[2px_2px_0px_0px_#1F2937]' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Interactive App</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded flex items-center space-x-1.5 font-bold transition-all shrink-0 ${
                activeTab === 'code' ? 'bg-[#0EA5E9] text-black shadow-[2px_2px_0px_0px_#1F2937]' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Source Files</span>
            </button>
            <button
              onClick={() => setActiveTab('logs')}
              className={`px-3 py-1.5 rounded flex items-center space-x-1.5 font-bold transition-all shrink-0 ${
                activeTab === 'logs' ? 'bg-[#0EA5E9] text-black shadow-[2px_2px_0px_0px_#1F2937]' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Build Logs</span>
            </button>
          </div>

          <div className="flex items-center space-x-2 shrink-0 flex-wrap gap-y-2">
            {activeTab === 'preview' && (
              <div className="hidden sm:flex items-center bg-[#0B0F17] border border-[#1F2937] rounded p-0.5 space-x-1">
                <button
                  onClick={() => setViewport('desktop')}
                  className={`p-1.5 rounded transition-colors ${viewport === 'desktop' ? 'bg-[#1F2937] text-[#0EA5E9]' : 'text-gray-400 hover:text-white'}`}
                  title="Desktop View (100%)"
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewport('tablet')}
                  className={`p-1.5 rounded transition-colors ${viewport === 'tablet' ? 'bg-[#1F2937] text-[#0EA5E9]' : 'text-gray-400 hover:text-white'}`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewport('mobile')}
                  className={`p-1.5 rounded transition-colors ${viewport === 'mobile' ? 'bg-[#1F2937] text-[#0EA5E9]' : 'text-gray-400 hover:text-white'}`}
                  title="Mobile View (390px)"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={handleRefresh}
              className="p-2 text-gray-400 hover:text-white bg-[#0B0F17] border border-[#1F2937] rounded hover:border-[#0EA5E9] transition-colors shrink-0"
              title="Refresh Sandbox"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin text-[#0EA5E9]' : ''}`} />
            </button>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-bold text-gray-300 bg-[#0B0F17] border border-[#1F2937] hover:border-[#0EA5E9] rounded transition-colors shrink-0"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5 text-gray-400" />
                  <span>Share Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 flex flex-col min-w-0">
        {activeTab === 'preview' && (
          <div className="flex-1 flex flex-col items-center justify-start transition-all duration-300 w-full min-w-0">
            <div className="w-full text-center py-1.5 mb-3 bg-[#111827] border border-[#1F2937] rounded font-mono text-[11px] text-gray-400 flex items-center justify-center gap-2 px-2">
              <Globe className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
              <span>Viewport: </span>
              <span className="text-white font-bold">
                {viewport === 'desktop' ? 'Full Desktop (100%)' : viewport === 'tablet' ? 'Tablet (768px)' : 'Mobile (390px)'}
              </span>
            </div>

            <div
              className={`w-full bg-[#111827] border border-[#1F2937] rounded-lg overflow-hidden shadow-2xl transition-all duration-300 flex flex-col ${
                viewport === 'mobile' ? 'max-w-[390px]' : viewport === 'tablet' ? 'max-w-[768px]' : 'max-w-full'
              }`}
            >
              {/* Simulated Browser Address Bar */}
              <div className="bg-[#0B0F17] border-b border-[#1F2937] px-4 py-2 flex items-center space-x-3 text-xs font-mono text-gray-400 shrink-0">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="flex-1 bg-[#111827] border border-[#1F2937] px-3 py-1 rounded text-gray-300 flex items-center justify-between text-[11px] truncate">
                  <span className="truncate">https://sandbox.nomony.app/app/{previewId}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 ml-2 shrink-0" />
                </div>
              </div>

              {/* Sandbox Application Canvas */}
              <div className="p-6 space-y-6 min-h-[500px] bg-[#0B0F17]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#1F2937] pb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0EA5E9]">
                      GENERATED APP ENGINE
                    </span>
                    <h2 className="text-xl font-black text-white uppercase tracking-wider">
                      Cloud Ops Control Hub
                    </h2>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                      className={`p-2 rounded border transition-colors ${notificationsEnabled ? 'bg-[#0EA5E9]/10 border-[#0EA5E9] text-[#0EA5E9]' : 'bg-[#111827] border-[#1F2937] text-gray-500'}`}
                      title="Toggle Sandbox Notifications"
                    >
                      <Bell className="w-4 h-4" />
                    </button>
                    <div className="flex items-center bg-[#111827] border border-[#1F2937] rounded p-1 text-xs font-mono">
                      {['all', 'active', 'paused'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setAppFilter(filter)}
                          className={`px-2.5 py-1 rounded uppercase font-bold text-[10px] transition-colors ${
                            appFilter === filter ? 'bg-[#0EA5E9] text-black' : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#111827] border border-[#1F2937] p-4 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-gray-400 text-xs font-mono">
                      <span>OPERATIONAL DEPLOYMENTS</span>
                      <Activity className="w-4 h-4 text-[#0EA5E9]" />
                    </div>
                    <div className="text-2xl font-black text-white font-mono">
                      {appCounter.toLocaleString()}
                    </div>
                    <div className="flex items-center space-x-2 pt-2">
                      <button
                        onClick={() => setAppCounter(c => c + 1)}
                        className="px-2 py-1 text-xs font-mono font-bold bg-[#0EA5E9] text-black rounded hover:bg-[#38bdf8] transition-colors"
                      >
                        + Deploy
                      </button>
                      <button
                        onClick={() => setAppCounter(c => Math.max(0, c - 1))}
                        className="px-2 py-1 text-xs font-mono font-bold bg-[#1F2937] text-gray-300 rounded hover:bg-gray-700 transition-colors"
                      >
                        - Scale Down
                      </button>
                    </div>
                  </div>

                  <div className="bg-[#111827] border border-[#1F2937] p-4 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-gray-400 text-xs font-mono">
                      <span>CLUSTER HEALTH</span>
                      <Zap className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-black text-emerald-400 font-mono">
                      99.98%
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      Status: {appFilter === 'paused' ? 'Throttled' : 'Optimal Efficiency'}
                    </div>
                  </div>

                  <div className="bg-[#111827] border border-[#1F2937] p-4 rounded-lg space-y-2">
                    <div className="flex items-center justify-between text-gray-400 text-xs font-mono">
                      <span>AUTONOMOUS AGENTS</span>
                      <Sliders className="w-4 h-4 text-purple-400" />
                    </div>
                    <div className="text-2xl font-black text-white font-mono">
                      12 / 12 ACTIVE
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      Notifications: {notificationsEnabled ? 'ENABLED' : 'DISABLED'}
                    </div>
                  </div>
                </div>

                <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 flex items-center justify-between">
                    <span>Live Event Stream</span>
                    <BarChart2 className="w-4 h-4 text-[#0EA5E9]" />
                  </h3>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="p-2.5 bg-[#0B0F17] border border-[#1F2937] rounded flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-gray-200">Deployment bundle #{appCounter} initialized cleanly</span>
                      </div>
                      <span className="text-gray-500 text-[10px]">Just now</span>
                    </div>
                    <div className="p-2.5 bg-[#0B0F17] border border-[#1F2937] rounded flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-gray-200">Health check response 200 OK across 4 regions</span>
                      </div>
                      <span className="text-gray-500 text-[10px]">2m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="bg-[#111827] border border-[#1F2937] rounded-lg overflow-hidden flex flex-col md:flex-row flex-1 min-h-[550px]">
            <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#1F2937] bg-[#0B0F17] p-3 shrink-0">
              <div className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider mb-3 px-2 flex items-center justify-between">
                <span>Project Files</span>
                <Code2 className="w-3.5 h-3.5 text-[#0EA5E9]" />
              </div>
              <div className="space-y-1 font-mono text-xs">
                {projectFiles.map((file) => (
                  <button
                    key={file.path}
                    onClick={() => setSelectedFile(file.path)}
                    className={`w-full text-left px-3 py-2 rounded transition-colors flex items-center space-x-2 ${' '}
                      ${selectedFile === file.path ? 'bg-[#1F2937] text-[#0EA5E9] font-bold border border-[#0EA5E9]/30' : 'text-gray-400 hover:text-white hover:bg-[#111827]'}
                    `}
                  >
                    <span className="truncate">{file.path}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col min-w-0 bg-[#0B0F17]">
              <div className="bg-[#111827] border-b border-[#1F2937] px-4 py-2.5 flex items-center justify-between text-xs font-mono shrink-0">
                <span className="text-gray-300 font-bold truncate">{activeFileObj.path}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(activeFileObj.code);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-gray-400 hover:text-white flex items-center space-x-1 font-mono text-xs text-gray-400 hover:text-white transition-colors shrink-0 ml-2"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>
              <pre className="p-4 font-mono text-xs text-gray-300 overflow-x-auto leading-relaxed flex-1 bg-[#0B0F17]">
                <code>{activeFileObj.code}</code>
              </pre>
            </div>
          </div>
        )}

        {activeTab === 'logs' && (
          <div className="space-y-4 flex-1 flex flex-col min-w-0">
            <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 flex items-center justify-between flex-wrap gap-3 font-mono text-xs shrink-0">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">10 / 10 Execution Pipeline Phases Verified</span>
              </div>
              <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1 rounded text-[11px] font-bold">
                Status: PASSED (0.00% Error Rate)
              </span>
            </div>

            <div className="bg-[#111827] border border-[#1F2937] rounded-lg p-4 space-y-3 font-mono text-xs flex-1 overflow-y-auto">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Phase Execution Trace
              </div>
              <div className="space-y-2">
                {pipelineSteps.map((step, idx) => (
                  <div key={idx} className="p-3 bg-[#0B0F17] border border-[#1F2937] rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-500 w-6 text-right font-bold">{idx + 1}.</span>
                      <span className="font-bold text-[#0EA5E9] w-24">{step.name}</span>
                      <span className="text-gray-300 text-xs">{step.detail}</span>
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-950 text-emerald-400 border border-emerald-800 self-start sm:self-auto">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 border-t border-[#1F2937] pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-2 shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Nomony Verification Engine Active</span>
          </div>
          <span>Sandbox Runtime Build v1.0.4</span>
        </div>
      </main>
    </div>
  );
}
