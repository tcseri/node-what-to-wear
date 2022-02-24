exports.knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "backendapp",
    password: "backendappqw34",
    database: "wear",
  },
  pool: { min: 0, max: 7 },
});
