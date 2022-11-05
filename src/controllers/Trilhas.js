import TrilhasModel from "../model/TrilhasModel.js";
import TrilhasDAO from "../DAO/TrilhasDAO.js";

class Trilhas {
  static getAllTrilhas = async (req, res) => {
    try {
      const trilhas = await TrilhasDAO.listarTodasTrilhas();
      if (trilhas.length === 0) throw new Error("O database está vazio");

      res.status(200).json({ result: trilhas });
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

  static getTrilhasById = async (req, res) => {
    try {
      const trilha = await TrilhasDAO.listarTrilhaPorId(req.params.id);
      if (!trilha) {
        throw new Error("Trilha não encontrada para esse ID");
      }

      res.status(200).json(trilha);
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

  static postTrilha = async (req, res) => {
    try {
      const trilha = new TrilhasModel(...Object.values(req.body));
      const response = await TrilhasDAO.inserirTrilha(trilha);

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ Error: "trilhas não foi cadastrado" });
    }
  };

  static deleteTrilha = async (req, res) => {
    try {
      const trilha = await TrilhasDAO.deletarTrilhaPorId(req.params.id);
      if (!trilha) {
        throw new Error("Trilha não encontrado para esse Id");
      }
      res.status(200).json(trilha);
    } catch (e) {
      res.status(404).json(e.message);
    }
  };
}

export default Trilhas;
