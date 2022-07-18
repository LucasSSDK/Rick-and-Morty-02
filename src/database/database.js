const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    .then(() => console.log('MongoDb conectado com sucesso')) //quando conectar
    .catch(
      (error) => console.log(`error ao conectar com MongoDb, erro: ${error}`), //erro caso não conectar
    );
};

module.exports = connectToDatabase;
