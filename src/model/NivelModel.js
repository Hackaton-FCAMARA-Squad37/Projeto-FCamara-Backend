import { DataTypes } from "sequelize";
import sequelize from "../infra/Database.js";

const Nivel = sequelize.define(
  "niveis",
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
  },
  {
    timestamps: false,
  }
);

export default Nivel;
