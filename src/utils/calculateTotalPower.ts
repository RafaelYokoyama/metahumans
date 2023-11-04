type PowerStats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
};

export const calculateTotalPower = ({
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
}: PowerStats): number => {
  return intelligence + strength + speed + durability + power + combat;
};
