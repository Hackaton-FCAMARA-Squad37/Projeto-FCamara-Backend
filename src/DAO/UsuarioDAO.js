import DAO from './DAO.js'

class UsuariosDAO extends DAO {
  static async createTableUsuarios () {
    const query = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            senha VARCHAR
        )
        `
    const response = await this.createTable(query)
    return response
  };

  static async inserirUsuario (usuario) {
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?,?,?)'
    const response = await this.inserir(usuario, query)
    return response
  };

  static async listarTodosUsuarios () {
    const query = 'SELECT * FROM usuarios'
    const response = await this.listarTodos(query)
    return response
  };

  static async listarUsuarioPorId (id) {
    const query = 'SELECT * FROM usuarios WHERE id = ?'
    const response = await this.listarPorId(id, query)
    return response
  };

  static async atualizarUsuarioPorId (id, body) {
    const query = 'UPDATE usuarios SET (nome, email, senha) = (?, ?, ?) WHERE id = ?'
    const response = this.atualizaPorId(body, id, query)
    return response
  };

  static async deletarUsuarioPorId (id) {
    const query = 'DELETE FROM usuarios WHERE id = ?'
    const response = this.deletaPorId(id, query)
    return response
  };
}

export default UsuariosDAO
