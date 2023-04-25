import { iContext } from '../index';
import { iPersona } from '../types/interfaces/persona';
export const personas = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
) => {
  return await db.sequelize.models.persona.findAll();
};
