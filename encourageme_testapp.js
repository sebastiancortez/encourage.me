const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './.env'});

const app = express();

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
})


app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
});

app.listen(5001, () => {
    console.log("Server started on Port 5001")
})