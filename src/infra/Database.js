import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Sequelize from "sequelize";

sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";

const sequelize = new Sequelize("orange-evolution", "user", "password", {
  dialect: "sqlite",
  storage: filePath,
});

export default sequelize;
