import Race from './Race';

export default class Halfling extends Race {
  static instance: number;
  maxLife: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLife = 60;
    if (Halfling.instance === undefined) Halfling.instance = 0;
    Halfling.instance += 1;
  }

  get maxLifePoints(): number {
    return this.maxLife;
  }

  static override createdRacesInstances(): number {
    return Halfling.instance;
  }
}
