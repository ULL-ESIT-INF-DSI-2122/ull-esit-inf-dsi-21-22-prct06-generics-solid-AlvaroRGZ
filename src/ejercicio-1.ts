/**
 * Tipos generales entre universos
 */
type type = 'aDistancia' | 'CaC' | 'magico' | 'robot';

/**
 * Tipos de luchadores en Pokemon
 */
type tPokemon = 'agua' | 'electrico' | 'fuego' | 'planta'; 
/**
 * Tipo de luchadores en Marvel
 */
type tMarvel = 'bueno' | 'malo';
/**
 * Tipos de luchadores en StarWars
 */
type tStarWars = 'claro' | 'oscuro';

export class Fighter {
  /**
 *  Representa los datos basicos de un luchador
 *  @param nombre nombre
 *  @param catchingPhrase frase iconica
 *  @param tipo tipo general de luchador
 *  @param ataque ataque
 *  @param defensa defensa
 *  @param vida vida maxima
 *  @param peso peso
 *  @param altura altura
 *  @param velocidad velocidad del luchador
 */
  constructor(
    protected nombre: string,
    protected catchingPhrase: string,
    protected tipo: type,
    protected ataque: number,
    protected defensa: number,
    protected vida: number,
    protected peso: number,
    protected altura: number,
    protected velocidad: number){}

  /**
   * @returns el nombre del luchador
   */
  getNombre(): string {
    return this.nombre;
  }
    /**
   * @returns el tipo del luchador
   */
  getTipo(): type {
    return this.tipo;
  }
    /**
   * @returns la vida del luchador
   */
  getVida(): number {
    return this.vida;
  }
    /**
   * @returns el ataque del luchador
   */
  getAtaque(): number {
    return this.ataque;
  }
    /**
   * @returns la defensa del luchador
   */
  getDefensa(): number {
    return this.defensa;
  }
    /**
   * @returns la frase iconica del luchador
   */
  getCatchingPhrase(): string {
    return this.catchingPhrase;
  }
    /**
     *  @param daño daño inflingido
     *  le resta a la vida el daño infligido
   */
  restVida(daño: number ) {
    this.vida -= daño;
  }
    /**
   * @param vida actualiza la vida a ese valor
   */
  setVida(vida: number ) {
    this.vida = vida;
  }
  
  /**
   * Muestra los datos del luchador
   * */
  showStatus(){
    console.log(this.nombre.toUpperCase(), ' : ', this.tipo);
    console.log('HP: ', this.vida);
  }
}

/**
 * Representa a un luchador del universo Pokemon
 * @param tipologia Tipo concreto de ese pokemon
 */
export class UniversePokemon extends Fighter {
  /**
 *  Representa los datos basicos de un luchador
 *  @param nombre nombre
 *  @param catchingPhrase frase iconica
 *  @param tipo tipo general de luchador
 *  @param ataque ataque
 *  @param defensa defensa
 *  @param vida vida maxima
 *  @param peso peso
 *  @param altura altura
 *  @param velocidad velocidad del luchador
 *  @param tipologia tipo de pokemon
 */
  constructor(
    nombre: string,
    catchingPhrase: string,
    tipo: type,
    ataque: number,
    defensa: number,
    vida: number,
    peso: number,
    altura: number,
    velocidad: number,
    private tipologia: tPokemon){
    catchingPhrase += ' y soy un pokemon';    
    super(nombre, catchingPhrase, tipo, ataque, defensa, 
            vida, peso, altura, velocidad);
    }
}

/**
 * Representa a un luchador del universo Marvel
 * @param bando de ese luchador
 */
export class UniverseMarvel extends Fighter {
    /**
 *  Representa los datos basicos de un luchador
 *  @param nombre nombre
 *  @param catchingPhrase frase iconica
 *  @param tipo tipo general de luchador
 *  @param ataque ataque
 *  @param defensa defensa
 *  @param vida vida maxima
 *  @param peso peso
 *  @param altura altura
 *  @param velocidad velocidad del luchador
 *  @param bando bando de luchador 
 */
  constructor(
    nombre: string,
    catchingPhrase: string,
    tipo: type,
    ataque: number,
    defensa: number,
    vida: number,
    peso: number,
    altura: number,
    velocidad: number,
    private bando: tMarvel){
    
      catchingPhrase += ' y soy del universo Marvel'; 
      super(nombre, catchingPhrase, tipo, ataque, defensa, 
        vida, peso, altura, velocidad);   
    }
}

/**
 * Representa a un luchador del universo StarWars
 * @param lado del luchador
 */
export class UniverseStarWars extends Fighter {
    /**
 *  Representa los datos basicos de un luchador
 *  @param nombre nombre
 *  @param catchingPhrase frase iconica
 *  @param tipo tipo general de luchador
 *  @param ataque ataque
 *  @param defensa defensa
 *  @param vida vida maxima
 *  @param peso peso
 *  @param altura altura
 *  @param velocidad velocidad del luchador
 *  @param lado tlado del luchador
 */
  constructor(
    nombre: string,
    catchingPhrase: string,
    tipo: type,
    ataque: number,
    defensa: number,
    vida: number,
    peso: number,
    altura: number,
    velocidad: number,
    private lado: tStarWars){
      catchingPhrase += ' y soy del universo StarWars';  
      super(nombre, catchingPhrase, tipo, ataque, defensa, 
        vida, peso, altura, velocidad);  
    }
}

/**
 * Registra los luchadores permitidos para el conbate
 */
export class Fighterdex {
  /**
   * 
   * @param list_ vector de luchadores permitidos
   */
  constructor(private list_: Fighter[]){}
  /**
   * 
   * @param p luchador a buscar en la lista
   * @returns si esta o no en la lista
   */
  isRegistered(p: Fighter): boolean {
    return this.list_.includes(p);
  }
  /**
   * 
   * @returns la lista de candidatos
   */
  getList(): Fighter[] {
    return this.list_;
  }
}

/**
 * Representa y simula el combate entre dos luchadores
 */
export class Combat {
  /**
   * 
   * @param p1 luchador 1
   * @param p2 luchador 2
   */
  constructor(private p1: Fighter, private p2: Fighter){}
              // private candidates: Pokedex) {

  /**
   * 
   * @param p1 atacante
   * @param p2 defensor
   * @returns daño real del ataque
   */
  dañoReal(p1: Fighter, p2: Fighter) {
    let efectividad: number = 1;
    const fuerteContraCaC: type[] = ['aDistancia'];
    const debilContraCaC: type[] = ['robot'];

    const fuerteContraADistancia: type[] = ['robot', 'magico'];
    const debilContraADistancia: type[] = ['CaC'];

    const fuerteContraMagico: type[] = ['robot'];
    const debilContraMagico: type[] = ['CaC'];

    const fuerteContraRobot: type[] = ['CaC'];
    const debilContraRobot: type[] = ['aDistancia'];
    
    if (p1.getTipo() === p2.getTipo()) {
      return 50 * (p1.getAtaque() / p2.getDefensa()) * 0.5;
    }

    switch (p1.getTipo()) {
      case 'CaC': {
        if (fuerteContraCaC.includes(p2.getTipo())) {
          efectividad = 0.5;
        } else if (debilContraCaC.includes(p2.getTipo())) {
          efectividad = 2;
        }
        break;
      }
      case 'aDistancia': {
        if (fuerteContraADistancia.includes(p2.getTipo())) {
          efectividad = 0.5;
        } else if (debilContraADistancia.includes(p2.getTipo())) {
          efectividad = 2;
        }
        break;
      }
      case 'magico': {
        if (fuerteContraMagico.includes(p2.getTipo())) {
          efectividad = 0.5;
        } else if (debilContraMagico.includes(p2.getTipo())) {
          efectividad = 2;
        }
        break;
      }
      case 'robot': {
        if (fuerteContraRobot.includes(p2.getTipo())) {
          efectividad = 0.5;
        } else if (debilContraRobot.includes(p2.getTipo())) {
          efectividad = 2;
        }
      }
      break;
    }
    return Math.floor(50 * (p1.getAtaque() / p2.getDefensa()) * efectividad);
  }

  /**
   * Muestra el estado del combate
   */
  showCombatStatus(){
    console.log(this.p1.getNombre(), '              ', this.p2.getNombre());
    console.log(this.p1.getTipo(), '              ', this.p2.getTipo());
    console.log(this.p1.getVida(), '      HP      ', this.p2.getVida());
  }
  /**
   * 
   * @param p muestra a P el ganador
   */
  showWinner(p: Fighter){
    console.log('----------------------------------------------');
    console.log('WINS!');
    p.showStatus();
  }
  /**
   * Simlua el combate por turnos, lo hace sin modificar la vida de los contricantes.
   * @returns el luchador ganador
   */
  start(): Fighter{
    let attacker: Boolean = true;
    let p1Wins: Boolean = false;
    let HP1: number = this.p1.getVida();
    let HP2: number = this.p2.getVida();

    console.log('----------------------------------------------');
    console.log(this.p1.getNombre(), '      VS      ', this.p2.getNombre());
    console.log(this.p1.getVida(), '      HP      ', this.p2.getVida());
    console.log('----------------------------------------------');

    while ( HP1 > 0 && HP2 > 0) {
      if (attacker) {
        if ((HP2 < this.dañoReal(this.p1, this.p2))) {
          HP2 = 0;
          p1Wins = true;
        } else {
          HP2 -= this.dañoReal(this.p1, this.p2);
        }
      } else {
        if ((HP1 < this.dañoReal(this.p2, this.p1))) {
          HP1 = 0;
          p1Wins = false;
        } else {
          HP1 -= this.dañoReal(this.p2, this.p1);
        }
      }
      this.showCombatStatus();
      attacker = !attacker;
    }
    
    if (p1Wins) {
      this.showWinner(this.p1);
      return this.p1;
    } else {
      this.showWinner(this.p2);
      return this.p2;
    }
  }
    /**
   * Simlua el combate por turnos, lo hace modificando la vida de los contricantes.
   * @returns el luchador ganador
   */
  startRestingHP(): Fighter{
    let attacker: Boolean = true;
    let p1Wins: Boolean = false;

    console.log('----------------------------------------------');
    console.log(this.p1.getNombre(), '      VS      ', this.p2.getNombre());
    console.log(this.p1.getVida(), '      HP      ', this.p2.getVida());
    console.log('----------------------------------------------');

    while ( this.p1.getVida() > 0 && this.p2.getVida() > 0) {
      if (attacker) {
        console.log(this.p1.getCatchingPhrase());
        if ((this.p2.getVida() < this.dañoReal(this.p1, this.p2))) {
          this.p2.setVida(0);
          p1Wins = true;
        } else {
          this.p2.restVida(this.dañoReal(this.p1, this.p2));
        }
      } else {
        console.log(this.p2.getCatchingPhrase());
        if ((this.p1.getVida() < this.dañoReal(this.p2, this.p1))) {
          this.p1.setVida(0);
          p1Wins = false;
        } else {
          this.p1.restVida(this.dañoReal(this.p2, this.p1));
        }
      }
      this.showCombatStatus();
      attacker = !attacker;
    }
    
    if (p1Wins) {
      this.showWinner(this.p1);
      return this.p1;
    } else {
      this.showWinner(this.p2);
      return this.p2;
    }
  }
}
