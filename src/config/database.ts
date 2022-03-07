import Knex from "knex"

const env = process.env;

export const knex = Knex({
  client: "pg",
  connection: {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
  },
  pool: { min: 0, max: 7 },
});
