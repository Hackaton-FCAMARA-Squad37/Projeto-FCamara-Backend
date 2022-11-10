import DataTypes from "sequelize";
import sequelize from "../infra/Database.js";
import Nivel from "./NivelModel.js";

const Tema = sequelize.define(
  "temas",
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

Tema.belongsTo(Nivel, {
  constraint: true,
  foreignKey: "idNivel",
});

Nivel.hasMany(Tema, {
  foreignKey: "idNivel",
});

export default Tema;
