exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(apple) {
    apple.increments();

    apple
      .string("name", 128)
      .notNullable()
      .unique();
    // reference an integer that is an ID in table ROLES and call it ROLE_ID
    // always add an UNSIGNED because some tables need that
    apple
      .integer("role_id")
      .unsigned()
      .references("id")
      .inTable("roles")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {};
