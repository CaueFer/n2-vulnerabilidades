import { FieldPacket, QueryResult } from "mysql2";

import pool from "../db";

export async function getUserDb(
  id: number
): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    `
    SELECT
      nome,
      email
    FROM user
    WHERE id = ${id}
    `,
    [id]
  );

  return query;
}

export async function getUsersDb(): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    `
    SELECT
      nome,
      email
    FROM user
    `
  );

  return query;
}

export async function loginUserDb(
  email: string,
  senha: string
): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    `
    SELECT
      nome,
      email
    from user
    where 1 = 1
    and email = ${email}
    and senha = ${senha}
    `
  );

  return query;
}

export async function signupUserDb(
  nome: string,
  email: string,
  senha: string
): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    ` 
    INSERT INTO user (nome, email, senha)
    VALUES (${nome}, ${email}, ${senha})
    `
  );

  return query;
}

export async function updateUserDb(
  id: number,
  nome: string,
  email: string,
  senha: string
): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    ` 
    UPDATE user 
    SET nome = ${nome}, email = ${email}, senha = ${senha}
    where id = ${id}
    `
  );

  return query;
}

export async function deleteUserDb(
  id: number
): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    ` 
    DELETE from user where id = ${id}
    `
  );

  return query;
}
