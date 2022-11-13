import express from "express";
import { usuarioTemaController } from "../controllers/usuarioTemaController.js";
usuarioTemaController;

const usuarioTemaRouter = express.Router();

usuarioTemaRouter.post("/linka-user", usuarioTemaController.postUsuarioTema);
usuarioTemaRouter.post(
  "/usuario-temas",
  usuarioTemaController.todosTemasDoUsuario
);

export default usuarioTemaRouter;
