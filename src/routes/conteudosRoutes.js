import express from "express";
import Conteudos from "../controllers/Conteudos.js";
import validation from "./middlewares/validationMiddleware.js";
import conteudoSchema from "../validations/conteudoValidation.js";

const conteudosRouter = express.Router();

// GET /conteudos
conteudosRouter.get("/conteudos", Conteudos.getAllConteudos);

// GET /conteudos/:id
conteudosRouter.get("/conteudos/:id", Conteudos.getConteudoById);

// POST /conteudos
conteudosRouter.post(
  "/conteudos",
  validation(conteudoSchema),
  Conteudos.postConteudo
);

// PUT /conteudos/:id
conteudosRouter.put(
  "/conteudos/:id",
  validation(conteudoSchema),
  Conteudos.putConteudo
);

// DELETE "/conteudos/:id"
conteudosRouter.delete("/conteudos/:id", Conteudos.deleteConteudo);

export default conteudosRouter;
