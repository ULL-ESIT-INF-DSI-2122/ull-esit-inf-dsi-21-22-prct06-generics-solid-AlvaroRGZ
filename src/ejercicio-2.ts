/**
 * Representa la interfaz para buscar un elemento segun el año
 */
export interface SearchableByYear<T> {
  searchByYear(year: number): T[];
}
/**
 * Representa la interfaz para buscar un elemento segun el nombre
 */
export interface SearchableByName<T> {
  searchByName(name:string): T[];
}
/**
 * Representa una coleccion de objetos stremeables abstracta
 */
export abstract class BasicStreameableCollection<T> implements SearchableByName<T>, SearchableByYear<T> {
  /**
   * 
   * @param collection_ colleccion de estremeables
   */
  constructor(protected collection_: T[]){}
  /**
   * 
   * @returns numeros de elementos
   */
  getNumOfElements(): number {
    return this.collection_.length;
  }
  /**
   * 
   * @param year año para filtrar
   */
  abstract searchByYear(year: number): T[];
  /**
   * 
   * @param name nombre para filtrar
   */
  abstract searchByName(name:string): T[];
}
/**
 * Coleccion de series
 */
export class SeriesStremeableCollection extends BasicStreameableCollection<Serie> {
  /**
   * 
   * @param collection_ lista de series
   */
  constructor(collection_: Serie[]){
    super(collection_);
  }
  /**
   * 
   * @param year año para filtrar
   * @returns vector de series filtradas
   */
  searchByYear(year: number): Serie[] {
    return this.collection_.filter((e) => e.getYear() === year);
  }
  /**
   * 
   * @param name nombre para filtrar 
   * @returns vector de series filtradas
   */
  searchByName(name: string): Serie[] {
    return this.collection_.filter((e) => e.getName() === name);
  }
  /**
   * 
   * @param n numero de temporadas para filtrar
   * @returns vector filtrado
   */
  searchByTemps(n: number): Serie[] {
    return this.collection_.filter((e) => e.getTemps() === n);
  }
}

export class DocumentalStremeableCollection extends BasicStreameableCollection<Documental> {
  /**
   * 
   * @param collection_ lista de documentales
   */
  constructor(collection_: Documental[]){
    super(collection_);
  }
  /**
   * 
   * @param year año par filtrar
   * @returns vector filtrado
   */
  searchByYear(year: number): Documental[] {
    return this.collection_.filter((e) => e.getYear() === year);
  }
  /**
   * 
   * @param name nombre para filtrar
   * @returns vector filtrado
   */
  searchByName(name: string): Documental[] {
    return this.collection_.filter((e) => e.getName() === name);
  }
  /**
   * 
   * @param tema tema para filtrar
   * @returns vector filtrado
   */
  searchByTema(tema: string): Documental[] {
    return this.collection_.filter((e) => e.getTema() === tema);
  }
}

export class FilmStremeableCollection extends BasicStreameableCollection<Film> {
  /**
   * 
   * @param collection_ lista de peliculas
   */
  constructor(collection_: Film[]){
    super(collection_);
  }
  /**
   * @param year año para filtrar
   * @returns vector filtrado
   */
  searchByYear(year: number): Film[] {
    return this.collection_.filter((e) => e.getYear() === year);
  }
    /**
   * @param name nombre para filtrar
   * @returns vector filtrado
   */
  searchByName(name: string): Film[] {
    return this.collection_.filter((e) => e.getName() === name);
  }
    /**
   * @param n duracion para filtrar
   * @returns vector filtrado
   */
  searchByDuration(n: number): Film[] {
    return this.collection_.filter((e) => e.getDuracion() === n);
  }
}

/**
 * Representa un objeto estremeable
 */
abstract class Stremeable {
  /**
   * 
   * @param name_ nombre
   * @param year_ año
   */
  constructor(private name_: string, private year_: number){}
  /**
   * 
   * @returns año
   */
  getYear(): number {
    return this.year_;
  }
  /**
   * 
   * @returns nombre
   */
  getName(): string{
    return this.name_;
  }
}

/**
 * estremeable de tipo serie
 */
export class Serie extends Stremeable{
  /**
   * 
   * @param name_ nombre
   * @param year_ año
   * @param temps_ temporadas
   */
  constructor(name_: string, year_: number, private temps_: number){
    super(name_, year_);
  }
  /**
   * 
   * @returns n de teemporadas
   */
  getTemps(): number {
    return this.temps_;
  }
}

/**
 * estremeable de tipo pelicula
 */
export class Film extends Stremeable{
  /**
   * 
   * @param name_ nombre 
   * @param year_ año
   * @param duracion_ duracion 
   */
  constructor(name_: string, year_: number, private duracion_: number){
    super(name_, year_);
  }
  /**
   * 
   * @returns duracion
   */
  getDuracion(): number {
    return this.duracion_;
  }
}

/**
 * estremeable de tipo documental
 */
export class Documental extends Stremeable{
  /**
   * 
   * @param name_ nombre
   * @param year_ año
   * @param tema_ tema
   */
  constructor(name_: string, year_: number, private tema_: string){
    super(name_, year_);
  }
  /**
   * 
   * @returns tema
   */
  getTema(): string {
    return this.tema_;
  }
}