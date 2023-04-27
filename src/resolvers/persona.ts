import { iContext } from "../index";

export const persona = async (
	parent: any,
	args: any,
	{ db }: iContext,
	info: any
	) => {
		return await db.sequelize.models.persona.findAll();
};
