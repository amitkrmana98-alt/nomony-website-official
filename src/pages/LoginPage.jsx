import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, AlertTriangle, ArrowRight, UserCheck, Lock } from 'lucide-react';

export default function LoginPage() {
  const { loginWithGoogle, loginWithEmail, user, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleGoogleAuth = () => {
    try {
      loginWithGoogle();
      navigate('/account');
    } catch (err) {
      setErrorMsg('Failed to log in with Google OAuth.');
    }
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    if (!email || !email.trim()) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    try {
      loginWithEmail(email.trim());
      navigate('/account');
    } catch (err) {
      setErrorMsg('Failed to complete email authentication.');
    }
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 font-mono space-y-6">
        <div className="p-8 bg-[#111827] border-2 border-[#0EA5E9] shadow-[8px_8px_0px_0px_#0EA5E9] text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#0EA5E9]/20 border border-[#0EA5E9] flex items-center justify-center text-[#0EA5E9]">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#0EA5E9] uppercase tracking-wider">ACTIVE SESSION</span>
            <h2 className="text-xl font-black text-white uppercase mt-1">Already Logged In</h2>
            <p className="text-xs text-[#9CA3AF] mt-2">Authenticated as <span className="text-white font-bold">{user.email}</span></p>
          </div>

          <div className="p-3 bg-[#0B0F17] border border-[#1F2937] text-left text-xs space-y-1">
            <div className="flex justify-between text-[#9CA3AF]">
              <span>Provider:</span>
              <span className="text-white font-bold">{user.provider || 'Google OAuth'}</span>
            </div>
            <div className="flex justify-between text-[#9CA3AF]">
              <span>Plan Tier:</span>
              <span className="text-[#0EA5E9] font-bold">{user.plan || 'STARTER'}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link to="/account" className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-black font-extrabold px-4 py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors">
              <span>Go to Account Workspace</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={logout}
              className="w-full bg-[#0B0F17] hover:bg-[#1F2937] text-[#9CA3AF] hover:text-white border border-[#1F2937] px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-mono">
      <div className="bg-[#111827] border-2 border-[#1F2937] p-8 shadow-[8px_8px_0px_0px_#0EA5E9] space-y-6">
        
        <div className="border-b-2 border-[#1F2937] pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-1">
            <Lock className="w-4 h-4" />
            <span>AUTHENTICATION</span>
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tight">Login to Nomony</h1>
          <p className="text-xs text-[#9CA3AF] mt-1">Select an authorized login provider to access your workspace.</p>
        </div>

        {errorMsg && (
          <div className="p-3 bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="w-full bg-[#0B0F17] hover:bg-[#1F2937] text-white border-2 border-[#374151] hover:border-[#0EA5E9] p-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-colors shadow-[2px_2px_0px_0px_#1F2937]"
        >
          <div className="w-5 h-5 rounded-full bg-[#0EA5E9] font-black text-xs text-black flex items-center justify-center">G</div>
          <span>Continue with Google</span>
        </button>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-[#1F2937]"></div>
          <span className="flex-shrink mx-3 text-[10px] text-[#9CA3AF] uppercase font-bold">OR EMAIL CODE</span>
          <div className="flex-grow border-t border-[#1F2937]"></div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#9CA3AF] uppercase font-bold mb-1 flex items-center justify-between">
              <span>Email Address</span>
              <Mail className="w-3.5 h-3.5 text-[#0EA5E9]" />
            </label>
            <input
              type="email"
              required
              placeholder="developer@company.com"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-black p-3 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-[2px_2px_0px_0px_#1F2937]"
          >
            <span>Continue with Email</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Phone Auth Status */}
        <div className="p-3 bg-[#0B0F17] border border-[#1F2937] text-[11px] text-[#9CA3AF] space-y-1">
          <div className="flex items-center gap-1.5 text-amber-400 font-bold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>PHONE AUTH UNAVAILABLE</span>
          </div>
          <p className="text-[10px] text-[#9CA3AF]">
            Phone authentication is currently disabled on backend server configs. Use Google OAuth or Email Code.
          </p> </div>

        <div className="pt-4 border-t border-[#1F2937] text-center text-xs text-[#9CA3AF]">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-[#0EA5E9] hover:underline font-bold uppercase ml-1">
            Sign Up Here
          </Link>
        </div>
      </div>
    </div>
  );
}
