import ConteudoDAO from '../DAO/ConteudoDAO.js';
import ConteudoModel from '../model/ConteudoModel.js';

class Conteudos {
   
    static getAllConteudos = async (req, res) => {
        try {
          const conteudos = await ConteudoDAO.listarTodosConteudos();
          if (conteudos.length === 0) throw new Error("O database está vazio");
    
          res.status(200).json({ result: conteudos });
        } catch (error) {
          res.status(404).json(error.message);
        }
      };
    
      static getConteudoById = async (req, res) => {
        try {
          const conteudo= await ConteudoDAO.listarConteudoPorId(req.params.id);
          if (!conteudo) {
            throw new Error("Conteúdo não encontrado para esse ID");
          }
    
          res.status(200).json(conteudo);
        } catch (error) {
          res.status(404).json(error.message);
        }
      };
    
      static postConteudo = async (req, res) => {
        try {
          const conteudo = new ConteudoModel(...Object.values(req.body));
          const response = await ConteudoDAO.inserirConteudo(conteudo);
    
          res.status(201).json(response);
        } catch (error) {
          res.status(400).json({ Error: "Conteúdo não foi cadastrado" });
        }
      };
    
      static putConteudo = async (req, res) => {
        try {
          const conteudo = new ConteudoModel(...Object.values(req.body));
          const response = await ConteudoDAO.atualizarConteudoPorId(
            req.params.id,
            conteudo
          );
          res.status(201).json(response);
        } catch (e) {
          res.status(400).json({ Error: "Conteúdo não foi atualizado" });
        }
      };
    
      static deleteConteudo = async (req, res) => {
        try {
          const conteudo = await ConteudoDAO.deletarConteudoPorId(req.params.id);
          if (!conteudo) {
            throw new Error("Conteúdo não encontrado para esse Id");
          }
          res.status(200).json(conteudo);
        } catch (e) {
          res.status(404).json(e.message);
        }
      };
}

export default Conteudos;