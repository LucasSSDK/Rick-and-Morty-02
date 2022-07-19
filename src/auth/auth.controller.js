const authService = require("./auth.service");
const bcrypt = require("bcryptjs")

const login = async (req, res) => {
    const {email, password } = req.body;

    const user = await authService.login(email);

    if(!user) {
        return res.status(400).send({ message: "Usuario não encontrado"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid) {
        return res.status(400).send({ message: "Senha invalida"});
    }
    res.send(user);
};

module.exports = { login };
