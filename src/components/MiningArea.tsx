import React from 'react';
import { Tool, MiningResult } from '../types/game';
import { calculateMiningResult } from '../utils/mining';
import { ToolIcon } from './icons/ToolIcon';

interface Props {
  currentTool: Tool;
  onMine: (result: MiningResult) => void;
  isMining: boolean;
}

export default function MiningArea({ currentTool, onMine, isMining }: Props) {
  const handleMine = () => {
    const result = calculateMiningResult(currentTool);
    onMine(result);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-gradient-to-b from-stone-700 to-stone-900 rounded-lg shadow-xl min-h-[400px]">
      <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
      
      <button
        onClick={handleMine}
        disabled={isMining}
        className={`relative z-10 transform transition-transform ${
          isMining ? 'animate-bounce' : 'hover:scale-105'
        } bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-full shadow-lg flex items-center gap-3`}
      >
        <ToolIcon name={currentTool.icon} className="w-6 h-6" />
        {isMining ? 'Mining...' : 'Mine!'}
      </button>

      <div className="mt-8 text-white text-center relative z-10">
        <p className="text-lg">Current Tool: {currentTool.name}</p>
        <p className="text-sm text-yellow-400">Power: {currentTool.power} | Efficiency: {currentTool.efficiency}x</p>
      </div>
    </div>
  );
}