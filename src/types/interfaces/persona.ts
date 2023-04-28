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
}
