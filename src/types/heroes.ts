export type Heroes = {
  id: number
  name: string
  powerstats: {
    intelligence: number
    strength: number
    speed: number
    durability: number
    power: number
    combat: number
  }
  images: {
    xs: string
    sm: string
    md: string
    lg: string
  }
};


export type PowerStats = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};
