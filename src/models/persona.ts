import {
  Column,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Model,
  Table,
  ForeignKey,
  HasOne
} from 'sequelize-typescript';
import Direccion from './direccion';
import { iPersona } from 'types';

@Table({ tableName: 'persona', timestamps: false })
export default class Persona extends Model<iPersona> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  nombre: string;
  @Column({ type: DataType.STRING, allowNull: false })
  apellido: string;
  @Column({ type: DataType.STRING, defaultValue: '', allowNull: true })
  email: string;
  @Column({ type: DataType.STRING, defaultValue: '', allowNull: true })
  telefono: string;
  // Este campo sigue siendo necesario puesto que es la llave foránea que relaciona a la persona con su dirección,
  // si no lo agregamos, no podremos hacer la relación entre persona y dirección
  @ForeignKey(() => Direccion)
  @Column({ field: 'fk_direccion' })
  direccionId: number;
  // Nota que este campo no existe en la base de datos, como una columna de la tabla persona
  // pero debemos de poder entregarla dentro de la api como parte de sus resutados, por eso la creamos y
  // por eso mismo no tiene el decorador @Column
  @HasOne(() => Direccion, { foreignKey: 'id', sourceKey: 'direccionId' })
  direccion: Direccion;
}
