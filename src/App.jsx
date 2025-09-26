import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashboardCliente from "./pages/DashboardCliente.jsx";
import DashboardProveedor from "./pages/DashboardProveedor.jsx";

function App() {
  // 🔹 Simulación de usuario logueado (en la práctica vendrá del backend o contexto global)
  const user = {
    isLoggedIn: false,  // cambiar a true para simular login
    roles: ["Cliente", "Proveedor"], // puede tener uno o varios
  };

  return (
    <Router>
      <Routes>
        {/* Público */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Privado: solo accesible si hay login */}
        {user.isLoggedIn && (
          <>
            {user.roles.includes("Cliente") && (
              <Route path="/dashboard-cliente" element={<DashboardCliente />} />
            )}
            {user.roles.includes("Proveedor") && (
              <Route path="/dashboard-proveedor" element={<DashboardProveedor />} />
            )}
          </>
        )}

        {/* Si no hay ruta válida */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
