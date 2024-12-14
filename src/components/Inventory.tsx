import React from 'react';
import { resources } from '../data/gameData';
import ResourceDisplay from './ResourceDisplay';

interface Props {
  inventory: Map<string, number>;
}

export default function Inventory({ inventory }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Inventory</h2>
      <div className="grid grid-cols-2 gap-4">
        {resources.map(resource => (
          <ResourceDisplay
            key={resource.id}
            resource={resource}
            amount={inventory.get(resource.id) || 0}
          />
        ))}
      </div>
    </div>
  );
}