import { useState } from "react";
import { Link } from "react-router-dom";


export default function Register() {
  const [roles, setRoles] = useState([]);

  const toggleRole = (role) => {
    setRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", { roles });
    // Aquí iría la llamada al backend para crear usuario con sus roles
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full border p-2 rounded"
            required
          />

          <div>
            <p className="font-semibold mb-2">Seleccioná tu rol:</p>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={roles.includes("Cliente")}
                onChange={() => toggleRole("Cliente")}
                className="mr-2"
              />
              Cliente
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={roles.includes("Proveedor")}
                onChange={() => toggleRole("Proveedor")}
                className="mr-2"
              />
              Proveedor
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
         <p className="text-sm text-center mt-4">
          ¿Tenés cuenta?{" "}
          <Link to="/login" className="text-blue-600">Ingresa</Link>
        </p>
      </div>
    </div>
  );
}
