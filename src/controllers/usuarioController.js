import Usuario from "../model/UsuarioModel.js";
import { verificaSeExiste } from "../utils/verificaSeExiste.js";

export const usuariosController = {
  async login(request, response) {
    try {
      const usuarioBuscado = await Usuario.findAll({
        where: {
          email: request.body.email,
          senha: request.body.senha,
        },
      });

      const resultado = usuarioBuscado == false ? false : true;

      verificaSeExiste(
        resultado,
        "Usuário não foi logado. Email ou senha inválidos.",
        400
      );

      response.status(200).json(usuarioBuscado);
    } catch (error) {
      response
        .status(400)
        .json("Usuário não foi logado. Email ou senha inválidos.");
    }
  },
  async getAllUsuarios(request, response) {
    try {
      const usuarios = await Usuario.findAll();

      verificaSeExiste(usuarios, "Nenhum usuário encontrado.", 404);

      response.status(200).json(usuarios);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async getUsuariosById(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      verificaSeExiste(usuario, "Nenhum usuário encontrado com esse ID", 404);

      response.status(200).json(usuario);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async postUsuario(request, response) {
    try {
      const usuarioJaExiste = await Usuario.findAll({
        where: {
          email: request.body.email,
        },
      });

      verificaSeExiste(usuarioJaExiste == false, "Usuário já cadastrado.", 400);

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
        404
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

      response.status(201).json("Usuario modificado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },

  async deleteUsuario(request, res) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      verificaSeExiste(
        usuario,
        "Usuário não foi encontrado para ser deletado com sucesso.",
        404
      );

      const resultado = await usuario.destroy();

      verificaSeExiste(resultado, "Usuário não foi deletado com sucesso.", 400);

      res.status(200).json("Usuário deletado com sucesso.");
    } catch (error) {
      res.status(400).json(error.message);
    }
  },
};
