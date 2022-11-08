import DAO from "./DAO.js";

class TrilhasDAO extends DAO {
  static async createTableTrilhas() {
    const query = `
            CREATE TABLE IF NOT EXISTS trilhas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR
            )
            `;
    const response = await this.createTable(query);
    return response;
  }

  static async inserirTrilha(trilha) {
    const query = "INSERT INTO trilhas (titulo) VALUES (?)";
    const response = await this.inserir(trilha, query);
    return response;
  }

  static async listarTodasTrilhas() {
    const query = "SELECT * FROM trilhas";
    const response = await this.listarTodos(query);
    return response;
  }

  static async listarTrilhaPorId(id) {
    const query = "SELECT * FROM trilhas WHERE id = ?";
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async deletarTrilhaPorId(id) {
    const query = "DELETE FROM trilhas WHERE id = ?";
    const response = this.deletaPorId(id, query);
    return response;
  }
}

export default TrilhasDAO;
