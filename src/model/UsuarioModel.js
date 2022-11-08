import { DataTypes } from "sequelize";
import sequelize from "../infra/database.js";

const Usuario = sequelize.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  xp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Usuario;
