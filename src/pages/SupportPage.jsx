import React, { useState } from 'react';
import NeubrutalistCard from '../components/NeubrutalistCard';
import { HelpCircle, Send, CheckCircle2, AlertCircle, MessageSquare, ShieldAlert } from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Account/Billing',
    subject: '',
    description: '',
    projectId: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.description) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="border-b-2 border-[#1F2937] pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111827] border border-[#0EA5E9] text-xs font-mono text-[#0EA5E9] font-bold uppercase mb-4">
          <HelpCircle className="w-4 h-4" />
          <span>CUSTOMER SUPPORT & HELP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-mono font-black text-white uppercase tracking-tight mb-4">
          Support Portal
        </h1>
        <p className="text-sm sm:text-base font-mono text-[#9CA3AF] max-w-2xl leading-relaxed">
          Get assistance with workspace access, pricing questions, project builds, or account details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Support Request Form */}
        <div className="lg:col-span-2 bg-[#111827] border-2 border-[#1F2937] p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1F2937]">
          <h2 className="text-xl font-mono font-black text-white uppercase mb-6 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#0EA5E9]" />
            <span>Submit Support Ticket Request</span>
          </h2>

          {submitted ? (
            <div className="p-6 bg-[#0B0F17] border-2 border-[#0EA5E9] space-y-3">
              <div className="flex items-center gap-2 text-[#0EA5E9] font-mono font-bold text-base uppercase">
                <CheckCircle2 className="w-5 h-5" />
                <span>Support Request Received</span>
              </div>
              <p className="font-mono text-xs text-[#9CA3AF] leading-relaxed">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Your ticket draft has been generated for category <span className="text-white font-bold">{formData.category}</span>.
              </p>
              <div className="p-3 bg-[#111827] border border-[#374151] text-xs font-mono text-[#9CA3AF]">
                <span className="text-[#0EA5E9] font-bold block mb-1">BACKEND INTEGRATION STATUS:</span>
                Support tickets interface ready. Direct ticket backend dispatch will connect in the next production update.
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', category: 'Account/Billing', subject: '', description: '', projectId: '' });
                }}
                className="neu-button bg-[#0EA5E9] text-black px-4 py-2 text-xs font-mono font-extrabold uppercase inline-block mt-2"
              >
                Submit Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              {errorMsg && (
                <div className="p-3 bg-[#0B0F17] border border-red-500 text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase mb-1 font-bold">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase mb-1 font-bold">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@domain.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase mb-1 font-bold">Category *</label>
                  <select
                    value={formData.category}
                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
                  >
                    <option value="Account/Billing">Account & Billing</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Report Problem">Report a Problem</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase mb-1 font-bold">Related Project ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. prj_83921"
                    value={formData.projectId}
                    onChange={e => setFormData({ ...formData, projectId: e.target.value })}
                    className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#9CA3AF] uppercase mb-1 font-bold">Subject *</label>
                <input
                  type="text"
                  required
                  placeholder="Brief summary of your inquiry"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#9CA3AF] uppercase mb-1 font-bold">Description *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Describe what you need help with..."
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="neu-button bg-[#0EA5E9] text-black font-extrabold px-6 py-3 uppercase flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Support Request</span>
              </button> <span className="text-[11px] text-[#9CA3AF] block mt-1">Integrates with future ticketing dispatch engine.</span>
            </form>
          )}
        </div>

        {/* Sidebar Common Help Topics */}
        <div className="space-y-6">
          <NeubrutalistCard>
            <h3 className="font-mono font-bold text-white uppercase text-sm mb-3 border-b border-[#1F2937] pb-2">
              COMMON ISSUES & HELP
            </h3>
            <ul className="space-y-3 font-mono text-xs text-[#9CA3AF]">
              <li className="border-b border-[#1F2937]/50 pb-2">
                <span className="text-white font-bold block mb-0.5">Build Execution Failure:</span>
                Check your prompt requirements in the docs to ensure specific step objectives.
              </li>
              <li className="border-b border-[#1F2937]/50 pb-2">
                <span className="text-white font-bold block mb-0.5">Authentication Issues:</span>
                Verify Google login permissions or Email OTP code delivery.
              </li>
              <li className="border-b border-[#1F2937]/50 pb-2">
                <span className="text-white font-bold block mb-0.5">Usage Limits:</span>
                Upgrade your workspace allowance from the pricing page.
              </li>
            </ul>
          </NeubrutalistCard>

          <div className="p-4 bg-[#111827] border-2 border-[#1F2937] text-xs font-mono text-[#9CA3AF] space-y-2">
            <div className="text-[#0EA5E9] font-bold uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              <span>Honest Support Disclosure</span>
            </div>
            <p className="leading-relaxed text-[11px]">
              Support ticket forms submit directly into local diagnostic state. Support teams review submitted logs in production environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}