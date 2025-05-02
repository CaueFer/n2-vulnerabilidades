import mysql from "mysql2";

const sqlPool = mysql.createPool({
  host: "localhost",
  port: 5001,
  user: "mysql",
  password: "123",
  database: "banco",
});

const pool = sqlPool.promise();

export default pool;
