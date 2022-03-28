

/**
 * Representa una clase creadora de numeros primos
 */
export class PrimeNumber implements Iterable<number>{
  private pNumbers: Set<number>;
  private static PrimeNumber: PrimeNumber;
  /**
   * Constructor privado para respetar el patron singleton
   */
  private constructor() {
    //this.pNumbers;
    this.pNumbers = new Set<number>();
  }
  /**
   * 
   * @returns una instancia de PrimeNumber, que es creada si nunca se ha instanciado la clase
   */
  public static getPrimeNumber(): PrimeNumber {
    if (!PrimeNumber.PrimeNumber) {
      PrimeNumber.PrimeNumber = new PrimeNumber();
    }
    return PrimeNumber.PrimeNumber;
  }

  /**
   * 
   * @param ini inicio del rango
   * @param fin fin del rango
   * genera los numeros primos incluidos en ese rango
   */
  getNtoMPNumbers(ini: number, fin: number){
    this.resetNumbers();
    for (let i:number = ini; i < fin; i++) {
      let prime: boolean = true;
      if (i == 0 || i == 1 || i == 4) {
        prime = false;
      }
      for(let j:number = 2; j < i/2; j++){
        if(i % j === 0) prime = false;
      }
      if (prime) {
        this.pNumbers.add(i);
      }
    }
  }
  /**
   * 
   * @param fin numero de numeros primos a calcular
   * desde el 0
   * 
   */
  get0ToNNumbers(fin: number){
    this.resetNumbers();
    for (let i:number = 0; i < fin; i++) {
      let prime: boolean = true;
      if (i == 0 || i == 1 || i == 4) {
        prime = false;
      }
      for(let j:number = 2; j < i/2; j++){
        if(i % j === 0) prime = false;
      }
      if (prime) {
        this.pNumbers.add(i);
      }
    }
  }
  /**
   * obtiene el conjunto de numeros primos
   */
  getPNumbers(): Set<number>{
    return this.pNumbers;
  }

  resetNumbers(){
    this.pNumbers.clear;
  }
  [Symbol.iterator](): Iterator<number> {
    return this.pNumbers.values();
  }
}
/* 
const p = PrimeNumber.getPrimeNumber();
p.get0ToNNumbers(15);
console.log(p.getPNumbers());
//console.log(p.iterator(4));*/
