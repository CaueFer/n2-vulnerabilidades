import { RowDataPacket } from "mysql2";

import { SignJWT } from "jose";

import {
  deleteUserDb,
  getUserDb,
  getUsersDb,
  loginUserDb,
  signupUserDb,
  updateUserDb,
  updateUserPasswordDb,
} from "../db/auth.db";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "secret-jwt"
);

export async function getUserService(id: number): Promise<unknown> {
  const query = await getUserDb(id);

  const [rows] = query;

  return rows[0];
}

export async function getUsersService(): Promise<RowDataPacket[]> {
  const query = await getUsersDb();

  const [rows] = query;

  return rows;
}

export async function loginUserService(
  email: string,
  senha: string
): Promise<{ token: string; user: unknown }> {
  const query = await loginUserDb(email, senha);
  const [rows] = query;

  const user = rows[0];

  if (!user) {
    throw new Error("Usuário não encontrado ou senha inválida");
  }

  const { id, email: dbEmail } = user;

  const jwt = await new SignJWT({ id, email: dbEmail })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .sign(JWT_SECRET);

  return {
    token: jwt,
    user,
  };
}

export async function signupUserService(
  nome: string,
  email: string,
  senha: string
): Promise<unknown> {
  const query = await signupUserDb(nome, email, senha);

  const [rows] = query;

  return rows[0];
}

export async function updateUserService(
  id: number,
  nome: string,
  email: string
): Promise<unknown> {
  const query = await updateUserDb(id, nome, email);

  const [rows] = query;

  return rows[0];
}

export async function updateUserPasswordService(
  usuario: any,
  novaSenha: string
): Promise<unknown> {
  const query = await updateUserPasswordDb(usuario.id, novaSenha);

  const [rows] = query;

  return rows[0];
}

export async function deleteUserService(id: number): Promise<unknown> {
  const query = await deleteUserDb(id);

  const [rows] = query;

  return rows[0];
}
