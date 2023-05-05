export interface iDireccion {
  /**
   * El id de la dirección
   * @example 1
   * */
  id?: number;
  /**
   * La calle de la dirección
   * @example "Calle 1"
   * */
  calle?: string;
  /**
   * La colonia de la dirección
   * @example "Colonia 1"
   * */
  colonia?: string;
  /**
   * El código postal de la dirección
   * @example 12345
   * */
  codigoPostal?: Number;
}
