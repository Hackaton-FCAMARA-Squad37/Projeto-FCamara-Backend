import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import usuariosRouter from "./routes/usuariosRoutes.js";
import conteudosRouter from "./routes/conteudosRoutes.js";
import trilhasRouter from "./routes/trilhasRoutes.js";
import niveisRouter from "./routes/niveisRoutes.js";
import sequelize from "./infra/Database.js";

await sequelize
  .sync()
  .then(() =>
    console.log("Todos os modelos foram sincronizados! Banco de dados pronto!")
  );

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

app.use(express.json());
app.use(cors());

console.log(process.env.HOSTNAME);

app.use(usuariosRouter);
app.use(conteudosRouter);
app.use(niveisRouter);
