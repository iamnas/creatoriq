import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Step 1: Define context type
interface AuthContextType {
  token: string | null;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

// Step 2: Create context with default undefined value (will provide in provider)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Step 3: Custom hook to use auth
/* eslint-disable-next-line react-refresh/only-export-components */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

// Step 4: Provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state on app start
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          // Optional: Verify token is still valid by making a test API call
          // You can uncomment and modify this based on your API endpoint
          /*
          try {
            await axios.get('/api/verify-token', {
              headers: { Authorization: `Bearer ${storedToken}` }
            });
            setToken(storedToken);
          } catch (error) {
            // Token is invalid, remove it
            localStorage.removeItem("token");
            setToken(null);
          }
          */
          
          // For now, trust the stored token
          setToken(storedToken);
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        // Clear any potentially corrupted token
        localStorage.removeItem("token");
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Set axios default headers when token changes
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
    // Optional: Make API call to invalidate token on server
    // axios.post('/api/logout').catch(() => {});
  };

  return (
    <AuthContext.Provider value={{ token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};







// import { createContext, useContext, useState, useEffect } from "react";
// import axios from "axios";

// // Step 1: Define context type
// interface AuthContextType {
//   token: string | null;
//   login: (token: string) => void;
//   logout: () => void;
// }

// // Step 2: Create context with default undefined value (will provide in provider)
// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // Step 3: Custom hook to use auth
// /* eslint-disable-next-line react-refresh/only-export-components */
// export const useAuth = ()  => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within AuthProvider");
//   return context;
// };

// // Step 4: Provider
// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     } else {
//       delete axios.defaults.headers.common["Authorization"];
//     }
//   }, [token]);

//   const login = (newToken: string) => {
//     localStorage.setItem("token", newToken);
//     setToken(newToken);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider value={{ token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };