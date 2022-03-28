import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/ejercicio-pe102';

const s = new Set<number>();
describe('Pruebas PrimeNumber', () => {
  const p: PrimeNumber = PrimeNumber.getPrimeNumber();
  it('Creacion mediante metodo publico', () => {
    expect(p).not.to.be.equal(undefined);
    expect(p.getPNumbers()).to.be.deep.equal(new Set<number>());
  });
  it('Calculo de los nprimos entre 7 y 30', () => {
    p.getNtoMPNumbers(7, 17);
    s.clear();
    s.add(7);
    s.add(11);
    s.add(13);
    s.add(17);
    expect(p.getPNumbers()).to.be.deep.equal(s);
  });
  it('Calculo de los nprimos entre 0 y 15', () => {
    p.getNtoMPNumbers(0, 7);
    s.clear();
    s.add(2);
    s.add(3);
    s.add(5);
    s.add(7);
    expect(p.getPNumbers()).to.be.deep.equal(s);
  });
});