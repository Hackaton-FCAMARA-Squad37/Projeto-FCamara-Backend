import Nivel from "../model/nivelModel";

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
      response.status(201).json(response);
    } catch (error) {
      response.status(400).json({ Error: "Nivel não foi cadastrado" });
    }
  },

  async deleteNivel(request, response) {
    try {
      const nivel = await Nivel.findByPk(request.params.id);
      if (!nivel) {
        throw new Error("Nivel não encontrado para esse Id");
      }
      await nivel.destroy();
      response.status(200).json(nivel);
    } catch (e) {
      response.status(404).json(e.message);
    }
  },
};
