const express = require ('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', apiRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('API de produtos está funcionando! Acesse /api/products para ver os produtos.');
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});