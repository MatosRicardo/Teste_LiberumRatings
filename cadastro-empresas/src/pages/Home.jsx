import { Link } from "react-router-dom";
import backgroundImage from "../assets/fundo.jpg";

export default function Home() {
  const empresas = [
    {
      id: 1,
      cnpj: "45.990.181/0001-89",
      razaoSocial: "ROBERT BOSCH LIMITADA",
      status: "Ativa",
    },
    {
      id: 2,
      cnpj: "333.722.51/0062-789",
      razaoSocial: "IBM BRASIL",
      status: "Ativa",
    },
    {
      id: 3,
      cnpj: "43.996.693/0001-27",
      razaoSocial: "PPG INDUSTRIAL DO BRASIL LTDA	",
      status: "Ativa",
    },
    {
      id: 4,
      cnpj: "00.609.634/0001-46",
      razaoSocial: "CI&T SOFTWARE S.A.",
      status: "Ativa",
    },
    {
      id: 5,
      cnpj: "01.156.817/0001-75",
      razaoSocial: "CENTRO NACIONAL DE PEQUISA EM ENERGIA E MATERIAIS CNPEM",
      status: "Ativa",
    },
  ];

  return (
    <>
      <div
        className="flex flex-col justify-center items-center h-screen bg-[url('/path/to/fundo.jpg')] bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="text-7xl m-10">Lista de empresas cadastradas</h1>
        <Link to="/cadastro">
          <button className="hover:cursor-pointer bg-black text-white font-bold py-2 px-4 rounded">
            {" "}
            Adicionar uma empresa
          </button>
        </Link>
        <table className="table-auto w-300 border-separate border-spacing-0 mt-10">
          <thead className="bg-gray-400">
            <tr>
              <th className="px-4 py-2 text-left">CNPJ</th>
              <th className="px-4 py-2 text-left">Razão Social</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-300 border-b-black border-style-solid border-width-1">
            {empresas.map((empresa) => (
              <tr key={empresa.id} className="border-b hover:bg-gray-50 ">
                <td className="px-4 py-2"> {empresa.cnpj}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/empresas/${empresa.id}`}
                    className="text-black underline"
                  >
                    {empresa.razaoSocial}
                  </Link>
                </td>
                <td className="px-4 py-2 text-2xl">{empresa.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
