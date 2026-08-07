export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  avatar: string;
  memberSince: string;
  ordersCount: number;
  totalSpent: number;
}

export const mockUser: UserProfile = {
  name: 'طارق الأحمد',
  email: 'tariq.demo@example.com',
  phone: '+966 50 123 4567',
  address: 'شارع الملك فهد، حي الصحافة',
  city: 'الرياض',
  country: 'المملكة العربية السعودية',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
  memberSince: 'يناير 2025',
  ordersCount: 8,
  totalSpent: 940
};
