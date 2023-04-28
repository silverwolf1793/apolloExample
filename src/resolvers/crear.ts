import { iContext } from "index";
import { iPersona } from "types";

interface iInput {
  input: {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
  };
}

export const crearPersona = async (
  parent: any,
  args: iInput,
  { db }: iContext,
  info: any
) => {
  const persona: iPersona = (await db.sequelize.models.persona.create({
    nombre: args.input.nombre || "",
    apellido: args.input.apellido || "",
    email: args.input.email || "",
    telefono: args.input.telefono || "",
  })) as any;

  return persona;
};
