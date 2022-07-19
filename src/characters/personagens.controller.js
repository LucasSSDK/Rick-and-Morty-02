const PersonService = require('./personagens.Service');
const mongoose = require('mongoose');

const findAllPersonController = async (req, res) => {
  const allPerson = await PersonService.findAllPerson();
  if (allPerson.length == 0) {
    return res
      .status(404)
      .send({ message: 'Esse personagem não esta cadastrado' });
  }
  res.send(allPerson);
};

const findByIdPersonController = async (req, res) => {
  const id = parseInt(req.params, id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'ID invalido',
    });
  }

  const personagem = await PersonService.findByIdPerson(id);

  if (!personagem) {
    return res.status(206);
  }

  res.send();
};

const createPerson = async (req, res) => {
  const personagem = req.body;

  if (!personagem.nome || !personagem.url) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os campos para fazer a edição desse personagem!',
    });
  }

  const newPerson = await PersonService.createPerson(personagem);

  res.send(newPerson);
};

const updatePerson = async (req, res) => {
  const id = parseInt(req.params.id);
  const updatedPerson = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'ID invalido',
    });
  }

  const upPerson = await PersonService.updatePerson(id, updatedPerson);
};

const deletePerson = async (req, res) => {
  const id = parseInt(req.params.id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'ID invalido',
    });
  }
  const personagem = await PersonService.findByIdPerson(id);

  if (!personagem) {
    return res.status(206);
  }
};

const searchPersonController = async (req, res) => {
  try {
    const { message } = req.body;

    const personagens = await PersonService.searchPersonService(message);

    if (personagens.length === 0) {
      return res
        .status(400)
        .send({ message: 'Não foi adicionado personagem com esse nome' });
    }

    return res.send({
      personagens: personagens.map((personagens) => ({
        id: personagens._id,
        nome: personagens.nome.length,
        url: personagens.url.length
      })),
    });
  } catch (err) {
    res
      .status(500)
      .send({ message: 'Erro ao criar/ tente novamente mais tarde!' });
  }
};

module.exports = {
  findAllPersonController,
  findByIdPersonController,
  createPerson,
  updatePerson,
  deletePerson,
  searchPersonController,
};
