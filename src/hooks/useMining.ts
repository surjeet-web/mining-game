import { useState } from 'react';
import { Tool, MiningResult, PlayerState } from '../types/game';
import { calculateMiningResult } from '../utils/mining';

export function useMining(
  playerState: PlayerState,
  setPlayerState: React.Dispatch<React.SetStateAction<PlayerState>>
) {
  const [isMining, setIsMining] = useState(false);

  const handleMine = () => {
    if (isMining) return;
    
    setIsMining(true);
    const result = calculateMiningResult(playerState.currentTool);
    
    setTimeout(() => {
      setPlayerState(prev => {
        const newInventory = new Map(prev.inventory);
        const currentAmount = newInventory.get(result.resource.id) || 0;
        newInventory.set(result.resource.id, currentAmount + result.amount);
        
        return {
          ...prev,
          coins: prev.coins + result.value,
          inventory: newInventory,
        };
      });
      setIsMining(false);
    }, playerState.miningSpeed);
  };

  return {
    isMining,
    handleMine,
  };
}