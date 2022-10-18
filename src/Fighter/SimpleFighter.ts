interface SimpleFighter {
  lifePoints: number;
  strength: number;

  attack: (enemy: SimpleFighter) => void;
  receiveDamage: (atackPoints: number) => number;
}

export default SimpleFighter;
