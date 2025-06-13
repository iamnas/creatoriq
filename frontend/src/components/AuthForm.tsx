// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router";
// import { useAuth } from "../context/AuthProvider";
// import api from "../utils/api";

// export default function AuthForm({ type }: { type: "login" | "signup" }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const { login } = useAuth();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   interface AuthResponse {
//     token: string;
//     user?: {
//       id: string;
//       email: string;
//       name: string;
//     };
//   }

//   interface ErrorResponse {
//     message?: string;
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const payload = type === "signup"
//         ? { name, email, password }
//         : { email, password };

//       const res = await api.post<AuthResponse>(`/user/${type}`, payload);
//       login(res.data.token);
//       navigate("/generate");
//     } catch (err: unknown) {
//       if (axios.isAxiosError<ErrorResponse>(err)) {
//         setError(err.response?.data?.message || "Something went wrong");
//       } else {
//         setError("Something went wrong");
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-16 space-y-4 p-6 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-bold text-center">{type === "login" ? "Login" : "Register"}</h2>
//       {error && <p className="text-red-500">{error}</p>}

//       {type === "signup" && (
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       )}

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full p-2 border rounded"
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="w-full p-2 border rounded"
//         required
//       />
//       <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
//         {type === "login" ? "Login" : "Register"}
//       </button>
//     </form>
//   );
// }



import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../context/AuthProvider";
import api from "../utils/api";
import { Eye, EyeOff, Mail, Lock, User, Instagram, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  interface AuthResponse {
    token: string;
    user?: {
      id: string;
      email: string;
      name: string;
    };
  }

  interface ErrorResponse {
    message?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const payload = type === "signup"
        ? { name, email, password }
        : { email, password };

      const res = await api.post<AuthResponse>(`/user/${type}`, payload);
      
      setSuccess(type === "signup" ? "Account created successfully!" : "Login successful!");
      
      // Small delay to show success message
      setTimeout(() => {
        login(res.data.token);
        navigate("/generate");
      }, 1000);
      
    } catch (err: unknown) {
      if (axios.isAxiosError<ErrorResponse>(err)) {
        setError(err.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isSignup = type === "signup";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-4 py-8">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
            <Instagram className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            ContentCraft
          </h1>
          <p className="text-gray-600">
            {isSignup ? "Create your account to get started" : "Welcome back! Please sign in"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error/Success Messages */}
            {error && (
              <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{error}</span>
              </div>
            )}
            
            {success && (
              <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 animate-in slide-in-from-top-2 duration-300">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{success}</span>
              </div>
            )}

            {/* Name Field (Signup only) */}
            {isSignup && (
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white placeholder-gray-500"
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {isSignup && (
                <p className="text-xs text-gray-500 mt-1">
                  Password should be at least 8 characters long
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{isSignup ? "Creating Account..." : "Signing In..."}</span>
                </div>
              ) : (
                <span>{isSignup ? "Create Account" : "Sign In"}</span>
              )}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  {isSignup ? "Already have an account?" : "Don't have an account?"}
                </span>
              </div>
            </div>

            {/* Switch Auth Mode */}
            <div className="text-center">
              <Link
                to={isSignup ? "/login" : "/register"}
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 hover:underline"
              >
                {isSignup ? "Sign in instead" : "Create a new account"}
              </Link>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>© 2025 ContentCraft. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}