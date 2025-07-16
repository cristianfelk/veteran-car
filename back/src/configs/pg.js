const { Pool } = require('pg')

const pool = new Pool ({
    user: 'admin',
    host: 'localhost',
    database: 'VETERAN_CAR',
    password: 'admin',
    port: 5434
})

module.exports = { query: (text , params) => pool.query(text, params) }