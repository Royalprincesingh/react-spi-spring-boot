import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { ensureStorageInitialized, loadStorage, saveStorage } from '../utils/storage.js';
import { createSeedData } from '../utils/seed.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [state, setState] = useState(() => ensureStorageInitialized(createSeedData));

  useEffect(() => {
    const data = loadStorage();
    if (data) setState(data);
  }, []);

  const login = (email, password) => {
    const { admins } = loadStorage();
    const user = admins.find((a) => a.email === email && a.password === password);
    if (!user) throw new Error('Invalid credentials');
    const next = { ...loadStorage(), currentUser: { id: user.id, name: user.name, role: user.role, email: user.email } };
    saveStorage(next);
    setState(next);
  };

  const logout = () => {
    const next = { ...loadStorage(), currentUser: null };
    saveStorage(next);
    setState(next);
  };

  const value = useMemo(() => ({
    data: state,
    currentUser: state?.currentUser,
    login,
    logout,
    setData: (updater) => {
      const next = typeof updater === 'function' ? updater(loadStorage() || {}) : updater;
      saveStorage(next);
      setState(next);
    },
  }), [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}