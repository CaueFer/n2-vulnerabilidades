import { useState } from "react";
import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/api";

interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

function App() {
  const [user, setUser] = useState<Usuario | null>(null);

  const [email, setEmail] = useState(user?.email ?? "");
  const [password, setPassword] = useState(user?.email ?? "");

  const [novoNome, setNovoNome] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const [error, setError] = useState<string | null>("");

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`${API_URL}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Erro desconhecido");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.usuario) {
          setUser(data.usuario);
          setNovoEmail(data?.usuario?.email);
          setNovoNome(data?.usuario?.nome);

          console.log("Usuario logado", data.usuario);

          setError(null);
        }
      })
      .catch((error) => {
        console.error("Erro:", error.message);
        setError(error.message);
      })
      .finally(() => {
        setPassword("");
      });
  };

  const handleSubmitUpdateUsuario = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`${API_URL}/user`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: user?.id,
        email: novoEmail,
        nome: novoNome,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Erro desconhecido");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.usuario) {
          setUser(data.usuario);

          console.log("Usuario alterado", data.usuario);
          alert("Usuario atualizado!");

          setError(null);
        }
      })
      .catch((error) => {
        console.error("Erro:", error.message);
        setError(error.message);
      })
      .finally(() => {
        setNovoNome("");
        setNovoEmail("");
      });
  };

  const handleSubmitUpdateUsuarioSenha = (e: React.FormEvent) => {
    e.preventDefault();

    fetch(`${API_URL}/userPassword`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        novaSenha,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Erro desconhecido");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUser(null);
          setError(null);

          alert("Senha alterada, faca login novamente!");
        }
      })
      .catch((error) => {
        console.error("Erro:", error.message);
        setError(error.message);
      })
      .finally(() => {
        setNovaSenha("");
      });
  };

  const handleDeslogar = () => {
    Cookies.remove("usuario");
    setUser(null);
  };

  return (
    <div className="flex items-center justify-center min-w-screen min-h-screen bg-gray-100 text-gray-700">
      {user == null ? (
        <div className="w-full max-w-sm bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form
            onSubmit={handleSubmitLogin}
            className="space-y-4 text-gray-700"
          >
            <div>
              <label className="block text-sm font-medium ">Email</label>
              <input
                type="text"
                name="email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                type="text"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <span className="text-red-400 mb-2">{error}</span>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition cursor-pointer"
            >
              Entrar
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col gap-2 justify-items-center w-full max-w-sm p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Bem vindo {user.nome}
          </h2>

          {/* ATUALIZA EMAIL */}
          <form
            id="updateDadosForm"
            onSubmit={handleSubmitUpdateUsuario}
            className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <h3>Atualizar dados:</h3>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold"
              >
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                value={novoNome}
                onChange={(e) => setNovoNome(e?.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                E-mail:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={novoEmail}
                onChange={(e) => setNovoEmail(e?.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Alterar
            </button>
          </form>

          {/* ATUALIZA SENHA */}
          <form
            id="updateSenhaForm"
            onSubmit={handleSubmitUpdateUsuarioSenha}
            className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-md"
          >
            <h3>Atualizar senha:</h3>
            <div className="mb-4">
              <label
                htmlFor="senha"
                className="block text-gray-700 font-semibold"
              >
                Nova senha:
              </label>
              <input
                type="text"
                id="senha"
                name="senha"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setNovaSenha(e?.target.value)}
                value={novaSenha}
                placeholder="****"
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Alterar
            </button>
          </form>

          {/* DESLOGAR */}
          <button
            onClick={handleDeslogar}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
          >
            Sair
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
