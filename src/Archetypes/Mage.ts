import Archtype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archtype {
  energyType: EnergyType;
  static instance: number;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    if (Mage.instance === undefined) Mage.instance = 0;
    Mage.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.instance;
  }
}
