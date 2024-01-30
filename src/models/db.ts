import mysql from 'mysql2/promise';

// Create a connection pool to the MySQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', //  MySQL username
  password: 'root', // MySQL password
  database: 'starbucks',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
