import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: {
    label: string;
    path?: string;
  }[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-[#F6FAF7] border-b border-[#E0ECE6] py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs sm:text-sm text-[#1B3A34] overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-1.5 hover:text-[#2A9D8F] transition-colors text-[#1B3A34]/80 font-medium cursor-pointer"
        >
          <Home className="w-3.5 h-3.5 text-[#2A9D8F]" />
          <span>Home</span>
        </button>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-[#2A9D8F]/60 shrink-0" />
              {isLast || !item.path ? (
                <span className="font-semibold text-[#1B4D3E] truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => onNavigate(item.path!)}
                  className="hover:text-[#2A9D8F] transition-colors text-[#1B3A34]/80 font-medium cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
