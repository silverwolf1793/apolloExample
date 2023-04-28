import { iContext } from "index";
import { iPersona } from "types";

interface iInput {
  id: number;
  input: {
    nombre?: string;
    apellido?: string;
    email?: string;
    telefono?: string;
  };
}

export const actualizarPersona = async (
  parent: any,
  args: iInput,
  { db }: iContext,
  info: any
) => {
  const { id, input } = args;
  const persona = await db.sequelize.models.persona.findByPk(id);

  if (!persona) {
    throw new Error(`No se encontró una persona con el ID ${id}`);
  }

  await persona.update(input);

  return persona;
};
