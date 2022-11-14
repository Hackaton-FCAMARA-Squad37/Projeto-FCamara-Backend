import yup from "yup";

const conteudoSchema = yup.object({
  titulo: yup.string().required(),
  tipo: yup.string().required(),
  duracao: yup.string().required(),
  descricao: yup.string().required(),
  link: yup.string().url().required(),
  donoConteudo: yup.string().required(),
  tags: yup.string().required(),
  divisao: yup.string().required(),
});

export default conteudoSchema;
