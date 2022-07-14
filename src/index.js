require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectToDatabase = require('./database/database');

const port = process.env.PORT || 3001;

// const swaggerRoute = require(//rota do swagger)
// ;

const app = express();

app.use(express.json());

app.use(cors());

connectToDatabase();

// app.use('/api');

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
