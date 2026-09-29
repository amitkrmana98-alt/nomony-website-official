import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, NOMONY_APP_URL, APP_LOGIN_URL, APP_SIGNUP_URL } from '../data/navigation';
import { useAuth } from '../context/AuthContext';
import { Menu, X, ArrowRight, User } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useAuth();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const logoSrc = `${import.meta.env.BASE_URL}uploads/screen.png`;

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/95 backdrop-blur border-b border-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5 group">
            <img
              src={logoSrc}
              alt="Nomony AI Logo"
              className="w-8 h-8 rounded object-cover border border-[#0EA5E9] shadow-[2px_2px_0px_0px_#2563EB]"
            />
            <span className="text-xl font-black tracking-wider text-white group-hover:text-[#0EA5E9] transition-colors flex items-center">
              NOMONY <span className="text-[#0EA5E9] text-xs font-mono font-normal uppercase ml-1 border border-[#0EA5E9] px-1.5 py-0.5 rounded">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-mono font-bold uppercase tracking-wider transition-colors hover:text-[#0EA5E9] ${
                  isActive(link.path) ? 'text-[#0EA5E9]' : 'text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA / Auth Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <Link
                to={NOMONY_APP_URL}
                className="inline-flex items-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#0EA5E9] hover:bg-[#0284C7] transition-colors shadow-[2px_2px_0px_0px_#1F2937] border-2 border-[#0EA5E9]"
              >
                <User className="w-4 h-4 mr-2" />
                Account
              </Link>
            ) : (
              <>
                <Link
                  to={APP_LOGIN_URL}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors px-3 py-2"
                >
                  Log in
                </Link>
                <Link
                  to={APP_SIGNUP_URL}
                  className="inline-flex items-center px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#0EA5E9] hover:bg-[#0284C7] transition-colors shadow-[2px_2px_0px_0px_#1F2937] border-2 border-[#0EA5E9]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#111827] border border-[#1F2937] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#1F2937] bg-[#0B0F17] px-4 pt-2 pb-6 space-y-3 font-mono">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#111827] text-[#0EA5E9] border-l-2 border-[#0EA5E9]'
                    : 'text-gray-300 hover:bg-[#111827] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-[#1F2937] space-y-2">
            {user ? (
              <Link
                to={NOMONY_APP_URL}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex justify-center items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#0EA5E9] rounded hover:bg-[#0284C7] transition-colors"
              >
                <User className="w-4 h-4 mr-2" />
                Account Workspace
              </Link>
            ) : (
              <>
                <Link
                  to={APP_LOGIN_URL}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:bg-[#111827] border border-[#1F2937] rounded transition-colors"
                >
                  Log in
                </Link>
                <Link
                  to={APP_SIGNUP_URL}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex justify-center items-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#0EA5E9] rounded hover:bg-[#0284C7] transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
