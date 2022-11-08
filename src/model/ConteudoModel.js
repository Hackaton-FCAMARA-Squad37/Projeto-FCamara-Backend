import DataTypes from "sequelize";
import sequelize from "../infra/database.js";
import Tema from "./temaModel.js";

const Conteudo = sequelize.define("conteudos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  donoConteudo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Conteudo.belongsTo(Tema, {
  constraint: true,
  foreignKey: "idTema",
});

Tema.hasMany(Conteudo, {
  foreignKey: "idTema",
});

export default Conteudo;
