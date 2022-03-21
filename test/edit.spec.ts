import 'mocha';
import {expect} from 'chai';
import {Edit} from '../src/edit';

describe('Pruebas', () => {
  const e = new Edit('x');
  it('Nombre', () => {
    expect(e.getN()).to.be.eql('x');
  });
});
