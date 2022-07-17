const userService = require("./users.service")

const createUser = async (req, res) => {
   const {name, username, email, password, avatar} = req.body;

   if(!name ||  !username || !email || !password) {
    res.status(400).send({message: "Algum campo obrigatorio não foi preenchido"})
   }

   const foundUserByEmail = await userService.findByEmail(email);

   const foundUserByUsername = await userService.findByUsername(username);

   if (foundUserByEmail || foundUserByUsername) {
    return res.status(400).send({message: "Já existe um usuario cadastrado com esses dados. "});
   }



   const user = await userService.createUser(req.body)
   .catch((error) => console.log(error));

   if (!user) {
    return res.status(500).send({message: "Erro ao criar/ tente novamente mais tarde!"})
   }

   res.status(201).send(user);
};

const findAllUsers = async (req, res) => {
    const users = await userService.findAllUsers();

    if(users.length == 0) {
        return res.status(206).send({ message: "Não existem usuarios cadastrados"})
    }

    res.send(users)
}
module.exports = {
    createUser,
    findAllUsers
}