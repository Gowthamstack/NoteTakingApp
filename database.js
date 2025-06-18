import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql
  .createPool({
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
  })
  .promise();

//Read data fromm the Database
export async function getNotes() {
  return pool.query("select * from notes");
}

//Read data with Specific id
export async function getId(id) {
  const [result] = await pool.query(`select * from notes where id= ?`, [id]);
  return result[0];
}

//Insert Records into Notes
export async function createNote(title, contents) {
  const [result] = await pool.query(
    `INSERT INTO NOTES (title,contents) VALUES (?,?)`,
    [title, contents]
  );
  const id = result.insertId;
  return getNotes(id);
}
