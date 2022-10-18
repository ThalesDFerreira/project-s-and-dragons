import { EnergyType } from '../Energy';

export default abstract class Archetype {
  readonly name: string;
  readonly special: number;
  readonly cost: number;

  constructor(name: string) {
    this.name = name;
    this.cost = 0;
    this.special = 0;
  }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }
}
