import {
  deleteUserDb,
  getUserDb,
  getUsersDb,
  loginUserDb,
  signupUserDb,
  updateUserDb,
} from "../db/auth.db";

export async function getUserService(id: number): Promise<unknown> {
  const query = await getUserDb(id);
  const [rows] = query;

  return rows;
}

export async function getUsersService(): Promise<unknown> {
  const query = await getUsersDb();

  const [rows] = query;

  return rows;
}

export async function loginUserService(
  email: string,
  senha: string
): Promise<unknown> {
  const query = await loginUserDb(email, senha);

  const [rows] = query;

  return rows;
}

export async function signupUserService(
  nome: string,
  email: string,
  senha: string
): Promise<unknown> {
  const query = await signupUserDb(nome, email, senha);

  const [rows] = query;

  return rows;
}

export async function updateUserService(
  id: number,
  nome: string,
  email: string,
  senha: string
): Promise<unknown> {
  const query = await updateUserDb(id, nome, email, senha);

  const [rows] = query;

  return rows;
}

export async function deleteUserService(id: number): Promise<unknown> {
  const query = await deleteUserDb(id);

  const [rows] = query;

  return rows;
}
