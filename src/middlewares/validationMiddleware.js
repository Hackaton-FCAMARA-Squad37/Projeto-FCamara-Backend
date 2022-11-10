const validation = (schema) => async (req, res, next) => {
  // Objeto vindo da request
  const body = req.body

  // Validando o objeto
  try {
    await schema.validate(body)
    // Se validado, continua para a próxima função
    return next()
  } catch (error) {
    return res.status(400).json(error)
  }
}

export default validation
