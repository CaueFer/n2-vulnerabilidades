import mysql from "mysql2";

const sqlPool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "n2seguranca",
});

const pool = sqlPool.promise();

export default pool;
