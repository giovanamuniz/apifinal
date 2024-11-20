/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.alterTable('hospitais', table => {
    table.string('cnpj').notNullable(); // Adiciona a coluna CNPJ
    table.string('phone').notNullable(); // Adiciona a coluna telefone
    table.string('postal_code').notNullable(); // Adiciona a coluna CEP
    table.string('city').notNullable(); // Adiciona a coluna cidade
    table.string('state').notNullable(); // Adiciona a coluna estado
    table.string('treatment').notNullable(); // Adiciona a coluna tratamento
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('hospitais', table => {
    table.dropColumn('cnpj');
    table.dropColumn('phone');
    table.dropColumn('postal_code');
    table.dropColumn('city');
    table.dropColumn('state');
    table.dropColumn('treatment');
  });
};
