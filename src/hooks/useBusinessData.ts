import { useState, useEffect } from 'react';
import { Customer, Product, Bill, Expense, AnalyticsData } from '@/types';

// Mock data for demo purposes - replace with actual API calls
export const useBusinessData = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [bills, setBills] = useState<Bill[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const loadData = async () => {
      setLoading(true);
      
      // Mock customers data
      const mockCustomers: Customer[] = [
        {
          id: '1',
          name: 'NANGANALLUR Grains & Grocery Shop',
          totalRevenue: 39450.00,
          totalCost: 0,
          totalProfit: 39450.00,
          profitMargin: 100.0,
          billCount: 2,
          segment: 'High Value',
          lastPurchaseDate: new Date('2025-09-10')
        },
        {
          id: '2',
          name: 'ADAMBAKKAM ORGANIC SHOP',
          totalRevenue: 42681.00,
          totalCost: 0,
          totalProfit: 42681.00,
          profitMargin: 100.0,
          billCount: 2,
          segment: 'High Value',
          lastPurchaseDate: new Date('2025-09-10')
        }
      ];

      // Mock products data
      const mockProducts: Product[] = [
        {
          id: '1',
          name: 'சிவப்பு அரிசி கருப்பு உளுந்து (23 Fine red rice flakes)',
          costPrice: 0,
          sellingPrice: 50.0,
          stock: 0,
          reorderThreshold: 0,
          leadTime: 0,
          category: 'Uncategorized',
          status: 'Out of Stock'
        },
        {
          id: '2',
          name: 'உரிட் டல் பொரிச் ரை மாவு (45 Urad dal porridge flour)',
          costPrice: 0,
          sellingPrice: 40.0,
          stock: 0,
          reorderThreshold: 0,
          leadTime: 0,
          category: 'Uncategorized',
          status: 'Out of Stock'
        }
      ];

      // Mock analytics data
      const mockAnalytics: AnalyticsData = {
        revenue: [
          { date: '2025-08-09', value: 70000 },
          { date: '2025-08-13', value: 60000 },
          { date: '2025-08-17', value: 8000 }
        ],
        expenses: [],
        profit: [
          { date: '2025-08-09', value: 70000 },
          { date: '2025-08-13', value: 60000 },
          { date: '2025-08-17', value: 8000 }
        ],
        topProducts: [
          { name: 'சிவப்பு அரிசி கருப்பு உளுந்து', revenue: 60000 }
        ],
        salesByDay: [
          { day: 'Monday', amount: 10000 },
          { day: 'Tuesday', amount: 70000 },
          { day: 'Wednesday', amount: 15000 }
        ],
        customerSegments: [
          { segment: 'Other', percentage: 100.0 }
        ]
      };

      setCustomers(mockCustomers);
      setProducts(mockProducts);
      setAnalytics(mockAnalytics);
      setLoading(false);
    };

    loadData();
  }, []);

  const addCustomer = (customer: Omit<Customer, 'id'>) => {
    const newCustomer = { ...customer, id: Date.now().toString() };
    setCustomers(prev => [...prev, newCustomer]);
  };

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now().toString() };
    setProducts(prev => [...prev, newProduct]);
  };

  const addBill = (bill: Omit<Bill, 'id' | 'billNumber'>) => {
    const billNumber = `B${Date.now()}`;
    const newBill = { ...bill, id: Date.now().toString(), billNumber };
    setBills(prev => [...prev, newBill]);
  };

  const deleteBill = (billId: string) => {
    setBills(prev => prev.filter(bill => bill.id !== billId));
  };

  return {
    customers,
    products,
    bills,
    expenses,
    analytics,
    loading,
    addCustomer,
    addProduct,
    addBill,
    deleteBill
  };
};