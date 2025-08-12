import React, { createContext, useContext, useState } from 'react';

export const ROLES = {
  SUPER_ADMIN: 'super',
  FARMER_ADMIN: 'farmer',
  PRODUCT_ADMIN: 'product',
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {name, role}

  const login = (role) => {
    // In real app, authenticate
    setUser({ name: 'Demo', role });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);