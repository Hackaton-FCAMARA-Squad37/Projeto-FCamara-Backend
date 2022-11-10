import express from "express";
import { nivelController } from "../controllers/nivelController.js";
import validation from "../middlewares/validationMiddleware.js";
import nivelSchema from "../validations/nivelValidation.js";

const niveisRouter = express.Router();

// GET /Niveis
niveisRouter.get("/niveis", nivelController.getAllNiveis);

// GET /Niveis/:id
niveisRouter.get("/niveis/:id", nivelController.getNiveisById);

// GET /Niveis/:id/temas
niveisRouter.get("/niveis/:id/temas", nivelController.getAllTemas);

// POST /Niveis
niveisRouter.post(
  "/niveis",
  validation(nivelSchema),
  nivelController.postNivel
);

// DELETE "/Niveis/:id"
niveisRouter.delete("/niveis/:id", nivelController.deleteNivel);

export default niveisRouter;
