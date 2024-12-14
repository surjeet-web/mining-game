import { Tool, Resource } from '../types/game';

export function calculateResourceProbability(tool: Tool, resource: Resource): number {
  // Base probability from resource rarity
  const baseProbability = 1 - resource.rarity;
  
  // Tool efficiency bonus (diminishing returns)
  const efficiencyBonus = Math.log10(tool.efficiency + 1) * 0.1;
  
  // Calculate final probability with tool bonus
  return Math.min(baseProbability + efficiencyBonus, 1);
}

export function calculateExpectedValue(tool: Tool, resource: Resource): number {
  const probability = calculateResourceProbability(tool, resource);
  const averageAmount = (tool.power + 1) / 2; // Average of random amount
  return probability * resource.baseValue * averageAmount * tool.efficiency;
}