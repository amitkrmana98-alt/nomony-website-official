import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, AlertTriangle, ShieldCheck, Loader2 } from 'lucide-react';

export default function SignupPage() {
  const { loginWithGoogleCredential, googleClientId, loginWithEmail, user } = useAuth();
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
                setErrorMsg(err.message || 'Failed to process Google account registration.');
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
            text: 'signup_with',
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
      setErrorMsg('Failed to complete email registration.');
    }
  };

  if (user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center font-mono space-y-6">
        <div className="p-6 bg-[#111827] border-2 border-[#0EA5E9]">
          <h2 className="text-xl font-bold text-white uppercase mb-2">Account Active</h2>
          <p className="text-xs text-[#9CA3AF] mb-4">Signed in as {user.email}</p>
          <Link to="/account" className="neu-button bg-[#0EA5E9] text-black px-4 py-2 text-xs font-extrabold uppercase inline-block">
            Open Account Portal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-16 font-mono">
      <div className="bg-[#111827] border-2 border-[#1F2937] p-8 shadow-[8px_8px_0px_0px_#0EA5E9] space-y-6">
        
        <div className="border-b-2 border-[#1F2937] pb-4">
          <div className="text-xs font-bold text-[#0EA5E9] uppercase tracking-wider mb-1">CREATE ACCOUNT</div>
          <h1 className="text-2xl font-black text-white uppercase">Get Started Free</h1>
          <p className="text-xs text-[#9CA3AF] mt-1">Includes ₹0 Free plan with 2 build executions allowance per month.</p>
        </div>

        {errorMsg && (
          <div className="bg-rose-500/10 border border-rose-500/30 rounded p-3 text-rose-400 text-xs flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="space-y-3">
          <div ref={googleBtnRef} className="w-full min-h-[44px] flex justify-center" />

          {!gisInitialized && (
            <div className="w-full p-3 bg-[#0B0F17] border border-[#1F2937] text-[#9CA3AF] text-xs text-center flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-[#0EA5E9]" />
              <span>Loading Google Sign-In SDK...</span>
            </div>
          )}
        </div>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-[#1F2937]"></div>
          <span className="flex-shrink mx-3 text-[10px] text-[#9CA3AF] uppercase font-bold">OR EMAIL REGISTRATION</span>
          <div className="flex-grow border-t border-[#1F2937]"></div>
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#9CA3AF] uppercase font-bold mb-1">Work Email</label>
            <input
              type="email"
              required
              placeholder="developer@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full bg-[#0B0F17] border-2 border-[#1F2937] focus:border-[#0EA5E9] text-white p-3 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full neu-button bg-[#0EA5E9] text-black p-3 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span>Create Free Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="p-3 bg-[#0B0F17] border border-[#1F2937] text-[11px] text-[#9CA3AF] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0EA5E9] shrink-0" />
          <span>No credit card required for Free plan setup.</span>
        </div>

        <div className="pt-4 border-t border-[#1F2937] text-center text-xs text-[#9CA3AF]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#0EA5E9] hover:underline font-bold uppercase">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
