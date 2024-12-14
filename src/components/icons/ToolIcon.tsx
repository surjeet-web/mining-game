import React from 'react';
import { 
  Pickaxe, 
  Drill, 
  Bomb as Dynamite, 
  Truck as Excavator,
  LucideIcon 
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Pickaxe': Pickaxe,
  'Drill': Drill,
  'Dynamite': Dynamite,
  'Excavator': Excavator,
};

interface ToolIconProps {
  name: string;
  className?: string;
}

export function ToolIcon({ name, className = '' }: ToolIconProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  
  return <Icon className={className} />;
}