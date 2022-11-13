import Tema from "../model/TemaModel.js";
import Usuario from "../model/UsuarioModel.js";

export const usuarioTemaController = {
  async postUsuarioTema(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.body.usuarioId);
      const tema = await Tema.findByPk(request.body.temaId);
      const resposta = await usuario.addTema(tema);

      if (!resposta) {
        throw new Error("Erro ao adicionar tema ao usuário");
      }

      response.status(200).send(resposta);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  async todosTemasDoUsuario(request, response) {
    try {
      const usuario = await Usuario.findByPk(request.body.usuarioId);
      const resposta = await usuario.getTemas();

      if (!resposta) {
        throw new Error("Erro ao buscar os temas do usuário");
      }

      response.status(200).send(resposta);
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
