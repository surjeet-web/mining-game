import React from 'react';

export default function BasicsTab() {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-lg font-bold text-white mb-3">Getting Started</h3>
        <p className="text-gray-300">
          Welcome to the Crypto Mining Simulator! Your goal is to mine valuable resources
          and upgrade your tools to become more efficient. Start with your basic pickaxe
          and work your way up to more powerful mining equipment.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-3">How to Mine</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Click the "Mine" button to start mining resources</li>
          <li>Each mining attempt has a chance to discover different resources</li>
          <li>Better tools increase your chances of finding rare resources</li>
          <li>Sell resources automatically for coins</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-bold text-white mb-3">Controls</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="font-bold text-white mb-2">Mouse Controls</div>
            <ul className="text-gray-300 space-y-1">
              <li>Click Mine Button - Start Mining</li>
              <li>Click Shop - Purchase Tools</li>
              <li>Click Help - View Game Info</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="font-bold text-white mb-2">Keyboard Shortcuts</div>
            <ul className="text-gray-300 space-y-1">
              <li>Space - Start Mining</li>
              <li>Esc - Close Menus</li>
              <li>H - Toggle Help</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}