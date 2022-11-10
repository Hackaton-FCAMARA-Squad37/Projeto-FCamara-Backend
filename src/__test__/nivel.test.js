import {nivelController} from "../controllers/nivelController.js"
import { getMockReq, getMockRes } from "@jest-mock/express";

it("Nenhum nivel encontrado", () => {
    const req = getMockReq();
    const { res } = getMockRes();
  
    return nivelController.getAllNiveis(req, res).catch((error) => {
      expect(error.message).toMatch("Nenhum nivel encontrado.");
      expect(error.statusCode).toBe(404);
    });
  });

  it("Nenhum nivel encontrado com esse ID", () => {
    const req = getMockReq({ params: { id: null } });
    const { res } = getMockRes();
  
    return nivelController.getNiveisById(req, res).catch((error) => {
      expect(error.message).toMatch("Nenhum nivel encontrado com esse ID");
      expect(error.statusCode).toBe(404);
    });
  });

  it("Nivel não foi cadastrado com sucesso", () => {
    const req = getMockReq({
      body: {
        titulo: null
      },
    });
    const { res } = getMockRes();

    return nivelController.postNivel(req, res).catch((error) => {
      expect(error.message).toMatch("Nivel não foi cadastrado com sucesso.");
      expect(error.statusCode).toBe(400);
    });
  });

  