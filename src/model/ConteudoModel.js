import DataTypes from "sequelize";
import sequelize from "../infra/Database.js";
import Tema from "./TemaModel.js";

const Conteudo = sequelize.define(
  "conteudos",
  {
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
    divisao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Conteudo.belongsTo(Tema, {
  constraint: true,
  foreignKey: "idTema",
});

Tema.hasMany(Conteudo, {
  foreignKey: "idTema",
});

export default Conteudo;
