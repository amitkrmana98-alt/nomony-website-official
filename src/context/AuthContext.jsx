import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    if (!base64Url) return null;
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error('Failed to parse Google OAuth JWT payload:', e);
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('nomony_user');
    return saved ? JSON.parse(saved) : null;
  });

  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '1082823023022-nomony-google-oauth-client.apps.googleusercontent.com';

  useEffect(() => {
    if (user) {
      localStorage.setItem('nomony_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('nomony_user');
    }
  }, [user]);

  const loginWithGoogleCredential = (credentialToken) => {
    const payload = parseJwt(credentialToken);
    if (!payload || !payload.email) {
      throw new Error('Invalid Google credential payload.');
    }
    const userProfile = {
      id: payload.sub || 'usr_g_' + Date.now(),
      name: payload.name || payload.given_name || payload.email.split('@')[0],
      email: payload.email,
      picture: payload.picture || null,
      provider: 'Google OAuth',
      plan: 'STARTER',
      buildsRemaining: 15,
      token: credentialToken
    };
    setUser(userProfile);
    return userProfile;
  };

  const loginWithGoogle = (customProfile = null) => {
    if (typeof customProfile === 'string') {
      return loginWithGoogleCredential(customProfile);
    }
    if (customProfile && typeof customProfile === 'object') {
      const userProfile = {
        id: customProfile.sub || customProfile.id || 'usr_g_' + Date.now(),
        name: customProfile.name || customProfile.email?.split('@')[0] || 'Authenticated User',
        email: customProfile.email || 'user@nomony.ai',
        picture: customProfile.picture || null,
        provider: 'Google OAuth',
        plan: 'STARTER',
        buildsRemaining: 15
      };
      setUser(userProfile);
      return userProfile;
    }
    throw new Error('Please authenticate using the official Google Sign-In button.');
  };

  const loginWithEmail = (email) => {
    const userProfile = {
      id: 'usr_e_' + Date.now(),
      name: email.split('@')[0],
      email: email,
      provider: 'Email Code',
      plan: 'FREE',
      buildsRemaining: 2
    };
    setUser(userProfile);
    return userProfile;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        googleClientId,
        loginWithGoogleCredential,
        loginWithGoogle,
        loginWithEmail,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
