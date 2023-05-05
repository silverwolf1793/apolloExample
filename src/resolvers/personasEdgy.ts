import { iContext } from '../index';
import { iPersona } from '../types/interfaces/persona';
import { characterAlternator } from '../utils/characterAlternator';
export const personasEdgy = async (
  parent: any,
  args: any,
  { db }: iContext,
  info: any
) => {
  const personas: iPersona[] =
    (await db.sequelize.models.Persona.findAll()) as any;
  const personasEdgy: iPersona[] = [];
  personas.forEach((persona: iPersona) => {
    personasEdgy.push({
      nombre: characterAlternator(persona.nombre || ''),
      apellido: characterAlternator(persona.apellido || ''),
      email: characterAlternator(persona.email || ''),
      id: persona.id,
      telefono: characterAlternator(persona.telefono || '')
    });
  });
  return personasEdgy;
};
