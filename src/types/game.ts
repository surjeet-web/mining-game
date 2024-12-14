export interface Tool {
  id: string;
  name: string;
  cost: number;
  efficiency: number;
  power: number;
  icon: string;
}

export interface Resource {
  id: string;
  name: string;
  baseValue: number;
  rarity: number;
  color: string;
}

export interface MiningResult {
  resource: Resource;
  amount: number;
  value: number;
}

export interface PlayerState {
  coins: number;
  currentTool: Tool;
  inventory: Map<string, number>;
  miningSpeed: number;
}