import express from "express";
import swaggerUi from "swagger-ui-express";
import * as dotenv from "dotenv";
import cors from "cors";
import usuariosRouter from "./routes/usuariosRoutes.js";
import conteudosRouter from "./routes/conteudosRoutes.js";
import niveisRouter from "./routes/niveisRoutes.js";
import temasRouter from "./routes/temasRoutes.js";
import sequelize from "./infra/database.js";
import swaggerDocs from "./swagger.json" assert { type: "json" };

await sequelize
  .sync({ force: true })
  .then(() =>
    console.log("Todos os modelos foram sincronizados! Banco de dados pronto!")
  );

dotenv.config();

const port = process.env.PORT || 3002;
const app = express();

app.use(express.json());
app.use(cors());

console.log(process.env.HOSTNAME);

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(usuariosRouter);
app.use(niveisRouter);
app.use(temasRouter);
app.use(conteudosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
