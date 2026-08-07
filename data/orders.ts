export interface OrderItem {
  productId: string;
  productNameAr: string;
  productNameEn: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  total: number;
  status: 'delivered' | 'processing' | 'shipped';
  statusAr: string;
  statusEn: string;
  items: OrderItem[];
}

export const mockOrders: Order[] = [
  {
    id: 'NW-9801',
    customerName: 'طارق الأحمد (Demo User)',
    customerEmail: 'tariq.demo@example.com',
    date: '2026-08-01',
    total: 209,
    status: 'delivered',
    statusAr: 'تم التوصيل',
    statusEn: 'Delivered',
    items: [
      {
        productId: 'prod-1',
        productNameAr: 'ساعة نوفا الذكية',
        productNameEn: 'Nova Smart Watch',
        price: 89,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop'
      },
      {
        productId: 'prod-2',
        productNameAr: 'حقيبة أوريان الأنيقة',
        productNameEn: 'Orian Premium Bag',
        price: 120,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'NW-9784',
    customerName: 'سارة خالد',
    customerEmail: 'sara.k@example.com',
    date: '2026-08-03',
    total: 115,
    status: 'shipped',
    statusAr: 'تم الشحن',
    statusEn: 'Shipped',
    items: [
      {
        productId: 'prod-4',
        productNameAr: 'سماعات إيكو اللاسلكية',
        productNameEn: 'Echo Wireless Headphones',
        price: 70,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop'
      },
      {
        productId: 'prod-3',
        productNameAr: 'مصباح مودرن',
        productNameEn: 'Modern Lamp',
        price: 45,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'NW-9740',
    customerName: 'عمر الفاروق',
    customerEmail: 'omar.f@example.com',
    date: '2026-08-06',
    total: 95,
    status: 'processing',
    statusAr: 'قيد المعالجة',
    statusEn: 'Processing',
    items: [
      {
        productId: 'prod-7',
        productNameAr: 'حذاء سنيكرز رياضي مريح',
        productNameEn: 'AeroGlide Comfort Sneakers',
        price: 95,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop'
      }
    ]
  }
];
