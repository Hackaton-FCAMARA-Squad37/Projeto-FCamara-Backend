import DAO from "./DAO.js";

class NiveisDAO extends DAO {
  static async createTableNiveis() {
    const query = `
            CREATE TABLE IF NOT EXISTS niveis(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR
                
            )
            `;
    const response = await this.createTable(query);
    return response;
  }

  static async inserirNivel(nivel) {
    const query = "INSERT INTO niveis (titulo) VALUES (?)";
    const response = await this.inserir(nivel, query);
    return response;
  }

  static async listarTodosNiveis() {
    const query = "SELECT * FROM niveis";
    const response = await this.listarTodos(query);
    return response;
  }

  static async listarNivelPorId(id) {
    const query = "SELECT * FROM niveis WHERE id = ?";
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async deletarNivelPorId(id) {
    const query = "DELETE FROM niveis WHERE id = ?";
    const response = this.deletaPorId(id, query);
    return response;
  }
}

export default NiveisDAO;
