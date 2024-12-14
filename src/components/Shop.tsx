import React from 'react';
import { Tool } from '../types/game';
import { tools } from '../data/gameData';
import { ToolIcon } from './icons/ToolIcon';

interface Props {
  coins: number;
  currentTool: Tool;
  onPurchase: (tool: Tool) => void;
}

export default function Shop({ coins, currentTool, onPurchase }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Tool Shop</h2>
      <div className="grid gap-4">
        {tools.map(tool => {
          const isOwned = tool.id === currentTool.id;
          const canAfford = coins >= tool.cost;
          
          return (
            <button
              key={tool.id}
              onClick={() => onPurchase(tool)}
              disabled={isOwned || !canAfford}
              className={`
                p-4 rounded-lg flex items-center justify-between
                ${isOwned 
                  ? 'bg-green-900/50 text-green-400' 
                  : canAfford
                    ? 'bg-blue-900/50 text-white hover:bg-blue-800/50'
                    : 'bg-gray-900/50 text-gray-400'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <ToolIcon name={tool.icon} className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-bold">{tool.name}</div>
                  <div className="text-sm opacity-75">
                    Power: {tool.power} | Efficiency: {tool.efficiency}x
                  </div>
                </div>
              </div>
              <div>
                {isOwned ? (
                  <span className="text-sm font-bold">OWNED</span>
                ) : (
                  <span className="text-sm font-bold">{tool.cost} coins</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}