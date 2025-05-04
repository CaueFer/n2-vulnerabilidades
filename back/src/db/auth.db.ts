import { FieldPacket, QueryResult, RowDataPacket } from "mysql2";

import pool from "../db";

export async function getUserDb(
  id: number
): Promise<[RowDataPacket[], FieldPacket[]]> {
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

  return query as [RowDataPacket[], FieldPacket[]];
}

export async function getUsersDb(): Promise<[RowDataPacket[], FieldPacket[]]> {
  const query = await pool.query(
    `
    SELECT
      nome,
      email
    FROM usuario
    `
  );

  return query as [RowDataPacket[], FieldPacket[]];
}

export async function loginUserDb(
  email: string,
  senha: string
): Promise<[RowDataPacket[], FieldPacket[]]> {
  const query = await pool.query(
    `
    SELECT
      id,
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

  return query as [RowDataPacket[], FieldPacket[]];
}

export async function signupUserDb(
  nome: string,
  email: string,
  senha: string
): Promise<[RowDataPacket[], FieldPacket[]]> {
  const query1 = await pool.query(
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

  const query2 = await pool.query(
    ` 
    SELECT nome, email FROM usuario WHERE email = '${email}';
    `
  );

  return query2 as [RowDataPacket[], FieldPacket[]];
}

export async function updateUserDb(
  id: number,
  nome: string,
  email: string
): Promise<[RowDataPacket[], FieldPacket[]]> {
  const query1 = await pool.query(
    ` 
    UPDATE usuario 
    SET nome = ?, email = ?
    where id = ?
    `,
    [
      nome,
      email,  
      id
    ]
  );

  const query2 = await pool.query(
    ` 
    SELECT id, nome, email 
    FROM usuario
    where id = ?;
    `,
    [ 
      id
    ]
  );

  return query2 as [RowDataPacket[], FieldPacket[]];
}

export async function updateUserPasswordDb(
  id: number,
  novaSenha: string
): Promise<[RowDataPacket[], FieldPacket[]]> {
  const query = await pool.query(
    ` 
    UPDATE usuario
    SET senha = ?
    where id = ?
    `,
    [
      novaSenha,
      id
    ]
  );

  const query2 = await pool.query(
    ` 
    SELECT id, nome, email 
    FROM usuario
    where id =?
    `,
    [
      id
    ]
  );

  return query2 as [RowDataPacket[], FieldPacket[]];
}

export async function deleteUserDb(
  id: number
): Promise<[RowDataPacket[], FieldPacket[]]> {
  const query = await pool.query(
    ` 
    DELETE from usuario where id = ?
    `,
    [
      id
    ]
  );

  return query as [RowDataPacket[], FieldPacket[]];
}
