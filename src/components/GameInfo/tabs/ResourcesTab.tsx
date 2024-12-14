import React from 'react';
import { resources } from '../../../data/gameData';

export default function ResourcesTab() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-bold text-white mb-3">Available Resources</h3>
        <p className="text-gray-300 mb-6">
          Different resources have varying rarity levels and base values. Rarer resources
          are harder to find but provide better rewards when discovered.
        </p>

        <div className="grid gap-4">
          {resources.map(resource => (
            <div
              key={resource.id}
              className={`bg-${resource.color}-900/30 p-4 rounded-lg`}
            >
              <div className="flex justify-between items-center mb-3">
                <div className="font-bold text-white">{resource.name}</div>
                <div className={`text-${resource.color}-400 font-bold`}>
                  {resource.baseValue} coins
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/20 p-2 rounded">
                  <div className="text-sm opacity-75">Rarity</div>
                  <div className="text-lg">
                    {Math.round((1 - resource.rarity) * 100)}%
                  </div>
                </div>
                <div className="bg-black/20 p-2 rounded">
                  <div className="text-sm opacity-75">Category</div>
                  <div className="text-lg">
                    {resource.rarity <= 0.3 ? 'Rare' : resource.rarity <= 0.6 ? 'Uncommon' : 'Common'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}