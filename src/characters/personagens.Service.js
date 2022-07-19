const Person = require('./Personagens');

const findAllPerson = async (req, res) => {
  const Personagens = await Person.find();
  return Personagens;
};

const findByIdPerson = async (id) => {
  return await Person.findById(id);
};

const searchPersonService = (message) =>
  Person.find({
    message: { $regex: `${message || ''}`, $options: 'i' },
  }).populate('user');

const createPerson = async (newPerson) => {
  await Person.create(newPerson);
};

const updatePerson = async (id, editPerson) =>
  await Person.find(id, editPerson).setOptions({
    returnOriginal: false,
  });

const deletePerson = async (id) => await Person.findByIdAndDelete(id);

module.exports = {
  findAllPerson,
  findByIdPerson,
  createPerson,
  deletePerson,
  updatePerson,
  searchPersonService,
};
