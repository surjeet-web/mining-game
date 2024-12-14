import React from 'react';
import { BookOpen, Wrench, Diamond, HelpCircle } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: 'basics', label: 'Basics', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'tools', label: 'Tools', icon: <Wrench className="w-5 h-5" /> },
  { id: 'resources', label: 'Resources', icon: <Diamond className="w-5 h-5" /> },
  { id: 'tips', label: 'Tips', icon: <HelpCircle className="w-5 h-5" /> },
];

interface Props {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function GameInfoTabs({ activeTab, onTabChange }: Props) {
  return (
    <div className="flex space-x-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
            ${activeTab === tab.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
            }
          `}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}