import React, { createContext, useContext, useState } from 'react';
import useToken from '../services/useToken';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { token, setToken, removeToken } = useToken();
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await fetch(`${import.meta.env.SGG_API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: username,
            password: password
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to log in.");
    }

    const data = await response.json();
    // TODO: implement "remember me" functionality
    // TODO: implement refresh token logic
    setToken(data.access_token);
    return data;
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  const value = {
    token,
    user,
    login,
    logout,
    isAuthenticated: !!token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}