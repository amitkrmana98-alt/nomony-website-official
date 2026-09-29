import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, AlertTriangle, ArrowRight, UserCheck, Lock, Loader2, CheckCircle2, Shield } from 'lucide-react';

export default function LoginPage() {
  const { loginWithGoogleCredential, googleClientId, loginWithEmail, user, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gisInitialized, setGisInitialized] = useState(false);
  const googleBtnRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initGis = () => {
      if (window.google?.accounts?.id) {
        setGisInitialized(true);
        return;
      }
      const existingScript = document.querySelector('script[src="https://accounts.google.com/gsi/client"]');
      if (existingScript) {
        existingScript.addEventListener('load', () => setGisInitialized(true));
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => setGisInitialized(true);
      script.onerror = () => {
        console.warn('Google Identity Services SDK script could not be loaded.');
      };
      document.body.appendChild(script);
    };

    initGis();
  }, []);

  useEffect(() => {
    if (gisInitialized && window.google?.accounts?.id) {
      try {
        window.google.accounts.id.initialize({
          client_id: googleClientId,
          callback: (response) => {
            if (response && response.credential) {
              setIsLoading(true);
              setErrorMsg('');
              try {
                loginWithGoogleCredential(response.credential);
                navigate('/account');
              } catch (err) {
                setErrorMsg(err.message || 'Failed to process Google authentication token.');
              } finally {
                setIsLoading(false);
              }
            }
          },
          auto_select: false
        });

        if (googleBtnRef.current) {
          googleBtnRef.current.innerHTML = '';
          window.google.accounts.id.renderButton(googleBtnRef.current, {
            theme: 'filled_dark',
            size: 'large',
            width: '100%',
            text: 'continue_with',
            shape: 'rectangular'
          });
        }
      } catch (e) {
        console.warn('Google Identity Services setup error:', e);
      }
    }
  }, [gisInitialized, googleClientId, loginWithGoogleCredential, navigate]);

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
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-8 text-center space-y-6 shadow-xl">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <UserCheck className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Currently Signed In
            </h2>
            <p className="text-slate-400 text-sm">
              Signed in as <span className="text-emerald-400 font-semibold">{user.email || 'Authenticated User'}</span>
            </p>
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => navigate('/account')}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              Go to Account Dashboard <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={logout}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2.5 px-4 rounded-lg border border-slate-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-mono">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in with Google OAuth or email code</p>
        </div>

        {errorMsg && (
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-lg p-3 text-rose-400 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="space-y-4">
          <div ref={googleBtnRef} className="w-full min-h-[44px] flex justify-center" />

          {!gisInitialized && (
            <div className="w-full py-3 px-4 bg-slate-800/60 text-slate-400 text-xs text-center rounded-xl border border-slate-700 flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
              <span>Initializing Google Identity Services...</span>
            </div>
          )}
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900 px-3 text-slate-500 font-semibold">Or continue with email</span>
          </div>
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@example.com"
                className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl py-3 pl-10 pr-4 text-slate-200 text-sm placeholder-slate-600 outline-none transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm shadow-lg shadow-emerald-500/10"
          >
            <span>Continue with Email</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Shield className="w-4 h-4 text-emerald-500/70" />
          <span>Official Google OAuth 2.0 Authentication</span>
        </div>
      </div>
    </div>
  );
}
