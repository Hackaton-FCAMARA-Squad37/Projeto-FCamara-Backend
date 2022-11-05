import DAO from "./DAO.js";

class DivisoesDAO extends DAO {
  static async createTableConteudos() {
    const query = `
            CREATE TABLE IF NOT EXISTS divisoes(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR,
            )
            `;
    const response = await this.createTable(query);
    return response;
  }

  static async inserirDivisao(divisao) {
    const query = "INSERT INTO trilhas (titulo) VALUES (?)";
    const response = await this.inserir(divisao, query);
    return response;
  }

  static async listarTodasDivisoes() {
    const query = "SELECT * FROM divisoes";
    const response = await this.listarTodos(query);
    return response;
  }

  static async listarDivisaoPorId(id) {
    const query = "SELECT * FROM divisoes WHERE id = ?";
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async deletarDivisaoPorId(id) {
    const query = "DELETE FROM divisoes WHERE id = ?";
    const response = this.deletaPorId(id, query);
    return response;
  }
}

export default DivisoesDAO;
