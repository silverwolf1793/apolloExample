import { mainDB } from "../providers/mainDB";
import { DataTypes } from "sequelize";
import { iModelFunction } from "./index";

const Persona: iModelFunction = (db: mainDB) => {
  const Persona = db.sequelize.define(
    "persona",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: DataTypes.STRING,
      telefono: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Persona;
};

export default Persona;
