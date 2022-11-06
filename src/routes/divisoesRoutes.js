import express from 'express'
import Divisoes from '../controllers/Divisoes.js'

const divisoesRouter = express.Router()

// GET /divisoes
divisoesRouter.get('/divisoes', Divisoes.getAllDivisoes)

// GET /divisoes/:id
divisoesRouter.get('/divisoes/:id', Divisoes.getDivisoesById)

// POST /divisoes
divisoesRouter.post('/divisoes', Divisoes.postDivisao)

// DELETE "/divisoes/:id"
divisoesRouter.delete('/divisoes/:id', Divisoes.deleteDivisao)

export default divisoesRouter
