type type = 'aDistancia' | 'CaC' | 'magico' | 'robot';
type tPokemon = 'agua' | 'electrico' | 'fuego' | 'planta'; 
type tMarvel = 'bueno' | 'malo';
type tStarWars = 'claro' | 'oscuro';

export class Fighter {
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

  getNombre(): string {
    return this.nombre;
  }
  getTipo(): type {
    return this.tipo;
  }
  getVida(): number {
    return this.vida;
  }
  getAtaque(): number {
    return this.ataque;
  }
  getDefensa(): number {
    return this.defensa;
  }
  restVida(daño: number ) {
    this.vida -= daño;
  }
  setVida(vida: number ) {
    this.vida = vida;
  }
    
  showStatus(){
    console.log(this.nombre.toUpperCase(), ' : ', this.tipo);
    console.log('HP: ', this.vida);
  }
}

export class UniversePokemon extends Fighter {
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
    
    super(nombre, catchingPhrase, tipo, ataque, defensa, 
            vida, peso, altura, velocidad);
      catchingPhrase += ' y soy un pokemon';    
    }
}

export class UniverseMarvel extends Fighter {
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
    
      super(nombre, catchingPhrase, tipo, ataque, defensa, 
        vida, peso, altura, velocidad);
      catchingPhrase += ' y soy del universo Marvel';    
    }
}

export class UniverseStarWars extends Fighter {
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
    
      super(nombre, catchingPhrase, tipo, ataque, defensa, 
        vida, peso, altura, velocidad);
      catchingPhrase += ' y soy del universo StarWars';    
    }
}

export class Fighterdex {
  constructor(private list_: Fighter[]){}
  isRegistered(p: Fighter): boolean {
    return this.list_.includes(p);
  }
  getList(): Fighter[] {
    return this.list_;
  }
}

export class Combat {
  constructor(private p1: Fighter, private p2: Fighter){}
              // private candidates: Pokedex) {

  dañoReal(p1: Fighter, p2: Fighter) {
    let efectividad: number = 0;
    const fuerteContraCaC: type[] = ['aDistancia'];
    const debilContraCaC: type[] = ['robot'];

    const fuerteContraADistancia: type[] = ['robot', 'magico'];
    const debilContraADistancia: type[] = ['CaC'];

    const fuerteContraMagico: type[] = ['robot'];
    const debilContraMagico: type[] = ['CaC'];

    const fuerteContraRobot: type[] = ['CaC'];
    const debilContraRobot: type[] = ['aDistancia'];

    console.log('T1 = ', p1.getTipo());
    console.log('T2 = ', p2.getTipo());
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

  showCombatStatus(){
    console.log(this.p1.getNombre(), '              ', this.p2.getNombre());
    console.log(this.p1.getTipo(), '              ', this.p2.getTipo());
    console.log(this.p1.getVida(), '      HP      ', this.p2.getVida());
  }

  showWinner(p: Fighter){
    console.log('----------------------------------------------');
    console.log('WINS!');
    p.showStatus();
  }

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
  startRestingHP(): Fighter{
    let attacker: Boolean = true;
    let p1Wins: Boolean = false;

    console.log('----------------------------------------------');
    console.log(this.p1.getNombre(), '      VS      ', this.p2.getNombre());
    console.log(this.p1.getVida(), '      HP      ', this.p2.getVida());
    console.log('----------------------------------------------');

    while ( this.p1.getVida() > 0 && this.p2.getVida() > 0) {
      if (attacker) {
        if ((this.p2.getVida() < this.dañoReal(this.p1, this.p2))) {
          this.p2.setVida(0);
          p1Wins = true;
        } else {
          this.p2.restVida(this.dañoReal(this.p1, this.p2));
        }
      } else {
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