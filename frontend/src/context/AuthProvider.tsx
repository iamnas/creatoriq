import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Step 1: Define context type
interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

// Step 2: Create context with default undefined value (will provide in provider)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Step 3: Custom hook to use auth
/* eslint-disable-next-line react-refresh/only-export-components */
export const useAuth = ()  => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// Step 4: Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
