import yup from "yup";

const temaSchema = yup.object({
  titulo: yup.string().required(),
});

export default temaSchema;
