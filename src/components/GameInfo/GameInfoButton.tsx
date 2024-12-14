import React from 'react';
import { HelpCircle } from 'lucide-react';

interface Props {
  onClick: () => void;
}

export default function GameInfoButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-full text-white"
    >
      <HelpCircle className="w-5 h-5" />
      <span>How to Play</span>
    </button>
  );
}