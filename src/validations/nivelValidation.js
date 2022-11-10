import yup from 'yup'

const nivelSchema = yup.object({
  titulo: yup.string().required()
})

export default nivelSchema
