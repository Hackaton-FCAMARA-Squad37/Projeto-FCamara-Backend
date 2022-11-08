import express from "express";
import { usuariosController } from "../controllers/usuarioController.js";
import validation from "../middlewares/validationMiddleware.js";
import usuarioSchema from "../validations/usuarioValidation.js";

const usuariosRouter = express.Router();

// GET /
usuariosRouter.get("/", usuariosController.getPaginaPadrao);

// GET /usuarios
usuariosRouter.get("/usuarios", usuariosController.getAllUsuarios);

// GET /usuarios/:id
usuariosRouter.get("/usuarios/:id", usuariosController.getUsuariosById);

// POST /usuarios
usuariosRouter.post(
  "/usuarios",
  validation(usuarioSchema),
  usuariosController.postUsuario
);

// PUT /usuarios/:id
usuariosRouter.put(
  "/usuarios/:id",
  validation(usuarioSchema),
  usuariosController.putUsuario
);

// DELETE "/usuarios/:id"
usuariosRouter.delete("/usuarios/:id", usuariosController.deleteUsuario);

export default usuariosRouter;
