// type T = Serie | Pelicula | Documental;

export interface SearchableByYear<T> {
  searchByYear(year: number): T[];
}

export interface SearchableByName<T> {
  searchByName(name:string): T[];
}

export abstract class BasicStreameableCollection<T> implements SearchableByName<T>, SearchableByYear<T> {
  constructor(protected collection_: T[]){}
  getNumOfElements(): number {
    return this.collection_.length;
  }
  abstract searchByYear(year: number): T[];
  abstract searchByName(name:string): T[];
}

export class SeriesStremeableCollection extends BasicStreameableCollection<Serie> {
  constructor(collection_: Serie[]){
    super(collection_);
  }
  searchByYear(year: number): Serie[] {
    return this.collection_.filter((e) => e.getYear() === year);
  }
  searchByName(name: string): Serie[] {
    return this.collection_.filter((e) => e.getName() === name);
  }
  searchByTemps(n: number): Serie[] {
    return this.collection_.filter((e) => e.getTemps() === n);
  }
}

export class DocumentalStremeableCollection extends BasicStreameableCollection<Documental> {
  constructor(collection_: Documental[]){
    super(collection_);
  }
  searchByYear(year: number): Documental[] {
    return this.collection_.filter((e) => e.getYear() === year);
  }
  searchByName(name: string): Documental[] {
    return this.collection_.filter((e) => e.getName() === name);
  }
  searchByTema(tema: string): Documental[] {
    return this.collection_.filter((e) => e.getTema() === tema);
  }
}

export class FilmStremeableCollection extends BasicStreameableCollection<Film> {
  constructor(collection_: Film[]){
    super(collection_);
  }
  searchByYear(year: number): Film[] {
    return this.collection_.filter((e) => e.getYear() === year);
  }
  searchByName(name: string): Film[] {
    return this.collection_.filter((e) => e.getName() === name);
  }
  searchByDuration(n: number): Film[] {
    return this.collection_.filter((e) => e.getDuracion() === n);
  }
}

abstract class Stremeable {
  constructor(private name_: string, private year_: number){}
  getYear(): number {
    return this.year_;
  }
  getName(): string{
    return this.name_;
  }
}

export class Serie extends Stremeable{
  constructor(name_: string, year_: number, private temps_: number){
    super(name_, year_);
  }
  getTemps(): number {
    return this.temps_;
  }
}

export class Film extends Stremeable{
  constructor(name_: string, year_: number, private duracion_: number){
    super(name_, year_);
  }
  getDuracion(): number {
    return this.duracion_;
  }
}

export class Documental extends Stremeable{
  constructor(name_: string, year_: number, private tema_: string){
    super(name_, year_);
  }
  getTema(): string {
    return this.tema_;
  }
}