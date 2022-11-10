import Tema from "../model/TemaModel.js";

export const temaController = {
  async getAllTemas(request, response) {
    try {
      const temas = await Tema.findAll();
      response.status(200).json(temas);
    } catch (error) {
      response.status(404).json("Falha ao buscar os temas.");
    }
  },

  async getTemasById(request, response) {
    try {
      const tema = await Tema.findByPk(request.params.id);
      response.status(200).json(tema);
    } catch (error) {
      response.status(404).json("Falha ao buscar o ID.");
    }
  },

  async postTema(request, response) {
    try {
      await Tema.create(request.body);
      response.status(201).json("Tema cadastrado com sucesso!");
    } catch (error) {
      response.status(400).json("Falha ao cadastrar tema.");
    }
  },

  async deleteTema(request, response) {
    try {
      const tema = await Tema.findByPk(request.params.id);
      if (!tema) {
        throw new Error("Tema não encontrado para esse Id");
      }
      await tema.destroy();
      response.status(200).json(tema);
    } catch (error) {
      response
        .status(404)
        .json("Tema não foi encontrado para ser deletado com sucesso.");
    }
  },
  async getAllConteudos(request, response) {
    try {
      const tema = await Tema.findByPk(request.params.id);
      const conteudos = await tema.getConteudos();

      if (!conteudos) {
        throw new Error("Conteúdos não encontrados para o tema com esse Id");
      }

      response.status(200).json(conteudos);
    } catch (error) {
      response
        .status(404)
        .json("Conteúdos não encontrados para o tema com esse Id");
    }
  },
};
