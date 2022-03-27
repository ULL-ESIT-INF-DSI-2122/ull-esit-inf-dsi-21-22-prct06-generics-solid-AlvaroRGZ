import 'mocha';
import {expect} from 'chai';
import {Cifrado, Cypher, DeCypher} from '../src/ejercicio-3';

describe('Pruebas ejercicio 3', () => {
  const c: Cifrado = new Cifrado('HOLAESTOESUNAPRUEBA', 'CLAVE',
                        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  const e: Cifrado = new Cifrado('HOLA ESTO ES UNA PRUEBA', 'CLAVE',
                        'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  describe('Pruebas Cifrado', () => {
    it('Genera la clave del mismo tamaño que la cadena', () => {
      expect(c.getClave()).to.be.deep.equal('CLAVECLAVECLAVECLAV');
    });
    it('Tiene un metodo para obtener la clave', () => {
      expect(e.getClave()).to.be.deep.equal('CLAVECLAVECLAVECLAVECLA');
    });
  });
  const cypher: Cypher = new Cypher('HOLAESTOESUNAPRUEBA', 'CLAVE',
                                    'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  const cypher2: Cypher = new Cypher('HOLA ESTO ES UNA PRUEBA', 'CLAVE',
                                     'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  describe('Pruebas Cypher', () => {

    it('Hereda getClave de Cifrado', () => {
      expect(cypher.getClave()).to.be.deep.equal('CLAVECLAVECLAVECLAV');
    });
    it('Encripta cadenas con simbolos reconocidos', () => {
      expect(cypher.encriptar()).to.be.deep.equal('KAMWJVFPAXXYBMWXPCW');
    });
    it('Al encriptar, los simbolos no reconocidos no se alteran', () => {
      expect(cypher2.encriptar()).to.be.deep.equal('KAMW HEUL HE QRD QÑZHNB');
    });
  });

  describe('Pruebas DeCypher', () => {
    const decypher: DeCypher = new DeCypher(cypher.encriptar(), 'CLAVE',
                                      'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    const decypher2: DeCypher = new DeCypher(cypher2.encriptar(), 'CLAVE',
                                      'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
    it('Hereda getClave de Cifrado', () => {
      expect(decypher.getClave()).to.be.deep.equal('CLAVECLAVECLAVECLAV');
    });
    it('Desncripta cadenas con simbolos reconocidos', () => {
      expect(decypher.desencriptar()).to.be.deep.equal('HOLAESTOESUNAPRUEBA');
    });
    it('Al desencriptar, los simbolos no reconocidos no se alteran', () => {
      expect(decypher2.desencriptar()).to.be.deep.equal('HOLA ESTO ES UNA PRUEBA');
    });
  });
});
