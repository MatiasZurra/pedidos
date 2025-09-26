import { Link } from "react-router-dom";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí validás credenciales con backend
    console.log("Login realizado");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white shadow-lg rounded-xl p-6 w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="border p-2 rounded w-full"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          ¿No tenés cuenta?{" "}
          <Link to="/register" className="text-blue-600">Registrate</Link>
        </p>
      </div>
    </div>
  );
}
