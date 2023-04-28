import { iContext } from "../index";
import { iPersona } from "../types/interfaces/persona";

interface iInput {
  id: number;
}

export const eliminarPersona = async (
  parent: any,
  args: iInput,
  { db }: iContext,
  info: any
) => {
  const persona = await db.sequelize.models.persona.findAll({
    where: {
      id: args.id,
    },
  });
  persona[0].destroy();

  return persona[0];
};
