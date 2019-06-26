// new changes to the database schema
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", function(banana) {
    // make a primary-key called id, auto-increments, integer
    banana.increments();

    // make a varchar called name, 128 characters, unique, not null
    banana
      .string("name", 128)
      .notNullable()
      .unique();

    banana.integer("age").notNullable();
  });
};
// how to undo the changes to the schema
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};
