/* eslint-disable no-unused-vars */
import UsuariosDAO from '../DAO/UsuarioDAO.js'
import ConteudosDAO from '../DAO/ConteudoDAO.js'
import NiveisDAO from '../DAO/NivelDAO.js'
import TrilhasDAO from '../DAO/TrilhasDAO.js'

const usuario = {
  nome: 'João das Couves',
  email: 'joazinhocouve@email.com',
  senha: 'teste123',
  xp: 1
}

const conteudo = {
  titulo: 'Migração de Carreira',
  tipo: 'Artigo',
  duracao: '00:06:00',
  link: 'https://medium.com/orangejuicefc/guia-definitivo-de-como-migrar-para-ux-design-5-passos-para-virar-um-ux-1675f71796b4',
  donoConteudo: 'ORANGEJUICE',
  trilha: 'DEV',
  nivel: 'SEMEAR',
  tags: 'DEV, CARREIRA, MOTIVAÇÃO'
}

const listaTrilhas = [
  {
    titulo: 'UX/UI'
  },
  {
    titulo: 'DEV FULLSTACK'
  },
  {
    titulo: 'QA'
  }
]

const listaNiveis = [
  {
    titulo: 'semearUXUI'
  },
  {
    titulo: 'semearDEV'
  },
  {
    titulo: 'semearQA'
  },
  {
    titulo: 'regarUXUI'
  },
  {
    titulo: 'regarDEV'
  },
  {
    titulo: 'regarQA'
  },
  {
    titulo: 'coletarUXUI'
  },
  {
    titulo: 'coletarDEV'
  },
  {
    titulo: 'coletarQA'
  }
]

try {
  const tabelaUsuarios = await UsuariosDAO.createTableUsuarios()
  const criaUsuario = await UsuariosDAO.inserirUsuario(usuario)

  const tabelaConteudos = await ConteudosDAO.createTableConteudos()
  const criaConteudo = await ConteudosDAO.inserirConteudo(conteudo)

  const tabelaNiveis = await NiveisDAO.createTableNiveis()
  for (let i = 0; i < listaNiveis.length; i++) await NiveisDAO.inserirNivel(listaNiveis[i])

  const tabelaTrilhas = await TrilhasDAO.createTableTrilhas()
  for (let i = 0; i < listaTrilhas.length; i++) await TrilhasDAO.inserirTrilha(listaTrilhas[i])
} catch (error) {
  console.log(error)
}
