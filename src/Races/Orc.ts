import Race from './Race';

export default class Orc extends Race {
  static instance: number;
  maxLife: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 74;
    if (Orc.instance === undefined) Orc.instance = 0;
    Orc.instance += 1;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }

  static override createdRacesInstances(): number {
    return Orc.instance;
  }
}
