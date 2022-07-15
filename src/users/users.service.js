const User = require("./User");

const createUser = async (body) => await User.create(body);

const findByEmail = async (email) => await User.findOne({ email: email });

const findByUsername = async (username) => await User.findOne({ username: username });

module.exports = {
    createUser,
    findByEmail,
    findByUsername,
};