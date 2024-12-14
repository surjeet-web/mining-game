import { Resource, MiningResult, Tool } from '../types/game';
import { resources } from '../data/gameData';
import { calculateResourceProbability } from './probability';

export function calculateMiningResult(tool: Tool): MiningResult {
  const roll = Math.random();
  const possibleResources = getPossibleResources(roll);
  const resource = selectRandomResource(possibleResources);
  const amount = calculateResourceAmount(tool);
  const value = calculateResourceValue(resource, amount, tool);

  return { resource, amount, value };
}

function getPossibleResources(roll: number): Resource[] {
  const possible = resources.filter(r => roll > r.rarity);
  return possible.length > 0 ? possible : [resources[0]];
}

function selectRandomResource(possibleResources: Resource[]): Resource {
  return possibleResources[Math.floor(Math.random() * possibleResources.length)];
}

function calculateResourceAmount(tool: Tool): number {
  return Math.ceil(Math.random() * tool.power);
}

function calculateResourceValue(resource: Resource, amount: number, tool: Tool): number {
  return Math.ceil(resource.baseValue * amount * tool.efficiency);
}