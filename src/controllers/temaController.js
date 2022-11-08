import Tema from "../model/temaModel.js";

export const temaController = {
  async getAllNiveis(request, response) {
    try {
      const temas = await Tema.findAll();
      response.status(200).json(temas);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async getTemasById(request, response) {
    try {
      const tema = await Tema.findByPk(request.params.id);
      response.status(200).json(tema);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async postTema(request, response) {
    try {
      await Tema.create(request.body);
      response.status(201).json(response);
    } catch (error) {
      response.status(400).json({ Error: "Tema não foi cadastrado" });
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
      response.status(404).json(error.message);
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
      response.status(404).json(error.message);
    }
  },
};
