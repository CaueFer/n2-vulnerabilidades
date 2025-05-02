import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import router from "./router";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", router);

app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
