import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const [cnpj, setCnpj] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [status, setStatus] = useState("Ativa");
  const [site, setSite] = useState("");
  const [dataRegistro, setDataRegistro] = useState("");
  const [erro, setErro] = useState("");
  const [erroData, setErroData] = useState("");
  const [erroCnpj, setErroCnpj] = useState("");

  const handleConfirmar = (e) => {
    e.preventDefault();

    if (!cnpj || !razaoSocial || !status || !site || !dataRegistro) {
      setErro("Todos os campos devem ser preenchidos.");
      return;
    }

    const cnpjValido = /^\d+$/;
    if (!cnpjValido.test(cnpj)) {
      setErroCnpj("O CNPJ deve conter apenas números.");
      return;
    } else {
      setErroCnpj("");
    }

    const hoje = new Date().toISOString().split("T")[0];
    if (dataRegistro >= hoje) {
      setErroData("A data deve ser anterior à atual.");
      return;
    }

    setErro("");
    setErroData("");
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[url('/path/to/fundo.jpg')] bg-cover bg-center">
      <h1 className="text-5xl m-10">Cadastro da Empresa</h1>
      <form onSubmit={handleConfirmar}>
        {erro && <p className="text-red-600">{erro}</p>}
        <div>
          <label className="block text-lg font-semibold">CNPJ:</label>
          <input
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className="w-full p-2 border border-black rounded mt-2"
            maxLength={14} // Para garantir que o CNPJ tenha no máximo 14 caracteres
          />
          {erroCnpj && <p className="text-red-600">{erroCnpj}</p>}
        </div>
        <div>
          <label className="block text-lg font-semibold">Razão Social:</label>
          <input
            type="text"
            value={razaoSocial}
            onChange={(e) => setRazaoSocial(e.target.value)}
            className="w-full p-2 border border-black rounded mt-2"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-2"
          >
            <option value="Ativa">Ativa</option>
            <option value="Inativa">Inativa</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-semibold">Site:</label>
          <input
            type="text"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            className="w-full p-2 border border-black rounded mt-2"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold">
            Data de Registro:
          </label>
          <input
            type="date"
            value={dataRegistro}
            onChange={(e) => setDataRegistro(e.target.value)}
            className="w-full p-2 border border-black rounded mt-2"
          />
          {erroData && <p className="text-red-600">{erroData}</p>}
        </div>
        <div className="mt-10 flex gap-1">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 hover:cursor-pointer"
          >
            Cadastrar
          </button>
          <Link to="/">
            <button className="bg-black text-white font-bold py-2 px-4 rounded mt-2 hover:cursor-pointer">
              Voltar
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
