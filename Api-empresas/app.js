const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let empresas = [
  {
    id: 1,
    razaoSocial: "ROBERT BOSCH LIMITADA",
    cnpj: "45990181000189",
    dataRegistro: "2025-02-20",
    status: "Ativa",
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  },
  {
    id: 2,
    razaoSocial: "IBM BRASIL - INDUSTRIA MAQUINA E SERVIÇO LTDA",
    cnpj: "33372251006278",
    dataRegistro: "2025-02-20",
    status: "Ativa",
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  },
];

app.get("/empresa", (req, res) => {
  res.json(empresas);
});

app.get("/empresa/:id", (req, res) => {
  const id = Number(req.params.id);
  const empresa = empresas.find((emp) => emp.id === id);

  if (!empresa) {
    return res.status(404).json({ message: "Empresa não identificada" });
  }

  res.json(empresa);
});

app.post("/empresa", (req, res) => {
  const { razaoSocial, cnpj, dataRegistro, status } = req.body;

  if (!razaoSocial || !cnpj || !dataRegistro || !status) {
    return res
      .status(400)
      .json({ message: "É necessário preencher todos os campos" });
  }

  const novaEmpresa = {
    id: empresas.length + 1,
    razaoSocial,
    cnpj,
    dataRegistro,
    status,
    criadoEm: new Date().toISOString(),
    atualizadoEm: new Date().toISOString(),
  };

  empresas.push(novaEmpresa);
  res.status(201).json(novaEmpresa);
});

app.put("/empresa/:id", (req, res) => {
  const id = Number(req.params.id);
  const empresa = empresas.find((emp) => emp.id === id);

  if (!empresa) {
    return res.status(404).json({ message: "Empresa não identificada" });
  }

  empresa.razaoSocial = req.body.razaoSocial || empresa.razaoSocial;
  empresa.cnpj = req.body.cnpj || empresa.cnpj;
  empresa.dataRegistro = req.body.dataRegistro || empresa.dataRegistro;
  empresa.status = req.body.status || empresa.status;
  empresa.atualizadoEm = new Date().toISOString();

  res.json(empresa);
});

app.delete("/empresa/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = empresas.findIndex((emp) => emp.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Empresa não identificada" });
  }

  empresas.splice(index, 1);
  res.json({ message: "Empresa deletada" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
