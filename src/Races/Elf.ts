import Race from './Race';

export default class Elf extends Race {
  static instance: number;
  maxLife: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 99;
    if (Elf.instance === undefined) Elf.instance = 0;
    Elf.instance += 1;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }

  static override createdRacesInstances(): number {
    return Elf.instance;
  }
}
