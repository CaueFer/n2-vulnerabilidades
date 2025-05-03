import mysql from "mysql2";

const sqlPool = mysql.createPool({
  host: "localhost",
  port: 5001,
  user: "mysql",
  password: "123456",
  database: "banco",
  ssl: { rejectUnauthorized: false },
  connectionLimit: 10,
});

const pool = sqlPool.promise();

export default pool;
