import express from "express";
import { temaController } from "../controllers/temaController.js";
import validation from "../middlewares/validationMiddleware.js";
import temaSchema from "../validations/temaValidation.js";

const temasRouter = express.Router();

// GET /temas
temasRouter.get("/temas", temaController.getAllTemas);

// GET /temas/:id
temasRouter.get("/temas/:id", temaController.getTemasById);

// GET /temas/:id/conteudos
temasRouter.get("/temas/:id/temas", temaController.getAllConteudos);

// POST /temas
temasRouter.post("/temas", validation(temaSchema), temaController.postTema);

// DELETE "/temas/:id"
temasRouter.delete("/temas/:id", temaController.deleteTema);

export default temasRouter;
