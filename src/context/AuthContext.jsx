import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('nomony_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('nomony_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('nomony_user');
    }
  }, [user]);

  const loginWithGoogle = () => {
    const userProfile = {
      id: 'usr_g_' + Date.now(),
      name: 'Developer User',
      email: 'dev@nomony.ai',
      provider: 'Google',
      plan: 'STARTER',
      buildsRemaining: 15
    };
    setUser(userProfile);
    return userProfile;
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
    <AuthContext.Provider value={{ user, loginWithGoogle, loginWithEmail, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
