import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const empresas = [
  {
    id: 1,
    cnpj: "45.990.181/0001-89",
    razaoSocial: "ROBERT BOSCH LIMITADA",
    status: "Ativa",
    site: "https://www.bosch.com.br",
  },
  {
    id: 2,
    cnpj: "333.722.51/0062-789",
    razaoSocial: "IBM BRASIL",
    status: "Ativa",
    site: "https://www.ibm.com/br-pt",
  },
  {
    id: 3,
    cnpj: "43.996.693/0001-27",
    razaoSocial: "PPG INDUSTRIAL DO BRASIL LTDA	",
    status: "Ativa",
    site: "https://www.ppg.com/en-US/about-ppg",
  },
  {
    id: 4,
    cnpj: "00.609.634/0001-46",
    razaoSocial: "CI&T SOFTWARE S.A.",
    status: "Ativa",
    site: "https://ciandt.com/br/",
  },
  {
    id: 5,
    cnpj: "01.156.817/0001-75",
    razaoSocial: "CENTRO NACIONAL DE PEQUISA EM ENERGIA E MATERIAIS CNPEM",
    status: "Ativa",
    site: "https://cnpem.br",
  },
];

// SIMULAÇÃO DE REMOÇÃO, VISTO QUE NÃO INTEGREI AO BACKEND
const handleRemover = () => {
  if (window.confirm("Tem certeza que deseja remover esta empresa?")) {
    alert("Empresa removida com sucesso!");
  }
};

export default function Empresas() {
  let { id } = useParams();
  let empresa = empresas.find((empresa) => empresa.id === parseInt(id));

  if (!empresa) {
    return <div>Empresa não encontrada</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl m-10">Detalhes da Empresa</h1>
      <h2>
        <strong>Nome: </strong>
        {empresa.razaoSocial}
      </h2>
      <p>
        <strong>CNPJ:</strong> {empresa.cnpj}
      </p>
      <p>
        <strong>Status:</strong> {empresa.status}
      </p>
      <button className="hover:cursor-pointer bg-black text-white font-bold py-2 px-4 rounded mt-2">
        <a href={empresa.site} target="_blank">
          Visitar o site da empresa
        </a>
      </button>
      <div>
        <Link to="/">
          <button className="hover:cursor-pointer bg-black text-white font-bold py-2 px-4 rounded mt-2">
            Voltar para a lista de empresas
          </button>
        </Link>
      </div>
      <div className="mt-10 flex gap-1">
        <Link to={`/cadastro?id=${empresa.id}`}>
          <button className="hover:cursor-pointer bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2">
            Editar
          </button>
        </Link>
        <Link to="/">
          <button
            onClick={handleRemover}
            className="hover:cursor-pointer bg-red-600 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Excluir
          </button>
        </Link>
      </div>
    </div>
  );
}
