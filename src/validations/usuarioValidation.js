import yup from 'yup'

const usuarioSchema = yup.object({
  nome: yup.string().required(),
  email: yup.email().required(),
  senha: yup.string().min(6).max(20).required(),
  xp: yup.string().required()
})

export default usuarioSchema
