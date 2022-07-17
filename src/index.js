require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectToDatabase = require('./database/database');

const userRoute = require("./users/users.route");


const port = process.env.PORT || 3001;

const swaggerRoute = require("./swagger/swagger.route")
;

const app = express();

app.use(express.json());

app.use(cors());

connectToDatabase();

app.use("/users", userRoute);

app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
