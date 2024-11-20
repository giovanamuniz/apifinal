const knex = require('knex')(require('../knexfile'));

const HospitalController = {
  // Método para listar hospitais
  async index(req, res) {
    const hospitais = await knex('hospitais');
    return res.json(hospitais);
  },

  // Método para criar um hospital
  async create(req, res) {
    const { nome, endereco } = req.body;
    await knex('hospitais').insert({ nome, endereco });
    return res.status(201).json({ message: 'Hospital cadastrado com sucesso!' });
  },

  // Método para atualizar um hospital
  async update(req, res) {
    const { id } = req.params;
    const { nome, endereco } = req.body;

    await knex('hospitais').where({ id }).update({ nome, endereco });
    return res.json({ message: 'Hospital atualizado com sucesso!' });
  },

  // Método para deletar um hospital
  async delete(req, res) {
    const { id } = req.params;
    await knex('hospitais').where({ id }).del();
    return res.json({ message: 'Hospital removido com sucesso!' });
  }
};

module.exports = HospitalController;
