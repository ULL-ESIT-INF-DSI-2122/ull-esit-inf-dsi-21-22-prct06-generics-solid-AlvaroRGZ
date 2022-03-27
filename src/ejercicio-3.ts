export class Cifrado {
  constructor(protected cadena_: string, protected clave_: string, protected alfabeto_: string) {
     this.clave_ = this.buildClave(clave_);
  }
  buildClave(clave: string): string {
    const words: number = Math.floor(this.cadena_.length / this.clave_.length);
    const left: number = this.cadena_.length % this.clave_.length;
    return this.clave_.repeat(words) + this.clave_.substring(0, left);
  }

  getClave(): string {
    return this.clave_;
  }

}

export class Cypher extends Cifrado {
  constructor(cadena_: string, clave_: string, alfabeto_: string) {
    super(cadena_, clave_, alfabeto_);
  }
  encriptar(): string {
    let result: string = '';
    for (let i = 0; i < this.cadena_.length; i++) {
      if (!this.alfabeto_.includes(this.cadena_[i])){
        result += this.cadena_[i];
      } else {
      result += this.alfabeto_[(this.alfabeto_.indexOf(this.clave_[i]) + this.alfabeto_.indexOf(this.cadena_[i])+ 1)
                % this.alfabeto_.length];
      }
    }
    return result;
  }
}

export class DeCypher extends Cifrado {
  constructor(cadena_: string, clave_: string, alfabeto_: string) {
    super(cadena_, clave_, alfabeto_);
  }
  desencriptar(): string {
    let result: string = '';
    for (let i = 0; i < this.cadena_.length; i++) {
      if (!this.alfabeto_.includes(this.cadena_[i])){
        result += this.cadena_[i];
      } else {
        const reverse: number = this.alfabeto_.indexOf(this.cadena_[i]) - (this.alfabeto_.indexOf(this.clave_[i]) + 1);
        if (reverse < 0) {
          result += this.alfabeto_[this.alfabeto_.length + reverse];
        } else {
          result += this.alfabeto_[reverse];
        }
      }
    }
    return result;
  }
}