const mysql = require('mysql2');
require('dotenv').config();  // to load DB credentials from .env

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'AI_professor_1',
    password: process.env.DB_PASS || 'Andy2006!',
    database: process.env.DB_NAME || 'AI_professor',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();