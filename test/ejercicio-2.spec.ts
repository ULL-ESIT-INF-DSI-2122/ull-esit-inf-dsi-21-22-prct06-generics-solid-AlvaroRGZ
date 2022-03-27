import 'mocha';
import {expect} from 'chai';
import {SeriesStremeableCollection,
        DocumentalStremeableCollection,
        FilmStremeableCollection,
        Serie, Documental, Film} from '../src/ejercicio-2';

describe('Pruebas ejercicio 2', () => {

  describe('SeriesStremeableCollection', () => {
    const series: Serie[] = [new Serie('lqsa', 15, 18), new Serie('dark', 4, 3), new Serie('friends', 20, 10)];
    const ser = new SeriesStremeableCollection(series);
    it('Hereda getNumOfElements', () => {
      expect(ser.getNumOfElements()).to.be.deep.equal(3);
    });
    it('Implementa searchByName', () => {
      expect(ser.searchByName('lqsa')).to.be.deep.equal([new Serie('lqsa', 15, 18)]);
    });
    it('Implementa searchByYear', () => {
      expect(ser.searchByYear(4)).to.be.deep.equal([new Serie('dark', 4, 3)]);
    });
    it('Implementa searchByTemps', () => {
      expect(ser.searchByTemps(10)).to.be.deep.equal([new Serie('friends', 20, 10)]);
    });
  });

  describe('DocumentalStremeableCollection', () => {
    const documentales: Documental[] = [new Documental('NATGEO', 30, 'Leones'), new Documental('NATGEO', 10, 'Focas'), new Documental('doc', 20, 'ciencia')];
    const doc = new DocumentalStremeableCollection(documentales);
    it('Hereda getNumOfElements', () => {
      expect(doc.getNumOfElements()).to.be.deep.equal(3);
    });
    it('Implementa searchByName', () => {
      expect(doc.searchByName('NATGEO')).to.be.deep.equal([new Documental('NATGEO', 30, 'Leones'), new Documental('NATGEO', 10, 'Focas')]);
    });
    it('Implementa searchByYear', () => {
      expect(doc.searchByYear(4)).to.be.deep.equal([]);
      expect(doc.searchByYear(10)).to.be.deep.equal([new Documental('NATGEO', 10, 'Focas')]);
    });
    it('Implementa searchByTema', () => {
      expect(doc.searchByTema('ciencia')).to.be.deep.equal([new Documental('doc', 20, 'ciencia')]);
    });
  });
  
  describe('FilmStremeableCollection', () => {
    const films: Film[] = [new Film('IT', 25, 150), new Film('ET', 40, 120), new Film('UP', 15, 130)];
    const film = new FilmStremeableCollection(films);
    it('Hereda getNumOfElements', () => {
      expect(film.getNumOfElements()).to.be.deep.equal(3);
    });
    it('Implementa searchByName', () => {
      expect(film.searchByName('UP')).to.be.deep.equal([new Film('UP', 15, 130)]);
    });
    it('Implementa searchByYear', () => {
      expect(film.searchByYear(1)).to.be.deep.equal([]);
      expect(film.searchByYear(40)).to.be.deep.equal([new Film('ET', 40, 120)]);
    });
    it('Implementa searchByDuration', () => {
      expect(film.searchByDuration(150)).to.be.deep.equal([new Film('IT', 25, 150)]);
    });
  });
});
