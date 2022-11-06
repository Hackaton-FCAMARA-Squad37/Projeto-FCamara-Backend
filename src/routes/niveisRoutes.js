import express from 'express'
import Niveis from '../controllers/Niveis.js'

const niveisRouter = express.Router()

// GET /Niveis
niveisRouter.get('/niveis', Niveis.getAllNiveis)

// GET /Niveis/:id
niveisRouter.get('/niveis/:id', Niveis.getNiveisById)

// POST /Niveis
niveisRouter.post('/niveis', Niveis.postDivisao)

// DELETE "/Niveis/:id"
niveisRouter.delete('/niveis/:id', Niveis.deleteDivisao)

export default niveisRouter
