import React from 'react';
import { tools } from '../../../data/gameData';
import { ToolIcon } from '../../icons/ToolIcon';

export default function ToolsTab() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-bold text-white mb-3">Mining Tools</h3>
        <p className="text-gray-300 mb-6">
          Each tool has unique properties that affect your mining efficiency. Better tools
          increase your chances of finding rare resources and mining larger quantities.
        </p>

        <div className="grid gap-4">
          {tools.map(tool => (
            <div key={tool.id} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-3">
                <ToolIcon name={tool.icon} className="w-6 h-6 text-blue-400" />
                <div>
                  <div className="font-bold text-white">{tool.name}</div>
                  <div className="text-sm text-gray-400">Cost: {tool.cost} coins</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700/50 p-2 rounded">
                  <div className="text-sm text-gray-400">Power</div>
                  <div className="text-lg text-white">{tool.power}x</div>
                </div>
                <div className="bg-gray-700/50 p-2 rounded">
                  <div className="text-sm text-gray-400">Efficiency</div>
                  <div className="text-lg text-white">{tool.efficiency}x</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}