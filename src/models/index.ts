import { Model, ModelCtor } from 'sequelize';
import { mainDB } from '../providers/mainDB';
import Persona from './persona';

export interface iModelFunction {
  (sequelize: mainDB): ModelCtor<Model<any, any>>;
}

interface iModels {
  [key: string]: iModelFunction;
}

const Models: iModels = {
  Persona
};

export default Models;
