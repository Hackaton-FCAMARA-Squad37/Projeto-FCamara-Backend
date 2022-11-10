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
  const req = getMockReq();
  const { res } = getMockRes();

  return usuariosController.getAllUsuarios(req, res).catch((error) => {
    expect(error.message).toMatch("Nenhum usuário encontrado.");
    expect(error.statusCode).toBe(404);
  });
});

it("usuario não foi cadastrado com sucesso", () => {
  const req = getMockReq({
    body: {
      nome: null,
      email: null,
      senha: null,
      xp: null,
    },
  });
  const { res } = getMockRes();

  return usuariosController.postUsuario(req, res).catch((error) => {
    expect(error.message).toMatch("Usuário não foi cadastrado com sucesso.");
    expect(error.statusCode).toBe(400);
  });
});

it("Não foi possível encontrar usuário para atualização.", () => {
  const req = getMockReq({
    body: {
      nome: null,
      email: null,
      senha: null,
      xp: null,
    },
    params: {
      id: null,
    },
  });
  const { res } = getMockRes();

  return usuariosController.putUsuario(req, res).catch((error) => {
    expect(error.message).toMatch(
      "Não foi possível encontrar usuário para atualização."
    );
    expect(error.statusCode).toBe(400);
  });
});

it("Usuário não foi atualizado com sucesso", () => {
  const req = getMockReq({
    body: {
      nome: null,
      email: null,
      senha: null,
      xp: null,
    },
    params: {
      id: 1,
    },
  });
  const { res } = getMockRes();

  return usuariosController.putUsuario(req, res).catch((error) => {
    expect(error.message).toMatch("Usuário não foi atualizado com sucesso.");
    expect(error.statusCode).toBe(400);
  });
});
