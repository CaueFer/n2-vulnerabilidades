import { Request, Response } from "express";
import {
  getUserService,
  getUsersService,
  loginUserService,
  signupUserService,
} from "../service/auth.service";

export async function getUserController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.query;

  if (id == null) res.status(401).send({ message: "Id invalido1f" });

  const user = await getUserService(Number(id));

  if (user == null)
    res.status(404).send({ message: "Usuario nao encontrado!" });

  res.status(200).send({ user });
}

export async function getUsersController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const newUser = await getUsersService();

    if (newUser == null)
      res.status(404).json({ message: "Nenhum usuario encontrado" });

    res.status(200).json({ newUser });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function loginUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, senha } = req.body;

    if (!email || typeof email !== "string" || email.trim() === "") {
      res
        .status(400)
        .json({ message: "Email é obrigatório e deve ser uma string válida" });
    }

    if (!senha || typeof senha !== "string" || senha.trim() === "") {
      res
        .status(400)
        .json({ message: "Senha é obrigatória e deve ser uma string válida" });
    }

    const user = await loginUserService(email, senha);

    if (user == null)
      res.status(404).json({ message: "Email ou senha inválidos" });

    res.status(200).json({ user });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function signupUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || typeof nome !== "string" || nome.trim() === "") {
      res
        .status(400)
        .json({ message: "Nome é obrigatório e deve ser uma string válida" });
    }

    if (!email || typeof email !== "string" || email.trim() === "") {
      res
        .status(400)
        .json({ message: "Email é obrigatório e deve ser uma string válida" });
    }

    if (!senha || typeof senha !== "string" || senha.trim() === "") {
      res
        .status(400)
        .json({ message: "Senha é obrigatória e deve ser uma string válida" });
    }

    const user = await signupUserService(nome, email, senha);

    if (user == null)
      res.status(404).json({ message: "Email ou senha inválidos" });

    res.status(200).json({ user });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function updateUserController(
  req: Request,
  res: Response
): Promise<void> {
  // put no banco
}

export async function deleteUserController(
  req: Request,
  res: Response
): Promise<void> {
  // delete no banco
}

