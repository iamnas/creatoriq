import { type ReactNode } from "react";

import { Routes, Route, Navigate, BrowserRouter } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Generate from "./pages/Generate.tsx";
import { useAuth } from "./context/AuthProvider";
import Ideas from "./pages/Ideas.tsx";
import Analytics from "./pages/Analytics.tsx";


function ProtectedRoute({ children }: { children: ReactNode }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
}

function App() {

  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-4 bg-gray-100">
        <a href="/generate">Generate Ideas</a>
        <a href="/ideas">My Ideas</a>
        <a href="/analytics">Analytics</a>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/generate" />} />

        <Route
          path="/generate"
          element={
            <ProtectedRoute>
              <Generate />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ideas"
          element={
            <ProtectedRoute>
              <Ideas />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
