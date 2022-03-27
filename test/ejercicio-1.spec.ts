import 'mocha';
import {expect} from 'chai';
import {Fighter, UniversePokemon, UniverseMarvel, UniverseStarWars,
        Fighterdex, Combat} from '../src/ejercicio-1';
import {Pokemon} from '../src/fighters/pokemons';
import {Marvel} from '../src/fighters/Marverl';
import {StarWars} from '../src/fighters/StarWars';


describe('Pruebas del Combate Definitivo', () => {
  it('Creacion de luchadores pokemon y atributos pokemon', () => {
    expect(Pokemon.Luxray).not.to.be.equal(undefined);
    expect(Pokemon.Garchomp.getNombre()).to.be.equal('Garchomp');
  });
  it('Creacion de luchadores Marvel y atributos Marvel', () => {
    expect(Marvel.Ironman).not.to.be.equal(undefined);
    expect(Marvel.BlackWidow.getTipo()).to.be.equal('CaC');
  });
  it('Creacion de luchadores StarWars y atributos StarWars', () => {
    expect(StarWars.Luke).not.to.be.equal(undefined);
    expect(StarWars.Yoda.getNombre()).to.be.equal('Yoda');
  });
  const fd1 = new Fighterdex([Pokemon.Luxray, Marvel.Ironman, StarWars.Luke]);
  it('Creacion de Fighterdex y registro de luchadores', () => {
    expect(fd1.isRegistered(Marvel.Ironman)).to.be.equal(true);
    expect(fd1.isRegistered(Marvel.GreenArrow)).to.be.equal(false);
  });
  it('Obtiene la lista de luchadores', () => {
    expect(fd1.getList()).to.be.deep.equal([Pokemon.Luxray, Marvel.Ironman, StarWars.Luke]);
  });
  describe('Combates entre luchadores', () => {
    it('Combates de luchadores Pokemon', () => {
      const c1 = new Combat(Pokemon.Luxray, Pokemon.Garchomp);
      expect(c1.start()).to.be.equal(Pokemon.Luxray);
    });
    it('Combates de luchadores Marvel', () => {
      const c1 = new Combat(Marvel.GreenArrow, Marvel.Ironman);
      expect(c1.start()).to.be.equal(Marvel.Ironman);
      const c2 = new Combat(Marvel.Ironman, Marvel.BlackWidow);
      expect(c2.start()).to.be.equal(Marvel.BlackWidow);
    });
    it('Combates de luchadores StarWars', () => {
      const c1 = new Combat(StarWars.Luke, StarWars.Yoda);
      expect(c1.start()).to.be.equal(StarWars.Yoda);
    });
    it('Combates de luchadores StarWars y Marvel', () => {
      const c1 = new Combat(StarWars.Luke, Marvel.BlackWidow);
      expect(c1.start()).to.be.equal(StarWars.Luke);
      const c3 = new Combat(Marvel.BlackWidow, Marvel.Ironman);
      expect(c3.start()).to.be.equal(Marvel.BlackWidow);
      const c4 = new Combat(Marvel.GreenArrow, Marvel.BlackWidow);
      expect(c4.start()).to.be.equal(Marvel.GreenArrow);
      const c5 = new Combat(Marvel.Ironman, Marvel.GreenArrow);
      expect(c5.start()).to.be.equal(Marvel.Ironman);
      const c6 = new Combat(Pokemon.Roserade, Marvel.BlackWidow);
      expect(c6.start()).to.be.equal(Pokemon.Roserade);
    });
    it('Combates de luchadores de todos los tipos', () => {
      
      const c1 = new Combat(Marvel.Ironman, Marvel.Ironman);
      expect(c1.start()).to.be.equal(Marvel.Ironman);
      const c2 = new Combat(Marvel.Ironman, Marvel.BlackWidow );
      expect(c2.start()).to.be.equal(Marvel.BlackWidow);
      const c3 = new Combat(Marvel.Ironman, Marvel.GreenArrow);
      expect(c3.start()).to.be.equal(Marvel.Ironman);
      const c4 = new Combat(Marvel.Ironman, Marvel.Thanos);
      expect(c4.start()).to.be.equal(Marvel.Thanos);

      const c5 = new Combat(Marvel.BlackWidow, Marvel.BlackWidow);
      expect(c5.start()).to.be.equal(Marvel.BlackWidow);
      const c6 = new Combat(Marvel.BlackWidow, Marvel.Ironman);
      expect(c6.start()).to.be.equal(Marvel.BlackWidow);
      const c7= new Combat(Marvel.BlackWidow, Marvel.GreenArrow);
      expect(c7.start()).to.be.equal(Marvel.GreenArrow);
      const c8= new Combat(Marvel.BlackWidow, Marvel.Thanos);
      expect(c8.start()).to.be.equal(Marvel.Thanos);

      const c9 = new Combat(Marvel.GreenArrow, Marvel.GreenArrow);
      expect(c9.start()).to.be.equal(Marvel.GreenArrow);
      const c10 = new Combat(Marvel.GreenArrow, Marvel.Ironman);
      expect(c10.start()).to.be.equal(Marvel.Ironman);
      const c11 = new Combat(Marvel.GreenArrow, Marvel.BlackWidow);
      expect(c11.start()).to.be.equal(Marvel.GreenArrow);
      const c12 = new Combat(Marvel.GreenArrow, Marvel.Thanos);
      expect(c12.start()).to.be.equal(Marvel.GreenArrow);

      const c13 = new Combat(Marvel.Thanos, Marvel.Thanos);
      expect(c13.start()).to.be.equal(Marvel.Thanos);
      const c14 = new Combat(Marvel.Thanos, Marvel.GreenArrow);
      expect(c14.start()).to.be.equal(Marvel.GreenArrow);
      const c15 = new Combat(Marvel.Thanos, Marvel.Ironman);
      expect(c15.start()).to.be.equal(Marvel.Thanos);
      const c16 = new Combat(Marvel.Thanos, Marvel.BlackWidow);
      expect(c16.start()).to.be.equal(Marvel.Thanos);
    });
    it('Combates de luchadores restando vida', () => {
      const c1 = new Combat(StarWars.Luke, StarWars.Yoda);
      expect(c1.startRestingHP()).to.be.equal(StarWars.Yoda);
      const c2 = new Combat(Marvel.Thanos, Pokemon.Garchomp);
      expect(c2.startRestingHP()).to.be.equal(Marvel.Thanos);
    });
  });
});