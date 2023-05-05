import { iDireccion } from './direccion';

export interface iPersona {
  /**
   * El id de la persona
   */
  id?: number;
  /**
   * El nombre de la persona
   * @example "Juan"
   * */
  nombre?: string;
  /**
   * El apellido de la persona
   * @example "Perez Gómez"
   * */
  apellido?: string;
  /**
   * El email de la persona
   * @example "example@gmail.com"
   * */
  email?: string;
  /**
   * El teléfono de la persona
   * @example "555896448"
   * */
  telefono?: string;
  /**
   * La dirección de la persona
   * @example {
   * id: 1,
   * calle: "Calle 1",
   * colonia: "Colonia 1",
   * codigoPostal: 12345
   * }
   * */
  direccion?: iDireccion;
}
