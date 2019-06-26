// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/new.db3"
    },
    useNullAsDefault: true // needed for sqlite
    // if I want to specify what directory the migrations and seeds go into I would do the following
    // migrations: {
    //   directory: './data/migrations',
    // },
    // seeds: {
    //   directory: './data/seeds',
    // }
  }
  // the below code was originally in the file and was replaced with the above code from
  // the index.js file which was the knexConfig object
  // {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },

  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }
};
