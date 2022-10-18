import Race from './Race';

export default class Dwarf extends Race {
  static instance: number;
  maxLife: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 80;
    if (Dwarf.instance === undefined) Dwarf.instance = 0;
    Dwarf.instance += 1;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }

  static override createdRacesInstances(): number {
    return Dwarf.instance;
  }
}
