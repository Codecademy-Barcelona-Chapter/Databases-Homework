const express = require("express");
const { Pool } = require("pg");
const app = express();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "",
  port: 5432,
});
app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/customers", (req, res) => {
  pool.query("SELECT * FROM customers", (error, result) => {
    res.json(result.rows);
  });
});
app.get("/suppliers", (req, res) => {
  pool.query("SELECT * FROM suppliers", (error, result) => {
    res.json(result.rows);
  });
});
app.get("/products", (req, res) => {
  pool.query("SELECT * FROM products", (error, result) => {
    res.json(result.rows);
  });
});
app.listen(3000, () =>
  console.log("Server is up and running at http://127.0.0.1:3000")
);
