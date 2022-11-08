import { DataTypes } from "sequelize";
import sequelize from "../infra/database.js";

const Nivel = sequelize.define("niveis", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Nivel;
