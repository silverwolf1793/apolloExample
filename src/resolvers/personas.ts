import { iPersona } from "types";
import { iContext } from "../index";

const alternateCase =  (s:string)  => {
  var chars = s.toLowerCase().split("");
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();  
  }
  return chars.join("");
};

export const personas = async (parent: any, args: any, { db }: iContext, info: any) => {
  const personas: iPersona[] = await db.sequelize.models.persona.findAll() as any;

  const personaEdgy = personas.map((persona:iPersona)=>{
    persona.apellido = alternateCase(persona.apellido||"");
    persona.nombre = alternateCase(persona.nombre||"");
    persona.email = alternateCase(persona.email||"");
    persona.telefono = persona.telefono;
    persona.id = persona.id;
  })

  // let nuevoArray:any=[]
  // for(let i=0;i<=personas.length; i++){
  //    alternateCase(personas[i])
  // }
  // return nuevoArray

  return personaEdgy;
};

// export const personas = async (parent: any, args: any, { db }: iContext, info: any) => {
//  return await db.sequelize.models.persona.findAll();
// };
