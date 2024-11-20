const knex = require('knex')(require('../knexfile'));

const PacienteController = {
  // Método para listar pacientes
  async index(req, res) {
    try {
      const pacientes = await knex('pacientes');
      return res.json(pacientes);
    } catch (error) {
      console.error('Erro ao listar pacientes:', error);
      return res.status(500).json({ message: 'Erro ao listar pacientes.' });
    }
  },

  // Método para criar um paciente
  async create(req, res) {
    try {
      const {
        name,
        cpf,
        gender,
        birthdate,
        phone,
        guardian,
        guardianphone,
        address,
        postalCode,
        city,
        state,
      } = req.body;

      // Verifica se os campos obrigatórios estão preenchidos
      if (!name || !cpf || !gender || !birthdate) {
        return res.status(400).json({ message: 'Campos obrigatórios não preenchidos.' });
      }

      // Insere o paciente no banco de dados
      await knex('pacientes').insert({
        nome: name,
        cpf,
        genero: gender,
        data_nascimento: birthdate,
        telefone: phone,
        responsavel: guardian,
        telefone_responsavel: guardianphone,
        endereco: address,
        cep: postalCode,
        cidade: city,
        estado: state,
      });

      return res.status(201).json({ message: 'Paciente cadastrado com sucesso!' });
    } catch (error) {
      console.error('Erro ao cadastrar paciente:', error);
      return res.status(500).json({ message: 'Erro ao cadastrar paciente.' });
    }
  },

  // Método para atualizar um paciente
  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        name,
        cpf,
        gender,
        birthdate,
        phone,
        guardian,
        guardianphone,
        address,
        postalCode,
        city,
        state,
      } = req.body;

      await knex('pacientes')
        .where({ id })
        .update({
          nome: name,
          cpf,
          genero: gender,
          data_nascimento: birthdate,
          telefone: phone,
          responsavel: guardian,
          telefone_responsavel: guardianphone,
          endereco: address,
          cep: postalCode,
          cidade: city,
          estado: state,
        });

      return res.json({ message: 'Paciente atualizado com sucesso!' });
    } catch (error) {
      console.error('Erro ao atualizar paciente:', error);
      return res.status(500).json({ message: 'Erro ao atualizar paciente.' });
    }
  },

  // Método para deletar um paciente
  async delete(req, res) {
    try {
      const { id } = req.params;
      await knex('pacientes').where({ id }).del();
      return res.json({ message: 'Paciente removido com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar paciente:', error);
      return res.status(500).json({ message: 'Erro ao remover paciente.' });
    }
  },
};

module.exports = PacienteController;
