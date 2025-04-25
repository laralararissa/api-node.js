# Aplicação Web com API Node.js

Este projeto consiste em uma aplicação web simples que consome dados de uma API implementada em Node.js. A aplicação exibe um catálogo de produtos obtidos do backend.

## Estrutura do Projeto

O projeto está dividido em duas partes:

- **Backend**: API RESTful em Node.js com Express
- **Frontend**: Interface web em HTML, CSS e JavaScript puro

## Funcionalidades

- Exibição de produtos com detalhes (nome, preço, categoria, descrição)
- Filtro de produtos por categoria
- Tratamento de erros e estado de carregamento
- Indicação de disponibilidade de estoque

## Tecnologias Utilizadas

### Backend
- Node.js
- Express
- CORS

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (para ícones)

## Como Executar

### Pré-requisitos
- Node.js (v14 ou superior)
- npm (v6 ou superior)

### Instalação e Execução

1. Clone este repositório:
   ```
   git clone https://github.com/seu-usuario/api-project.git
   cd api-project
   ```

2. Configure e inicie o backend:
   ```
   cd backend
   npm install
   npm start
   ```
   O servidor backend estará rodando em http://localhost:3000

3. Abra o frontend:
   - Abra o arquivo `frontend/index.html` em seu navegador
   - Ou use uma extensão como "Live Server" no VS Code para iniciar um servidor local

## Endpoints da API

- `GET /api/products` - Retorna todos os produtos
- `GET /api/products/:id` - Retorna um produto específico pelo ID
- `GET /api/products/category/:category` - Retorna produtos filtrados por categoria

## Screenshots

![Screenshot da aplicação](https://via.placeholder.com/800x400?text=Screenshot+da+Aplicação)

## Recursos Adicionais

- API completamente RESTful
- Design responsivo
- Feedback visual para ações do usuário
- Tratamento de erros

## Melhorias Futuras

- Adicionar mais endpoints (POST, PUT, DELETE)
- Implementar paginação
- Adicionar sistema de autenticação
- Conectar a um banco de dados real