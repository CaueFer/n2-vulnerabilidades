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
    FROM usuario
    WHERE id = ?
    `,
    [
      id
    ]
  );

  return query;
}

export async function getUsersDb(): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    `
    SELECT
      nome,
      email
    FROM usuario
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
    from usuario
    where 1 = 1
    and email = ?
    and senha = ?
    `,
    [
      email,
      senha
    ]
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
    INSERT INTO usuario (nome, email, senha)
    VALUES (?, ?, ?)
    `,
    [
      nome,
        email,
          senha
    ]
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
    UPDATE usuario 
    SET nome = ?, email = ?, senha = ?
    where id = ?
    `,
    [
      nome,
        email,
          senha,  
            id
    ]
  );

  return query;
}

export async function deleteUserDb(
  id: number
): Promise<[QueryResult, FieldPacket[]]> {
  const query = await pool.query(
    ` 
    DELETE from usuario where id = ?
    `,
    [
      id
    ]
  );

  return query;
}
