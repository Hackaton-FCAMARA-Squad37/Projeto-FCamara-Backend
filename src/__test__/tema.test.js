import {temaController} from "../controllers/temaController.js"
import { getMockReq, getMockRes } from "@jest-mock/express";

it("Nenhum tema encontrado", () => {
    const req = getMockReq();
    const { res } = getMockRes();
  
    return temaController.getAllTemas(req, res).catch((error) => {
      expect(error.message).toMatch("Nenhum tema encontrado.");
      expect(error.statusCode).toBe(404);
    });
  });

  it("Nenhum tema encontrado com esse ID", () => {
    const req = getMockReq({ params: { id: null } });
    const { res } = getMockRes();
  
    return temaController.getTemasById(req, res).catch((error) => {
      expect(error.message).toMatch("Nenhum tema encontrado com esse ID");
      expect(error.statusCode).toBe(404);
    });
  });

  it("tema não foi cadastrado com sucesso", () => {
    const req = getMockReq({
      body: {
        titulo: null
      },
    });
    const { res } = getMockRes();
  
    return temaController.postTema(req, res).catch((error) => {
      expect(error.message).toMatch("tema não foi cadastrado com sucesso.");
      expect(error.statusCode).toBe(400);
    });
  });