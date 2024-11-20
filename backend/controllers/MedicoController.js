const knex = require('knex')(require('../knexfile'));

const MedicoController = {
  // Método para listar médicos
  async index(req, res) {
    const medicos = await knex('medicos');
    return res.json(medicos);
  },

  // Método para criar um médico
  async create(req, res) {
    const { nome, especialidade } = req.body;
    await knex('medicos').insert({ nome, especialidade });
    return res.status(201).json({ message: 'Médico cadastrado com sucesso!' });
  },

  // Método para atualizar um médico
  async update(req, res) {
    const { id } = req.params;
    const { nome, especialidade } = req.body;

    await knex('medicos').where({ id }).update({ nome, especialidade });
    return res.json({ message: 'Médico atualizado com sucesso!' });
  },

  // Método para deletar um médico
  async delete(req, res) {
    const { id } = req.params;
    await knex('medicos').where({ id }).del();
    return res.json({ message: 'Médico removido com sucesso!' });
  }
};

module.exports = MedicoController;
