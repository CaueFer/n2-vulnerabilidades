import { Request, Response } from "express";

import {
  deleteUserService,
  getUserService,
  getUsersService,
  loginUserService,
  signupUserService,
  updateUserService,
} from "../service/auth.service";

export async function getUserController(
  req: Request,
  res: Response
): Promise<void> {
  const { id } = req.query;

  if (id == null) {
    res.status(401).send({ message: "Id invalido1f" });
    return;
  }

  const user = await getUserService(Number(id));

  if (user == null) {
    res.status(404).send({ message: "Usuario nao encontrado!" });
    return;
  }

  res.status(200).send({ user });
}

export async function getUsersController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const usuarios = await getUsersService();

    if (usuarios.length < 1) {
      res.status(404).json({ message: "Nenhum usuario encontrado" });
      return;
    }

    res.status(200).json({ usuarios });
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
    if (req.body == null) {
      res.status(400).json({
        message: "Email e Senha são obrigatórios e devem ser uma string válida",
      });

      return;
    }

    if (!("email" in req.body) || !("senha" in req.body)) {
      res.status(400).json({
        message: "Email e Senha são obrigatórios e devem ser uma string válida",
      });

      return;
    }

    const { email, senha } = req.body;
    if (!email || typeof email !== "string" || email.trim() === "") {
      res
        .status(400)
        .json({ message: "Email é obrigatório e deve ser uma string válida" });

      return;
    }

    if (!senha || typeof senha !== "string" || senha.trim() === "") {
      res
        .status(400)
        .json({ message: "Senha é obrigatória e deve ser uma string válida" });

      return;
    }

    const user = await loginUserService(email, senha);

    if (user == null) {
      res.status(404).json({ message: "Email ou senha inválidos" });
      return;
    }

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
    if (req.body == null) {
      res.status(400).json({
        message:
          "Nome, Email e Senha são obrigatórios e devem ser uma string válida",
      });

      return;
    }

    if (
      !("nome" in req.body) ||
      !("email" in req.body) ||
      !("senha" in req.body)
    ) {
      res.status(400).json({
        message:
          "Nome, Email e Senha são obrigatórios e devem ser uma string válida",
      });

      return;
    }

    const { nome, email, senha } = req.body;

    if (!nome || typeof nome !== "string" || nome.trim() === "") {
      res
        .status(400)
        .json({ message: "Nome é obrigatório e deve ser uma string válida" });

      return;
    }

    if (!email || typeof email !== "string" || email.trim() === "") {
      res
        .status(400)
        .json({ message: "Email é obrigatório e deve ser uma string válida" });

      return;
    }

    if (!senha || typeof senha !== "string" || senha.trim() === "") {
      res
        .status(400)
        .json({ message: "Senha é obrigatória e deve ser uma string válida" });

      return;
    }

    const user = await signupUserService(nome, email, senha);

    if (user == null) {
      res.status(404).json({ message: "Email ou senha inválidos" });
      return;
    }

    res.status(200).json({ user });
  } catch (error) {
    console.error("Erro signup:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function updateUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (req.body == null) {
      res.status(400).json({
        message:
          "Id, Nome, Email e Senha são obrigatórios e devem ser uma string válida",
      });

      return;
    }

    if (
      !("id" in req.body) ||
      !("nome" in req.body) ||
      !("email" in req.body) ||
      !("senha" in req.body)
    ) {
      res.status(400).json({
        message:
          "Id, Nome, Email e Senha são obrigatórios e devem ser uma string válida",
      });

      return;
    }

    const { id, nome, email, senha } = req.body;

    if (!nome || typeof nome !== "string" || nome.trim() === "") {
      res
        .status(400)
        .json({ message: "Nome é obrigatório e deve ser uma string válida" });

      return;
    }

    if (!email || typeof email !== "string" || email.trim() === "") {
      res
        .status(400)
        .json({ message: "Email é obrigatório e deve ser uma string válida" });

      return;
    }

    if (!senha || typeof senha !== "string" || senha.trim() === "") {
      res
        .status(400)
        .json({ message: "Senha é obrigatória e deve ser uma string válida" });

      return;
    }

    const usuario = await updateUserService(id, nome, email, senha);

    if (usuario == null) {
      res.status(404).json({ message: "id, nome ou email ou senha inválidos" });
      return;
    }

    res.status(200).json({ usuario, message: "Conta atualizada!" });
  } catch (error) {
    console.error("Erro update user:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function deleteUserController(
  req: Request,
  res: Response
): Promise<void> {
  try {
    if (req.body == null) {
      res.status(400).json({
        message: "Id é obrigatório e deve ser uma string válida",
      });

      return;
    }

    if (!("id" in req.body)) {
      res.status(400).json({
        message: "Id é obrigatório e deve ser uma string válida",
      });

      return;
    }

    const { id } = req.body;

    if (!id || typeof id !== "string" || id.trim() === "") {
      res
        .status(400)
        .json({ message: "Senha é obrigatória e deve ser uma string válida" });
      return;
    }

    await deleteUserService(Number(id));

    res.status(200).json({ message: "Usuario deletado com sucesso!" });
  } catch (error) {
    console.error("Erro delete user:", error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
}

