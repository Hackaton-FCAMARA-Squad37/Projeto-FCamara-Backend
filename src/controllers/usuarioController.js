import Usuario from "../model/UsuarioModel.js";
import { verificaSeExiste } from "../utils/verificaSeExiste.js";

export const usuariosController = {
  getPaginaPadrao(request, response) {
    response.send(`
    <h2>API FCamara Squad37</h2>
    <p>Acesso o nosso repositório (<a href="https://github.com/Hackaton-FCAMARA-Squad37/Projeto-FCamara-Backend">Clique aqui!</a>) para mais informações!</p>
    `);
  },

  async getAllUsuarios(request, response) {
    try {
      const usuarios = await Usuario.findAll();

      verificaSeExiste(usuarios, "Nenhum usuário encontrado.", 404);

      response.status(200).json(usuarios);
    } catch (error) {
      response.status(500).json(error.message);
    }
  },

  async getUsuariosById(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      verificaSeExiste(usuario, "Nenhum usuário encontrado com esse ID", 404);

      response.status(200).json(usuario);
    } catch (error) {
      response.status(500).json(error.message);
    }
  },

  async postUsuario(request, response) {
    try {
      const usuarioCriado = await Usuario.create(request.body);

      verificaSeExiste(
        usuarioCriado,
        "Usuário não foi cadastrado com sucesso.",
        400
      );

      response.status(201).json("Usuario criado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },

  async putUsuario(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      verificaSeExiste(
        usuario,
        "Não foi possível encontrar usuário para atualização.",
        400
      );

      usuario.nome = request.body.nome;
      usuario.email = request.body.email;
      usuario.senha = request.body.senha;
      usuario.xp = request.body.xp;
      const resultado = await usuario.save();

      verificaSeExiste(
        resultado,
        "Usuário não foi atualizado com sucesso.",
        400
      );

      console.log(resultado);
      response.status(201).json("Usuario cadastrado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },

  async deleteUsuario(request, res) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      verificaSeExiste(usuario, "Usuário não foi deletado com sucesso.", 400);

      const resultado = await usuario.destroy();

      verificaSeExiste(resultado, "Usuário não foi deletado com sucesso.", 400);

      res.status(200).json("Usuário deletado com sucesso.");
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
};
