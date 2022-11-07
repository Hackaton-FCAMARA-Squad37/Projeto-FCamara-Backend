import express from "express";
import Trilhas from "../controllers/Trilhas.js";
import validation from "./middlewares/validationMiddleware.js";
import trilhaSchema from "../validations/trilhaValidation.js";

const trilhasRouter = express.Router();

// GET /trilhas
trilhasRouter.get("/trilhas", Trilhas.getAllTrilhas);

// GET /trilhas/:id
trilhasRouter.get("/trilhas/:id", Trilhas.getTrilhasById);

// POST /trilhas
trilhasRouter.post("/trilhas", validation(trilhaSchema), Trilhas.postTrilha);

// DELETE "/trilhas/:id"
trilhasRouter.delete("/trilhas/:id", Trilhas.deleteTrilha);

export default trilhasRouter;
