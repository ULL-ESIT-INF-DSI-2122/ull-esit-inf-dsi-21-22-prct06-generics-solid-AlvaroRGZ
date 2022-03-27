import {UniverseMarvel} from '../ejercicio-1';
export module Marvel {

export const Ironman: UniverseMarvel = new UniverseMarvel(
  'Ironman',
  'soy Ironman',
  'robot',
  70,
  40,
  160,
  90,
  80,
  150,
  'bueno');

export const BlackWidow: UniverseMarvel = new UniverseMarvel(
  'BlackWidow',
  'soy BlackWidow',
  'CaC',
  50,
  50,
  140,
  90,
  80,
  150,
  'malo');

export const GreenArrow: UniverseMarvel = new UniverseMarvel(
  'GreenArrow',
  'soy GreenArrow',
  'aDistancia',
  30,
  40,
  150,
  90,
  80,
  150,
  'malo');

export const Thanos: UniverseMarvel = new UniverseMarvel(
  'Thanos',
  'soy Thanos',
  'magico',
  30,
  40,
  150,
  90,
  80,
  150,
  'malo');
}