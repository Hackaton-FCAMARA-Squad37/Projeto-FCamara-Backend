import express from "express";
import Usuarios from "../controllers/Usuarios.js";

const usuariosRouter = express.Router();

// GET /
usuariosRouter.get("/", Usuarios.getPaginaPadrao);

// GET /usuarios
usuariosRouter.get("/usuarios", Usuarios.getAllUsuarios);

// GET /usuarios/:id
usuariosRouter.get("/usuarios/:id", Usuarios.getUsuariosById);

// POST /usuarios
usuariosRouter.post("/usuarios", Usuarios.postUsuario);

// PUT /usuarios/:id
usuariosRouter.put("/usuarios/:id", Usuarios.putUsuario);

// DELETE "/usuarios/:id"
usuariosRouter.delete("/usuarios/:id", Usuarios.deleteUsuario);

export default usuariosRouter;
