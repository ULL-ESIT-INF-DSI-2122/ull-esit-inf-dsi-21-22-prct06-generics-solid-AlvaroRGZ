/**
* Representa la informacion de una persona
*/
export class Edit {
  constructor(private n: string){}

  /**
   * @return nombre de la persona
   */
  getN(): string {
    return this.n;
  }
}
