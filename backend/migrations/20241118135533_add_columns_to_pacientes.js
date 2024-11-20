/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('pacientes', (table) => {
    table.string('cpf').notNullable().unique(); // CPF do paciente
    table.string('genero').notNullable(); // Gênero do paciente
    table.date('data_nascimento').notNullable(); // Data de nascimento
    table.string('telefone'); // Telefone do paciente
    table.string('responsavel'); // Nome do responsável (opcional)
    table.string('telefone_responsavel'); // Telefone do responsável (opcional)
    table.string('endereco'); // Endereço
    table.string('cep'); // CEP
    table.string('cidade'); // Cidade
    table.string('estado'); // Estado
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('pacientes', (table) => {
    table.dropColumns(
      'cpf',
      'genero',
      'data_nascimento',
      'telefone',
      'responsavel',
      'telefone_responsavel',
      'endereco',
      'cep',
      'cidade',
      'estado'
    );
  });
};
