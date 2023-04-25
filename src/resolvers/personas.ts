import { iPersona } from "types";
import { iContext } from "../index";
const prueba = (    s:string   )=>{
  const personaedgy = s.split('').map((letra, index) => {
    return index % 2 === 0 ? letra.toUpperCase() : letra.toLowerCase();
  }).join('');
  return personaedgy;
}

export const personas = async (parent: any, args: any, { db }: iContext, info: any) => {
  const personas:iPersona[] = await db.sequelize.models.persona.findAll() as any;
  const personaedgy = personas.map((persona: iPersona, index):iPersona => {
    persona.apellido = prueba( persona.apellido || "" )
    persona.nombre = prueba( persona.nombre || "" )
    persona.email = prueba( persona.email || "" )
    return {
      id:persona.id,
      nombre:persona.nombre,
      apellido: persona.apellido,
      email : persona.email,
      telefono : persona.telefono,
    }
  });
  return personaedgy;
};
