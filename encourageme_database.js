const {createPool} = require("mysql")

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    connectionLimit: 10
})

pool.query('SELECT * FROM encourage_me.messages', (err, res)=>{
    if (err) {
        return console.log(err)
    }
    return console.log(res)
})