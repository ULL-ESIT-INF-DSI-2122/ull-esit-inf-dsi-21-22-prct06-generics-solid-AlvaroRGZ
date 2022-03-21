import 'mocha';
import {expect} from 'chai';
import {Collectable, Printable, PrintableColleccion,
        NumericPrintableCollection,
        StringPrintableCollection} from '../src/edit';

describe('Pruebas ejercicio 6', () => {
  describe('Pruebas NumericPrintableCollection', () => {
    const n = new NumericPrintableCollection([1,2,3,4,5]);
    it('default constructor:', () => {
      const d = new NumericPrintableCollection;
      expect(d.getCollection()).to.be.deep.equal([]);
    });
    it('addItem:', () => {
      n.addItem(6)
      expect(n.getCollection()).to.be.deep.equal([1,2,3,4,5,6]);
    });
    it('getItem:', () => {
      expect(n.getItem(3)).to.be.deep.equal(4);
    });
    it('removeItem:', () => {
      n.removeItem(5)
      expect(n.getCollection()).to.be.deep.equal([1,2,3,4,6]);
    });
    it('getNumberOfItems:', () => {
      expect(n.getNumberOfItems()).to.be.deep.equal(5);
    });
    it('print:', () => {
      expect(n.print()).to.be.deep.equal('1,2,3,4,6');
    });
  });
  describe('Pruebas StringPrintableCollection', () => {
    const s = new StringPrintableCollection(['a', 'b', 'c', 'd']);
    it('print:', () => {
      expect(s.print()).to.be.deep.equal('a,b,c,d');
    });
  });
});
