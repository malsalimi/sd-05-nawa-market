export interface DashboardStats {
  totalProducts: number;
  totalOrders: number;
  revenue: number;
  customersCount: number;
  monthlyRevenue: { monthAr: string; monthEn: string; amount: number }[];
  categorySales: { categoryAr: string; categoryEn: string; percentage: number; color: string }[];
}

export const dashboardStats: DashboardStats = {
  totalProducts: 198,
  totalOrders: 1420,
  revenue: 48950,
  customersCount: 890,
  monthlyRevenue: [
    { monthAr: 'يناير', monthEn: 'Jan', amount: 3200 },
    { monthAr: 'فبراير', monthEn: 'Feb', amount: 4100 },
    { monthAr: 'مارس', monthEn: 'Mar', amount: 5600 },
    { monthAr: 'أبريل', monthEn: 'Apr', amount: 6200 },
    { monthAr: 'مايو', monthEn: 'May', amount: 7800 },
    { monthAr: 'يونيو', monthEn: 'Jun', amount: 8900 },
    { monthAr: 'يوليو', monthEn: 'Jul', amount: 13150 }
  ],
  categorySales: [
    { categoryAr: 'الإلكترونيات', categoryEn: 'Electronics', percentage: 40, color: '#0F172A' },
    { categoryAr: 'الأزياء', categoryEn: 'Fashion', percentage: 25, color: '#16A34A' },
    { categoryAr: 'المنزل', categoryEn: 'Home', percentage: 18, color: '#3B82F6' },
    { categoryAr: 'الإكسسوارات', categoryEn: 'Accessories', percentage: 10, color: '#F59E0B' },
    { categoryAr: 'الجمال', categoryEn: 'Beauty', percentage: 7, color: '#EC4899' }
  ]
};
