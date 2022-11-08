import express from "express";
import { conteudoController } from "../controllers/conteudoController.js";
import validation from "../middlewares/validationMiddleware.js";
import conteudoSchema from "../validations/conteudoValidation.js";

const conteudosRouter = express.Router();

// GET /conteudos
conteudosRouter.get("/conteudos", conteudoController.getAllConteudos);

// GET /conteudos/:id
conteudosRouter.get("/conteudos/:id", conteudoController.getConteudoById);

// POST /conteudos
conteudosRouter.post(
  "/conteudos",
  validation(conteudoSchema),
  conteudoController.postConteudo
);

// PUT /conteudos/:id
conteudosRouter.put(
  "/conteudos/:id",
  validation(conteudoSchema),
  conteudoController.putConteudo
);

// DELETE "/conteudos/:id"
conteudosRouter.delete("/conteudos/:id", conteudoController.deleteConteudo);

export default conteudosRouter;
