// VartalapAI Business Management System Types

export interface Customer {
  id: string;
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  totalRevenue: number;
  totalCost: number;
  totalProfit: number;
  profitMargin: number;
  billCount: number;
  segment: 'High Value' | 'Medium Value' | 'Low Value';
  lastPurchaseDate: Date;
}

export interface Product {
  id: string;
  name: string;
  costPrice: number;
  sellingPrice: number;
  stock: number;
  reorderThreshold: number;
  leadTime: number;
  category: string;
  supplier?: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface BillItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export interface Bill {
  id: string;
  billNumber: string;
  customerId: string;
  customerName: string;
  date: Date;
  items: BillItem[];
  subtotal: number;
  tax?: number;
  total: number;
  transactionType: 'Debit' | 'Credit';
  remarks?: string;
}

export interface Expense {
  id: string;
  date: Date;
  amount: number;
  category: string;
  description: string;
}

export interface AnalyticsData {
  revenue: { date: string; value: number }[];
  expenses: { date: string; value: number }[];
  profit: { date: string; value: number }[];
  topProducts: { name: string; revenue: number }[];
  salesByDay: { day: string; amount: number }[];
  customerSegments: { segment: string; percentage: number }[];
}

export interface ChurnedCustomer {
  customerKey: string;
  recency: number;
  frequency: number;
  monetary: number;
}

export interface SalesAnomaly {
  date: string;
  salesAmount: number;
}

export interface ExpenseAnomaly {
  date: string;
  expenseAmount: number;
}

export interface SalesVelocityData {
  week: string;
  actual: number;
  forecast: number;
  uncertainty?: number;
}

export interface SalesForecast {
  date: string;
  actual?: number;
  forecast: number;
  uncertainty?: number;
}