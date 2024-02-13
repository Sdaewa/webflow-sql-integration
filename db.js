require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports.query = (text, params, callback) => {
  return pool.query(text, params, callback);
};
