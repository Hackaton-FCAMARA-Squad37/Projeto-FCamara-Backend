import yup from "yup";

const trilhaSchema = yup.object({
  titulo: yup.string().required(),
});

export default trilhaSchema;
