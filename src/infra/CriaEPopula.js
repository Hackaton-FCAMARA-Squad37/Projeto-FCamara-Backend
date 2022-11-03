/* eslint-disable no-unused-vars */
import UsuariosDAO from '../DAO/UsuarioDAO.js'
import ConteudosDAO from '../DAO/ConteudoDAO.js'

const usuario = {
  nome: 'João das Couves',
  email: 'joazinhocouve@email.com',
  senha: 'teste123'
}

const conteudo = {
  titulo: 'Migração de Carreira',
  tipo: 'Artigo',
  duracao: '00:06:00',
  link: 'https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4'
}

try {
  const tabelaUsuarios = await UsuariosDAO.createTableUsuarios()
  const criaUsuario = await UsuariosDAO.inserirUsuario(usuario)

  const tabelaConteudos = await ConteudosDAO.createTableConteudos()
  const criaConteudo = await ConteudosDAO.inserirConteudo(conteudo)
} catch (error) {
  console.log(error)
}
