import Archtype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archtype {
  energyType: EnergyType;
  static instance: number;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    if (Warrior.instance === undefined) Warrior.instance = 0;
    Warrior.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instance;
  }
}
