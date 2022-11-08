import { usuariosController } from "../controllers/usuarioController.js";
import { getMockReq, getMockRes } from "@jest-mock/express";

it("usuario não encontrado para o id solicitado", () => {
  const req = getMockReq({ params: { id: null } });
  const { res } = getMockRes();

  return usuariosController.getUsuariosById(req, res).catch((error) => {
    expect(error.message).toMatch("Nenhum usuário encontrado com esse ID");
    expect(error.statusCode).toBe(404);
  });
});

it("nenhum usuário encontrado", () => {
  const req = getMockReq({ params: { id: null } });
  const { res } = getMockRes();

  return usuariosController.getAllUsuarios(req, res).catch((error) => {
    expect(error.message).toMatch("Nenhum usuário encontrado.");
    expect(error.statusCode).toBe(404);
  });
});
