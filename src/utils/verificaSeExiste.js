export const verificaSeExiste = (variavel, mensagemDeErro, statusCode) => {
  if (!variavel) {
    const error = new Error(mensagemDeErro);
    error.statusCode = statusCode;
    throw error;
  }
};
