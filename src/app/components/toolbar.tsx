import React from 'react';

export interface ToolBarProps {
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function ToolBar({ children, action }: ToolBarProps) {
  return (
    <div className="flex items-center gap-7 py-8 px-10">
      <div className="flex-1">{children}</div>
      {action}
    </div>
  );
}
