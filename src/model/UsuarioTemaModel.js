import DataTypes from "sequelize";
import sequelize from "../infra/Database.js";

const UsuarioTema = sequelize.define(
  "usuarioTema",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
  }
);

export default UsuarioTema;
