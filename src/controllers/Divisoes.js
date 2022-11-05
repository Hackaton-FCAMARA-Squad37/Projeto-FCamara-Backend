import DivisoesModel from "../model/DivisoesModel.js";
import DivisoesDAO from "../DAO/DivisoesDAO.js";

class Divisoes {
  static getAllDivisoes = async (req, res) => {
    try {
      const divisoes = await DivisoesDAO.listarTodasDivisoes();
      if (divisoes.length === 0) throw new Error("O database está vazio");

      res.status(200).json({ result: divisoes });
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

  static getDivisoesById = async (req, res) => {
    try {
      const divisao = await DivisoesDAO.listarDivisaoPorId(req.params.id);
      if (!trilha) {
        throw new Error("Divisao não encontrada para esse ID");
      }

      res.status(200).json(divisao);
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

  static postDivisao = async (req, res) => {
    try {
      const divisao = new DivisoesModel(...Object.values(req.body));
      const response = await DivisoesDAO.inserirDivisao(divisao);

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ Error: "divisao não foi cadastrada" });
    }
  };

  static deleteDivisao = async (req, res) => {
    try {
      const divisao = await DivisoesDAO.deletarDivisaoPorId(req.params.id);
      if (!divisao) {
        throw new Error("Divisao não encontrado para esse Id");
      }
      res.status(200).json(divisao);
    } catch (e) {
      res.status(404).json(e.message);
    }
  };
}

export default Divisoes;
