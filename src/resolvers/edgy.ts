import { iPersona } from "types";
import { iContext } from "../index";

const edgyCase = (    s:string   )=>{
  const edgyString = s.split('').map((letra, index) => {
    return index % 2 === 0 ? letra.toUpperCase() : letra.toLowerCase();
  }).join('');
  return edgyString;
}

export const personaEdgy = async (parent: any, args: any, { db }: iContext, info: any) => {
  const personas:iPersona[] = await db.sequelize.models.persona.findAll() as any;

  const edgyString = personas.map((persona: iPersona, index):iPersona => {
    persona.apellido = edgyCase( persona.apellido || "" )
    persona.nombre = edgyCase( persona.nombre || "" )
    persona.email = edgyCase( persona.email || "" )
    return {
      id:persona.id,
      nombre:persona.nombre,
      apellido: persona.apellido,
      email : persona.email,
      telefono : persona.telefono,
    }
  });
  return edgyString;
};
