import React from 'react';
import { Resource } from '../types/game';

interface Props {
  resource: Resource;
  amount: number;
}

export default function ResourceDisplay({ resource, amount }: Props) {
  return (
    <div
      className={`bg-${resource.color}-900/50 p-4 rounded-lg flex justify-between items-center`}
    >
      <span className="text-white">{resource.name}</span>
      <span className={`text-${resource.color}-400 font-bold`}>
        {amount}
      </span>
    </div>
  );
}