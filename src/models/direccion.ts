import { iDireccion } from 'types/interfaces/direccion';
import {
  Column,
  AutoIncrement,
  PrimaryKey,
  Model,
  Table,
  DataType
} from 'sequelize-typescript';

@Table({ tableName: 'direccion', timestamps: false })
export default class Direccion extends Model<iDireccion> {
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.NUMBER, allowNull: false })
  id: number;
  @Column({ type: DataType.STRING, allowNull: true })
  calle: string;
  @Column({ type: DataType.STRING, allowNull: true })
  colonia: string;
  @Column({ type: DataType.NUMBER, allowNull: false, field: 'codigo_postal' })
  codigoPostal: Number;
}
