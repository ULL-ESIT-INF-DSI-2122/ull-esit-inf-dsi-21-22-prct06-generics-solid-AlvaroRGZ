/**
 * Collectable methods
 */
export interface Collectable<T> {
  /**
   * @param x item to add
   */
  addItem(x: T): void;
  /**
   * @param x item to get
   */
  getItem(x: Number): T;
  /**
   * @param x item to delete
   */
  removeItem(x: T): void;
  /**
   * @return number of items
   */
  getNumberOfItems(): number;
}

/**
 * Printable methods
 */
export interface Printable<T> {
  /**
   * returns the representation of a collection
   */
  print(): string;
}

export abstract class PrintableColleccion<X> implements Printable<X>, Collectable<X>{
  /**
   * 
   * @param collection vector of items collected
   */
  constructor(protected collection: X[]){}
  /**
   * @param x item to add
   */
  addItem(x: X): void{
    this.collection.push(x);
  }
  /**
   * @param x item to get
   */
  getItem(index: number): X{
    return this.collection[index];
  }
  /**
   * @param x item to remove
   */
  removeItem(x: X): void{
    this.collection = this.collection.filter((e) => e != x);
  }
    /**
   * @return number of items
   */
  getNumberOfItems(): number{
    return this.collection.length;
  }
  /**
   * @return collection info
   */
  abstract print(): string;
  /**
   * @retur the collection vector
   */
  getCollection(): X[]{
    return this.collection;
  }
}

/**
 * A collection of numbers
 */
export class NumericPrintableCollection extends PrintableColleccion<Number> {
  constructor(x: number[] = []){
    super(x);
  }
  /**
   * @return a string containing each element separated by ','
   */
  print(): string{
    return this.collection.toString();
  }
}

/**
 * A collection of strings
 */
export class StringPrintableCollection extends PrintableColleccion<string> {
  constructor(x: string[]){
    super(x);
  }
  /**
   * @return a string containing each element separated by ','
   */
  print(): string{
    return this.collection.toString();
  }
}