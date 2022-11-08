import DAO from "./DAO.js";

class ConteudosDAO extends DAO {
  static async createTableConteudos() {
    const query = `
        CREATE TABLE IF NOT EXISTS conteudos(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo VARCHAR,
            tipo VARCHAR,
            duracao VARCHAR,
            link VARCHAR,
            donoConteudo VARCHAR,
            trilha VARCHAR,
            nivel VARCHAR,
            tema VARCHAR,
            tags VARCHAR
        )
        `;
    const response = await this.createTable(query);
    return response;
  }

  static async inserirConteudo(conteudo) {
    const query =
      "INSERT INTO conteudos (titulo, tipo, duracao, link, donoConteudo, trilha, nivel, tags) VALUES (?,?,?,?,?,?,?,?)";
    const response = await this.inserir(conteudo, query);
    return response;
  }

  static async listarTodosConteudos() {
    const query = "SELECT * FROM conteudos";
    const response = await this.listarTodos(query);
    return response;
  }

  static async listarConteudoPorId(id) {
    const query = "SELECT * FROM conteudos WHERE id = ?";
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async atualizarConteudoPorId(id, body) {
    const query =
      "UPDATE conteudos SET (titulo, tipo, duracao, link, donoConteudo, trilha, nivel, tags) = (?,?,?,?,?,?,?,?) WHERE id = ?";
    const response = this.atualizaPorId(body, id, query);
    return response;
  }

  static async deletarConteudoPorId(id) {
    const query = "DELETE FROM conteudos WHERE id = ?";
    const response = this.deletaPorId(id, query);
    return response;
  }
}

export default ConteudosDAO;
