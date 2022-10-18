import Archtype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archtype {
  energyType: EnergyType;
  static instance: number;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    if (Necromancer.instance === undefined) Necromancer.instance = 0;
    Necromancer.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.instance;
  }
}
