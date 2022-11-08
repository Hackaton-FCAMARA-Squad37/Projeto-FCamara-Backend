import DAO from "./DAO.js";

class TemasDAO extends DAO {
  static async createTableTemas() {
    const query = `
            CREATE TABLE IF NOT EXISTS temas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo VARCHAR
                FOREIGN KEY (trilha_id) REFERENCES trilhas (id) 
                FOREIGN KEY (nivel_id) REFERENCES niveis (id) 
            )
            `;
    const response = await this.createTable(query);
    return response;
  }

  static async inserirTema(tema) {
    const query = "INSERT INTO temas (titulo) VALUES (?)";
    const response = await this.inserir(tema, query);
    return response;
  }

  static async listarTodosTemas() {
    const query = "SELECT * FROM temas";
    const response = await this.listarTodos(query);
    return response;
  }

  static async listarTemasPorId(id) {
    const query = "SELECT * FROM temas WHERE id = ?";
    const response = await this.listarPorId(id, query);
    return response;
  }

  static async deletarTemasPorId(id) {
    const query = "DELETE FROM temas WHERE id = ?";
    const response = this.deletaPorId(id, query);
    return response;
  }
}

export default TemasDAO;
