import React, { useState } from 'react';
import { PlayerState } from './types/game';
import { tools } from './data/gameData';
import { Coins } from 'lucide-react';
import { useMining } from './hooks/useMining';
import { useShop } from './hooks/useShop';
import MiningArea from './components/MiningArea';
import Inventory from './components/Inventory';
import Shop from './components/Shop';
import GameInfoButton from './components/GameInfo/GameInfoButton';
import GameInfoModal from './components/GameInfo/GameInfoModal';

function App() {
  const [playerState, setPlayerState] = useState<PlayerState>({
    coins: 0,
    currentTool: tools[0],
    inventory: new Map(),
    miningSpeed: 1000,
  });
  const [isGameInfoOpen, setIsGameInfoOpen] = useState(false);

  const { isMining, handleMine } = useMining(playerState, setPlayerState);
  const { handlePurchase } = useShop(playerState, setPlayerState);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">Crypto Mining Simulator</h1>
            <GameInfoButton onClick={() => setIsGameInfoOpen(true)} />
          </div>
          <div className="flex items-center gap-2 bg-yellow-900/30 px-4 py-2 rounded-full">
            <Coins className="w-5 h-5 text-yellow-400" />
            <span className="font-bold text-yellow-400">{playerState.coins}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <MiningArea
              currentTool={playerState.currentTool}
              onMine={handleMine}
              isMining={isMining}
            />
          </div>
          <div className="space-y-8">
            <Shop
              coins={playerState.coins}
              currentTool={playerState.currentTool}
              onPurchase={handlePurchase}
            />
            <Inventory inventory={playerState.inventory} />
          </div>
        </div>
      </div>

      <GameInfoModal
        isOpen={isGameInfoOpen}
        onClose={() => setIsGameInfoOpen(false)}
      />
    </div>
  );
}

export default App;