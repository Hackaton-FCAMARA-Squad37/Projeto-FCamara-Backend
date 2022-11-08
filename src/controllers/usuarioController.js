import Usuario from "../model/UsuarioModel.js";

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

      if (!usuarios) {
        throw new Error("Falha ao pesquisar todos os usuários");
      }

      response.status(200).json(usuarios);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async getUsuariosById(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      if (!usuario) {
        throw new Error("Usuário não encontrado para esse ID");
      }

      response.status(200).json(usuario);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async postUsuario(request, response) {
    try {
      await Usuario.create(request.body);
      response.status(201).json("Usuario criado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },

  async putUsuario(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      if (!usuario) {
        throw new Error("Usuário não encontrado para esse Id");
      }

      usuario.nome = request.body.nome;
      usuario.email = request.body.email;
      usuario.senha = request.body.senha;
      usuario.xp = request.body.xp;
      await usuario.save();

      response.status(201).json("Usuario cadastrado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },

  async deleteUsuario(request, res) {
    try {
      const usuario = await Usuario.findByPk(request.params.id);

      if (!usuario) {
        throw new Error("Usuário não encontrado para esse Id");
      }

      await usuario.destroy();
      res.status(200).json(usuario);
    } catch (error) {
      res.status(404).json(error.message);
    }
  },
};
