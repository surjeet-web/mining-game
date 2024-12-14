import { Tool, Resource } from '../types/game';

export const tools: Tool[] = [
  {
    id: 'basic-pickaxe',
    name: 'Basic Pickaxe',
    cost: 0,
    efficiency: 1,
    power: 1,
    icon: 'Pickaxe'
  },
  {
    id: 'power-drill',
    name: 'Power Drill',
    cost: 1000,
    efficiency: 2,
    power: 2,
    icon: 'Drill'
  },
  {
    id: 'dynamite-pack',
    name: 'Dynamite Pack',
    cost: 5000,
    efficiency: 3,
    power: 4,
    icon: 'Dynamite'
  },
  {
    id: 'excavator',
    name: 'Excavator',
    cost: 25000,
    efficiency: 5,
    power: 8,
    icon: 'Excavator'
  }
];

export const resources: Resource[] = [
  {
    id: 'stone',
    name: 'Stone',
    baseValue: 1,
    rarity: 0.9,
    color: 'gray'
  },
  {
    id: 'copper',
    name: 'Copper',
    baseValue: 5,
    rarity: 0.7,
    color: 'orange'
  },
  {
    id: 'silver',
    name: 'Silver',
    baseValue: 15,
    rarity: 0.5,
    color: 'slate'
  },
  {
    id: 'gold',
    name: 'Gold',
    baseValue: 50,
    rarity: 0.3,
    color: 'yellow'
  },
  {
    id: 'diamond',
    name: 'Diamond',
    baseValue: 200,
    rarity: 0.1,
    color: 'cyan'
  }
];