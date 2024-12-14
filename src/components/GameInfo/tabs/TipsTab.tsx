import React from 'react';

export default function TipsTab() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-bold text-white mb-3">Strategy Tips</h3>
        <div className="grid gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Early Game</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Start with the Basic Pickaxe to earn initial coins</li>
              <li>Focus on consistent mining to build up your coin balance</li>
              <li>Save up for the Power Drill as your first upgrade</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Mid Game</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Upgrade to better tools as soon as you can afford them</li>
              <li>The Dynamite Pack is great for finding rare resources</li>
              <li>Keep an eye on your mining speed improvements</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-white mb-2">Late Game</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>The Excavator is the ultimate mining tool</li>
              <li>Focus on finding rare resources for maximum profit</li>
              <li>Keep mining to discover all resource types</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-3">Pro Tips</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Higher efficiency means faster mining and better value</li>
          <li>Tool power affects the quantity of resources you find</li>
          <li>Rare resources are worth the investment in better tools</li>
          <li>Keep checking the shop for available upgrades</li>
        </ul>
      </section>
    </div>
  );
}