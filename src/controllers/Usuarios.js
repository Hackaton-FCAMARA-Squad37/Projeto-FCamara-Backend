import UsuarioModel from "../model/UsuarioModel.js";
import UsuariosDAO from "../DAO/UsuarioDAO.js";

class Usuarios {
  static getPaginaPadrao = (req, res) => {
    res.send(`
    <h2>API FCamara Squad37</h2>
    <p>Acesso o nosso repositório (<a href="https://github.com/Hackaton-FCAMARA-Squad37/Projeto-FCamara-Backend">Clique aqui!</a>) para mais informações!</p>
    `);
  };

  static getAllUsuarios = async (req, res) => {
    try {
      const usuarios = await UsuariosDAO.listarTodosUsuarios();
      if (usuarios.length === 0) throw new Error("O database está vazio");

      res.status(200).json({ result: usuarios });
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

  static getUsuariosById = async (req, res) => {
    try {
      const usuario = await UsuariosDAO.listarUsuarioPorId(req.params.id);
      if (!usuario) {
        throw new Error("Usuário não encontrado para esse ID");
      }

      res.status(200).json(usuario);
    } catch (error) {
      res.status(404).json(error.message);
    }
  };

  static postUsuario = async (req, res) => {
    try {
      const usuario = new UsuarioModel(...Object.values(req.body));
      const response = await UsuariosDAO.inserirUsuario(usuario);

      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ Error: "usuario não foi cadastrado" });
    }
  };

  static putUsuario = async (req, res) => {
    try {
      const usuario = new UsuarioModel(...Object.values(req.body));
      const response = await UsuariosDAO.atualizarusuarioPorId(
        req.params.id,
        usuario
      );
      res.status(201).json(response);
    } catch (e) {
      res.status(400).json({ Error: "Usuario não foi atualizado" });
    }
  };

  static deleteUsuario = async (req, res) => {
    try {
      const usuario = await UsuariosDAO.deletarUsuarioPorId(req.params.id);
      if (!usuario) {
        throw new Error("Usuário não encontrado para esse Id");
      }
      res.status(200).json(usuario);
    } catch (e) {
      res.status(404).json(e.message);
    }
  };
}

export default Usuarios;
