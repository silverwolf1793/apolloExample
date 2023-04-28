import { iContext } from "index";
import { iPersona } from "types";

interface iInput {
  input: {
	id: number;
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
	const { input } = args;
	const persona = await db.sequelize.models.persona.findByPk(input.id);

	if (!persona) {
		throw new Error(`No se encontró una persona con el ID ${input.id}`);
	}

	await persona.update(input);

	return persona;
};
