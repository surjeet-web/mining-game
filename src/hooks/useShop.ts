import { Tool, PlayerState } from '../types/game';

export function useShop(
  playerState: PlayerState,
  setPlayerState: React.Dispatch<React.SetStateAction<PlayerState>>
) {
  const handlePurchase = (tool: Tool) => {
    if (playerState.coins >= tool.cost) {
      setPlayerState(prev => ({
        ...prev,
        coins: prev.coins - tool.cost,
        currentTool: tool,
        miningSpeed: Math.max(200, 1000 - tool.efficiency * 100),
      }));
    }
  };

  return { handlePurchase };
}