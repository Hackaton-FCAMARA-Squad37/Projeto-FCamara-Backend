import DataTypes from "sequelize";
import sequelize from "../infra/Database.js";
import Nivel from "./NivelModel.js";
import Usuario from "./UsuarioModel.js";
import UsuarioTema from "./UsuarioTemaModel.js";

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

Usuario.belongsToMany(Tema, {
  through: { model: UsuarioTema },
  foreignKey: "idUsuario",
  constraints: true,
});

Tema.belongsToMany(Usuario, {
  through: { model: UsuarioTema },
  foreignKey: "idTema",
  constraints: true,
});

export default Tema;
