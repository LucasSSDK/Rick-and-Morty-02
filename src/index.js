require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectToDatabase = require('./database/database');

const userRoute = require('./users/users.route');

const personagensRoute = require('./characters/personagens.Route')

const port = process.env.PORT || 3001;

const swaggerRoute = require('./swagger/swagger.route');

const app = express();

const authRoute = require('./auth/auth.route');

app.use(express.json());

app.use(cors());

connectToDatabase();

app.use('/users', userRoute);

app.use('/api-docs', swaggerRoute);

app.use('/auth', authRoute);

app.use('/characters', personagensRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});