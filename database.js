var mysql = require('mysql');
var dotenv = require("dotenv");
const express = require("express");

const app = express();

dotenv.config({ path: './.env'});

var conn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    // port: process.env.PORT,
    connectionLimit: 10
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});

const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  connectionLimit: 10
})

pool.query('SELECT * FROM encourage_me.messages', (err, res)=>{
  if (err) {
      return console.log(err)
  }
  return console.log(res)
  res.json()
})


app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>")
});

app.listen(5000, () => {
  console.log("Server started on Port 5000")
})
module.exports = conn;