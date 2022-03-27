/**
 * Representa un objeto inicializado para realizar operaciones relacionadas
 * con el cifrado
 */
export class Cifrado {
  /**
   * 
   * @param cadena_ cadena a procesar
   * @param clave_ clave
   * @param alfabeto_ alfabeto reconicido
   */
  constructor(protected cadena_: string, protected clave_: string, protected alfabeto_: string) {
     this.clave_ = this.buildClave(clave_);
  }
  /**
   * 
   * @param clave clave a procesar
   * @returns nueva clave del tamaño de la cadena
   */
  buildClave(clave: string): string {
    const words: number = Math.floor(this.cadena_.length / this.clave_.length);
    const left: number = this.cadena_.length % this.clave_.length;
    return this.clave_.repeat(words) + this.clave_.substring(0, left);
  }
  /**
   * 
   * @returns la clave utilizada
   */
  getClave(): string {
    return this.clave_;
  }

}

/**
 * Representa una clase para encriptar cadenas
 */
export class Cypher extends Cifrado {
  /**
   * 
   * @param cadena_ cadena a encriptar
   * @param clave_ clave utilizada
   * @param alfabeto_ alfabeto reconocido
   */
  constructor(cadena_: string, clave_: string, alfabeto_: string) {
    super(cadena_, clave_, alfabeto_);
  }
  /**
   * 
   * @returns la cadena del mismo tamaño pero encriptada con Caesar
   */
  encriptar(): string {
    let result: string = '';
    for (let i = 0; i < this.cadena_.length; i++) {
      if (!this.alfabeto_.includes(this.cadena_[i])){
        // si no esta en el alfabeto se queda igual
        result += this.cadena_[i];
      } else {
        // te obtiene el caracter en la posicion de la suma de posiciones del caracter i de
        // la clave en la cadena
      result += this.alfabeto_[(this.alfabeto_.indexOf(this.clave_[i]) + this.alfabeto_.indexOf(this.cadena_[i])+ 1)
                % this.alfabeto_.length];
      }
    }
    return result;
  }
}

/**
 * Representa una clase para desencriptar cadenas
 */
export class DeCypher extends Cifrado {
    /**
   * 
   * @param cadena_ cadena a desencriptar
   * @param clave_ clave utilizada
   * @param alfabeto_ alfabeto reconocido
   */
  constructor(cadena_: string, clave_: string, alfabeto_: string) {
    super(cadena_, clave_, alfabeto_);
  }
  /**
   * 
   * @returns la cadena desencriptada 
   */
  desencriptar(): string {
    let result: string = '';
    for (let i = 0; i < this.cadena_.length; i++) {
      if (!this.alfabeto_.includes(this.cadena_[i])){
        // si no esta en el alfabeto se queda igual
        result += this.cadena_[i];
      } else {
        // calculamos la posicion en el vector
        const reverse: number = this.alfabeto_.indexOf(this.cadena_[i]) - (this.alfabeto_.indexOf(this.clave_[i]) + 1);
        if (reverse < 0) {
          // si es negativa, se la restamos al tamaño para obtener la posicion circular
          result += this.alfabeto_[this.alfabeto_.length + reverse];
        } else {
          // si no simplemente usamos esa posicion
          result += this.alfabeto_[reverse];
        }
      }
    }
    return result;
  }
}