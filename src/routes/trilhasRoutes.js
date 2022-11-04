import express from "express";
import Trilhas from "../controllers/Trilhas.js";

const trilhasRouter = express.Router();

// GET /trilhas
trilhasRouter.get("/trilhas", Trilhas.getAllTrilhas);

// GET /trilhas/:id
trilhasRouter.get("/trilhas/:id", Trilhas.getTrilhasById);

// POST /trilhas
trilhasRouter.post("/trilhas", Trilhas.postTrilha);

// DELETE "/trilhas/:id"
trilhasRouter.delete("/trilhas/:id", Trilhas.deleteTrilha);

export default trilhasRouter;
