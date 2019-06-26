exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("roles")
      .truncate() // this was .del() but we changed it to .truncate() because truncate() will reset the pk back to 1 in addition to deleting the data.
      // del() will delete the data but will not reset the pk back to 1
      .then(function() {
        // Inserts seed entries
        return knex("roles").insert([
          { name: "Student" },
          { name: "TA" },
          { name: "PM" }
        ]);
      })
  );
};
