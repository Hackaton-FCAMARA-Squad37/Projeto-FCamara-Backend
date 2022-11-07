import express from "express";
import Usuarios from "../controllers/Usuarios.js";
import validation from "../middlewares/validationMiddleware.js";
import usuarioSchema from "../validations/usuarioValidation.js";

const usuariosRouter = express.Router();

// GET /
usuariosRouter.get("/", Usuarios.getPaginaPadrao);

// GET /usuarios
usuariosRouter.get("/usuarios", Usuarios.getAllUsuarios);

// GET /usuarios/:id
usuariosRouter.get("/usuarios/:id", Usuarios.getUsuariosById);

// POST /usuarios
usuariosRouter.post(
  "/usuarios",
  validation(usuarioSchema),
  Usuarios.postUsuario
);

// PUT /usuarios/:id
usuariosRouter.put(
  "/usuarios/:id",
  validation(usuarioSchema),
  Usuarios.putUsuario
);

// DELETE "/usuarios/:id"
usuariosRouter.delete("/usuarios/:id", Usuarios.deleteUsuario);

export default usuariosRouter;
