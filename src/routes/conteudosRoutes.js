import express from 'express'
import Conteudos from '../controllers/Conteudos.js'

const conteudosRouter = express.Router()

// GET /conteudos
conteudosRouter.get('/conteudos', Conteudos.getAllConteudos)

// GET /conteudos/:id
conteudosRouter.get('/conteudos/:id', Conteudos.getConteudoById)

// POST /conteudos
conteudosRouter.post('/conteudos', Conteudos.postConteudo)

// PUT /conteudos/:id
conteudosRouter.put('/conteudos/:id', Conteudos.putConteudo)

// DELETE "/conteudos/:id"
conteudosRouter.delete('/conteudos/:id', Conteudos.deleteConteudo)

export default conteudosRouter
