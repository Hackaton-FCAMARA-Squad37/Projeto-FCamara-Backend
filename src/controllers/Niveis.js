import NiveisModel from '../model/NivelModel.js'
import NiveisDAO from '../DAO/NivelDAO.js'

class Niveis {
  static getAllNiveis = async (req, res) => {
    try {
      const niveis = await NiveisDAO.listarTodasNiveis()
      if (niveis.length === 0) throw new Error('O database está vazio')

      res.status(200).json({ result: niveis })
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  static getNiveisById = async (req, res) => {
    try {
      const nivel = await NiveisDAO.listarNivelPorId(req.params.id)
      if (!nivel) {
        throw new Error('Nivel não encontrado para esse ID')
      }

      res.status(200).json(nivel)
    } catch (error) {
      res.status(404).json(error.message)
    }
  }

  static postNivel = async (req, res) => {
    try {
      const nivel = new NiveisModel(...Object.values(req.body))
      const response = await NiveisDAO.inserirNivel(nivel)

      res.status(201).json(response)
    } catch (error) {
      res.status(400).json({ Error: 'Nivel não foi cadastrada' })
    }
  }

  static deleteNivel = async (req, res) => {
    try {
      const nivel = await NiveisDAO.deletarNivelPorId(req.params.id)
      if (!nivel) {
        throw new Error('Nivel não encontrado para esse Id')
      }
      res.status(200).json(nivel)
    } catch (e) {
      res.status(404).json(e.message)
    }
  }
}

export default Niveis
