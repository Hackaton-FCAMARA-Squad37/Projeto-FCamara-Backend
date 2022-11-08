import Conteudo from "../model/ConteudoModel.js";

export const conteudoController = {
  async getAllConteudos(request, response) {
    try {
      const conteudos = await Conteudo.findAll();
      response.status(200).json(conteudos);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async getConteudoById(request, response) {
    try {
      const conteudo = await Conteudo.findByPk(request.params.id);
      response.status(200).json(conteudo);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async postConteudo(request, response) {
    try {
      await Conteudo.create(request.body);
      response.status(201).json(response);
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async putConteudo(request, response) {
    try {
      const conteudo = await Conteudo.findByPk(request.params.id);
      conteudo.titulo = request.body.titulo;
      conteudo.tipo = request.body.tipo;
      conteudo.duracao = request.body.duracao;
      conteudo.descricao = request.body.descricao;
      conteudo.link = request.body.link;
      conteudo.donoConteudo = request.body.donoConteudo;
      conteudo.tags = request.body.tags;
      await conteudo.save();
      response.status(201).json(response);
    } catch (error) {
      response.status(400).json(error.message);
    }
  },
  async deleteConteudo(request, response) {
    try {
      const conteudo = await Conteudo.findByPk(request.params.id);
      if (!conteudo) {
        throw new Error("Conteudo não encontrado com esse Id");
      }
      await conteudo.destroy();
      response.status(200).json(conteudo);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },
};
