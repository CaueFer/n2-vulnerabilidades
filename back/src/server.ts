import dotenv from "dotenv";
dotenv.config();

import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import router from "./router";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5500"], // coloca o endpoint certo do front
    credentials: true, // pra receber/enviar os cookies
  })
);

app.use("/api", router);

app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
