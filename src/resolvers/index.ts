import { persona } from "./persona";
import { personaEdgy } from "./personaEdgy";
import { crearPersona } from "./crear";
import { eliminarPersona } from "./eliminar";

export const resolvers = {
    Query: {
        persona,
        personaEdgy,
    },

    Mutation: {
        crearPersona,
        eliminarPersona
    }
};
