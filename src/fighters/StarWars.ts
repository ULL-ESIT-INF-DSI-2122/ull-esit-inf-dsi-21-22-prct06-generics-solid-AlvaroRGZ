import {UniverseStarWars} from '../ejercicio-1';
export module StarWars{

export const Luke: UniverseStarWars = new UniverseStarWars(
  'Luke',
  'soy Luke',
  'CaC',
  50,
  40,
  180,
  90,
  80,
  150,
  'claro');

export const DarthVader: UniverseStarWars = new UniverseStarWars(
  'DarthVader',
  'soy DarthVader',
  'aDistancia',
  80,
  60,
  240,
  90,
  80,
  150,
  'oscuro');

export const Yoda: UniverseStarWars = new UniverseStarWars(
  'Yoda',
  'soy Yoda',
  'magico',
  50,
  50,
  150,
  90,
  80,
  150,
  'claro');
}