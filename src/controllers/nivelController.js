import Nivel from "../model/NivelModel.js";

export const nivelController = {
  async getAllNiveis(request, response) {
    try {
      const niveis = await Nivel.findAll();
      response.status(200).json(niveis);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async getNiveisById(request, response) {
    try {
      const nivel = await Nivel.findByPk(request.params.id);
      response.status(200).json(nivel);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },

  async postNivel(request, response) {
    try {
      await Nivel.create(request.body);
      response.status(201).json("Nivel criado com sucesso!");
    } catch (error) {
      response.status(400).json(error.message);
    }
  },

  async deleteNivel(request, response) {
    try {
      const nivel = await Nivel.findByPk(request.params.id);
      if (!nivel) {
        throw new Error(
          "Nível não foi encontrado para ser deletado com sucesso."
        );
      }
      await nivel.destroy();
      response.status(200).json(nivel);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },
  async getAllTemas(request, response) {
    try {
      const nivel = await Nivel.findByPk(request.params.id);
      const temas = await nivel.getTemas();

      if (!temas) {
        throw new Error("Temas não encontrados para o nível com esse Id");
      }

      response.status(200).json(temas);
    } catch (error) {
      response.status(404).json(error.message);
    }
  },
};
