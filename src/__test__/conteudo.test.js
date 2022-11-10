import { conteudoController } from "../controllers/conteudoController.js";
import { getMockReq, getMockRes } from "@jest-mock/express";

it("Nenhum conteúdo encontrado", () => {
  const req = getMockReq();
  const { res } = getMockRes();

  return conteudoController.getAllConteudos(req, res).catch((error) => {
    expect(error.message).toMatch("Nenhum conteúdo encontrado.");
    expect(error.statusCode).toBe(404);
  });
});

it("Nenhum conteúdo encontrado com esse ID", () => {
  const req = getMockReq({ params: { id: null } });
  const { res } = getMockRes();

  return conteudoController.getConteudoById(req, res).catch((error) => {
    expect(error.message).toMatch("Nenhum conteúdo encontrado com esse ID");
    expect(error.statusCode).toBe(404);
  });
});

it("Conteudo não foi cadastrado com sucesso", () => {
  const req = getMockReq({
    body: {
      titulo: null,
      tipo: null,
      duracao: null,
      descricao: null,
      link: null,
      donoConteudo: null,
      tags: null,
      idTema: null,
    },
  });
  const { res } = getMockRes();

  return conteudoController.postConteudo(req, res).catch((error) => {
    expect(error.message).toMatch("Conteudo não foi cadastrado com sucesso.");
    expect(error.statusCode).toBe(400);
  });
});

it("Não foi possível encontrar o conteúdo para atualização", () => {
  const req = getMockReq({
    body: {
      titulo: null,
      tipo: null,
      duracao: null,
      descricao: null,
      link: null,
      donoConteudo: null,
      tags: null,
      idTema: null,
    },
    params: {
      id: null,
    },
  });
  const { res } = getMockRes();

  return conteudoController.putConteudo(req, res).catch((error) => {
    expect(error.message).toMatch(
      "Não foi possível encontrar o conteúdo para atualização."
    );
    expect(error.statusCode).toBe(400);
  });
});

it("Conteúdo não foi atualizado com sucesso.", () => {
  const req = getMockReq({
    body: {
      titulo: null,
      tipo: null,
      duracao: null,
      descricao: null,
      link: null,
      donoConteudo: null,
      tags: null,
      idTema: null,
    },
    params: {
      id: 1,
    },
  });
  const { res } = getMockRes();

  return conteudoController.putConteudo(req, res).catch((error) => {
    expect(error.message).toMatch("Conteúdo não foi atualizado com sucesso.");
    expect(error.statusCode).toBe(400);
  });
});
