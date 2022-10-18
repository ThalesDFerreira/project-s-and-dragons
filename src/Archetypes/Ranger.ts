import Archtype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archtype {
  energyType: EnergyType;
  static instance: number;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    if (Ranger.instance === undefined) Ranger.instance = 0;
    Ranger.instance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.instance;
  }
}
