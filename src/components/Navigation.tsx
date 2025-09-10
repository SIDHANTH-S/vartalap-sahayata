import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigationTabs = [
  { id: 'bill-generator', label: 'Bill Generator' },
  { id: 'statement-generator', label: 'Statement Generator' },
  { id: 'product-master', label: 'Product Master' },
  { id: 'delete-bill', label: 'Delete Bill' },
  { id: 'inventory-intelligence', label: 'Inventory Intelligence' },
  { id: 'customer-profitability', label: 'Customer Profitability' },
  { id: 'expense-tracking', label: 'Expense Profit/Loss' },
  { id: 'product-analysis', label: 'Product Analysis' },
  { id: 'customer-behaviour', label: 'Customer Behaviour' },
  { id: 'business-overview', label: 'Business Overview' },
  { id: 'sales-forecast', label: 'Sales Forecast' },
  { id: 'advanced-analytics', label: 'Advanced Analytics' }
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="bg-nav-background border-b border-nav-border">
      <div className="container mx-auto px-0">
        <h1 className="text-xl font-bold text-foreground py-4 px-4 border-b border-nav-border">
          Business Management Software
        </h1>
        <nav className="nav-tabs overflow-x-auto">
          {navigationTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`nav-tab whitespace-nowrap ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};