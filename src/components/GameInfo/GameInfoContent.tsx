import React, { useState } from 'react';
import GameInfoTabs from './GameInfoTabs';
import BasicsTab from './tabs/BasicsTab';
import ToolsTab from './tabs/ToolsTab';
import ResourcesTab from './tabs/ResourcesTab';
import TipsTab from './tabs/TipsTab';

export default function GameInfoContent() {
  const [activeTab, setActiveTab] = useState('basics');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'basics':
        return <BasicsTab />;
      case 'tools':
        return <ToolsTab />;
      case 'resources':
        return <ResourcesTab />;
      case 'tips':
        return <TipsTab />;
      default:
        return <BasicsTab />;
    }
  };

  return (
    <div>
      <GameInfoTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderTabContent()}
    </div>
  );
}