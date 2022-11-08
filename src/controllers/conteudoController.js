import Conteudo from "../model/ConteudoModel.js";
import { verificaSeExiste } from "../utils/verificaSeExiste.js";

export const conteudoController = {
  async getAllConteudos(request, response) {
    try {
      const conteudos = await Conteudo.findAll();

      verificaSeExiste(conteudos, "Nenhum conteúdo encontrado", 404);

      response.status(200).json(conteudos);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async getConteudoById(request, response) {
    try {
      const conteudo = await Conteudo.findByPk(request.params.id);

      verificaSeExiste(conteudo, "Nenhum conteúdo encontrado com esse ID", 404);

      response.status(200).json(conteudo);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async postConteudo(request, response) {
    try {
      const conteudoCriado = await Conteudo.create(request.body);

      verificaSeExiste(
        conteudoCriado,
        "Conteudo não foi cadastrado com sucesso",
        400
      );

      response.status(201).json("Conteudo criado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async putConteudo(request, response) {
    try {
      const conteudo = await Conteudo.findByPk(request.params.id);

      verificaSeExiste(
        conteudo,
        "Não foi possível encontrar o conteúdo para atualização.",
        400
      );

      conteudo.titulo = request.body.titulo;
      conteudo.tipo = request.body.tipo;
      conteudo.duracao = request.body.duracao;
      conteudo.descricao = request.body.descricao;
      conteudo.link = request.body.link;
      conteudo.donoConteudo = request.body.donoConteudo;
      conteudo.tags = request.body.tags;
      const resultado = await conteudo.save();

      verificaSeExiste(
        resultado,
        "Conteúdo não foi atualizado com sucesso.",
        400
      );

      response.status(201).json("Conteudo atualizado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async deleteConteudo(request, response) {
    try {
      const conteudo = await Conteudo.findByPk(request.params.id);

      verificaSeExiste(
        conteudo,
        "Não foi possível encontrar o conteúdo para ser deletado.",
        400
      );

      const resultado = await conteudo.destroy();

      verificaSeExiste(
        resultado,
        "Conteúdo não foi deletado com sucesso.",
        400
      );

      response.status(200).json(conteudo);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },
};
