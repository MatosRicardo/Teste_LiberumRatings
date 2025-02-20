# CRUD Simples com React, React Router e Tailwind CSS

Este projeto é um CRUD simples desenvolvido com React, Tailwind, React Router e UseState.

## Tecnologias Utilizadas

- React
- React Router
- Tailwind CSS
- useState

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/crud-react-tailwind.git
   cd crud-react-tailwind
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Instale o Tailwind CSS:
   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```
4. Inicie o projeto:
   ```bash
   npm run dev
   ```

## Funcionalidades do CRUD

- Criar um item
- Listar itens
- Atualizar um item
- Deletar um item

---

# API Cadastro de Empresas

Esta API permite o gerenciamento de um sistema de cadastro de empresas. Foi desenvolvida utilizando Node.js.

## Tecnologias Utilizadas

- Node.js
- Express
- Postman para testes

## Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-cadastro-empresas.git
cd api-cadastro-empresas
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
npm start
```

## Estrutura da Entidade Empresa

A entidade `Empresa` contém os seguintes campos:

- **id**: Identificador único
- **razao_social**: Nome da empresa
- **cnpj**: Número único do CNPJ
- **data_registro**: Data de registro da empresa
- **status**: Status ativo ou inativo
- **criado_em**: Data de criação do registro
- **atualizado_em**: Data da última atualização

## Rotas da API

- `GET /empresa` - Listar todas as empresas
- `GET /empresa/:id` - Obter detalhes de uma empresa específica
- `POST /empresa` - Criar uma nova empresa
- `PUT /empresa/:id` - Atualizar uma empresa existente
- `DELETE /empresa/:id` - Deletar uma empresa

## Validações e Erros

- O campo **cnpj** deve ser único e válido
- A **data_registro** deve ser uma data válida
- As requisições devem ser testadas via **Postman** ou ferramenta similar
