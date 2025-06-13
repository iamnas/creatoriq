import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthProvider";
import api from "../utils/api";

export default function AuthForm({ type }: { type: "login" | "signup" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

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
    try {
      const payload = type === "signup"
        ? { name, email, password }
        : { email, password };

      const res = await api.post<AuthResponse>(`/user/${type}`, payload);
      login(res.data.token);
      navigate("/generate");
    } catch (err: unknown) {
      if (axios.isAxiosError<ErrorResponse>(err)) {
        setError(err.response?.data?.message || "Something went wrong");
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-16 space-y-4 p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold text-center">{type === "login" ? "Login" : "Register"}</h2>
      {error && <p className="text-red-500">{error}</p>}

      {type === "signup" && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
