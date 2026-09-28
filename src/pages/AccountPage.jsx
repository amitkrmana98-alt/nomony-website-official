import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { User, Shield, Terminal, Zap, LogOut, ArrowRight, Layers, FileCode } from 'lucide-react';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center font-mono space-y-4">
        <div className="p-6 bg-[#111827] border-2 border-[#1F2937]">
          <h2 className="text-xl font-bold text-white uppercase mb-2">Authentication Required</h2>
          <p className="text-xs text-[#9CA3AF] mb-4">Please log in to view your Nomony account and workspace access.</p>
          <Link to="/login" className="neu-button bg-[#0EA5E9] text-black px-4 py-2 text-xs font-extrabold uppercase inline-block">
            Log In Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 font-mono">
      
      {/* Top Banner */}
      <div className="bg-[#111827] border-2 border-[#1F2937] p-8 shadow-[6px_6px_0px_0px_#1F2937] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#0EA5E9] text-black font-black text-2xl flex items-center justify-center border-2 border-white shadow-[3px_3px_0px_0px_#FFFFFF]">
            {user.name ? user.name[0].toUpperCase() : 'U'}
          </div>
          <div>
            <div className="text-xs text-[#0EA5E9] font-bold uppercase tracking-wider">USER WORKSPACE PORTAL</div>
            <h1 className="text-2xl font-black text-white uppercase">{user.name}</h1>
            <p className="text-xs text-[#9CA3AF]">{user.email} • Authenticated via {user.provider}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
            className="px-4 py-2 text-xs font-bold text-white bg-[#0B0F17] border-2 border-[#1F2937] hover:border-red-500 flex items-center gap-1.5 uppercase"
          >
            <LogOut className="w-3.5 h-3.5 text-red-400" />
            <span>Log Out</span>
          </button>
          <Link
            to="/" className="neu-button bg-[#0EA5E9] text-black px-4 py-2 text-xs font-extrabold uppercase flex items-center gap-1.5"
          >
            <span>Public Site Home</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Account Details & Usage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Plan & Usage Allowance */}
        <div className="bg-[#111827] border-2 border-[#1F2937] p-6 space-y-4">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            <span>Subscription Plan</span>
          </div>
          <div className="text-2xl font-black text-white uppercase">{user.plan || 'FREE'} PLAN</div>
          <p className="text-xs text-[#9CA3AF]">
            Monthly build execution allowance: <span className="text-white font-bold">{user.buildsRemaining || 2} builds remaining</span>.
          </p>
          <div className="w-full bg-[#0B0F17] border border-[#1F2937] h-3 p-0.5">
            <div className="bg-[#0EA5E9] h-full w-1/4"></div>
          </div>
          <Link to="/pricing" className="text-xs text-[#0EA5E9] hover:underline block font-bold uppercase pt-2">
            Upgrade plan or buy build executions →
          </Link>
        </div>

        {/* Workspace Security */}
        <div className="bg-[#111827] border-2 border-[#1F2937] p-6 space-y-4">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase flex items-center gap-1.5">
            <Shield className="w-4 h-4" />
            <span>Security & Isolation</span>
          </div>
          <div className="text-sm font-bold text-white uppercase">Sandboxed Environment</div>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            Your project code and workflow memory logs are protected within isolated account scopes.
          </p>
          <div className="p-2 bg-[#0B0F17] border border-[#1F2937] text-[11px] text-[#9CA3AF]">
            Status: Isolated Sandbox Active
          </div>
        </div>

        {/* Nomony Application Entry */}
        <div className="bg-[#111827] border-2 border-[#0EA5E9] p-6 shadow-[4px_4px_0px_0px_#0EA5E9] space-y-4">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase flex items-center gap-1.5">
            <Terminal className="w-4 h-4" />
            <span>Application Entry</span>
          </div>
          <div className="text-sm font-bold text-white uppercase">Enter Engineering Workspace</div>
          <p className="text-xs text-[#9CA3AF] leading-relaxed">
            Launch into Nomony AI application workspace to construct, test, and repair projects.
          </p>
          <button
            onClick={() => alert('Nomony AI App Workspace launched. (Connected to Nomony application engine)')}
            className="w-full neu-button bg-[#0EA5E9] text-black py-2.5 text-xs font-extrabold uppercase flex items-center justify-center gap-2"
          >
            <span>Open Nomony App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}