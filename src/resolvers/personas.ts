import { iContext } from '../index';
import { iPersona } from '../types/interfaces/persona';
import { getFields } from '../utils/getFields';

export const personas = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
): Promise<iPersona[]> => {
  const fields = getFields(info, 'personas');

  const direccionFields = fields.include.find(
    (dir) => dir.name === 'direccion'
  );

  const personas = (await db.sequelize.models.Persona.findAll({
    attributes: fields.attributes,
    include: [
      {
        attributes: direccionFields ? direccionFields.attributes : [],
        model: db.sequelize.models.Direccion,
        as: 'direccion'
      }
    ]
  })) as iPersona[];

  return personas;
};
