import express from 'express'
import Niveis from '../controllers/Niveis.js'
import validation from '../middlewares/validationMiddleware.js'
import nivelSchema from '../validations/nivelValidation.js'

const niveisRouter = express.Router()

// GET /Niveis
niveisRouter.get('/niveis', Niveis.getAllNiveis)

// GET /Niveis/:id
niveisRouter.get('/niveis/:id', Niveis.getNiveisById)

// POST /Niveis
niveisRouter.post('/niveis', validation(nivelSchema), Niveis.postNivel)

// DELETE "/Niveis/:id"
niveisRouter.delete('/niveis/:id', Niveis.deleteNivel)

export default niveisRouter
