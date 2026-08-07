export interface Category {
  id: 'electronics' | 'fashion' | 'home' | 'accessories' | 'beauty';
  nameAr: string;
  nameEn: string;
  count: number;
  iconName: string;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const categories: Category[] = [
  {
    id: 'electronics',
    nameAr: 'الإلكترونيات',
    nameEn: 'Electronics',
    count: 42,
    iconName: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'أحدث الأجهزة الذكية والسماعات والإكسسوارات التقنية متطورة.',
    descriptionEn: 'Latest smart gadgets, audio gear, and cutting-edge tech accessories.'
  },
  {
    id: 'fashion',
    nameAr: 'الأزياء',
    nameEn: 'Fashion',
    count: 68,
    iconName: 'Shirt',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'تشكيلة راقية من الحقائب والأحذية والملابس العصرية.',
    descriptionEn: 'Premium clothing, shoes, and elegant handbags for all seasons.'
  },
  {
    id: 'home',
    nameAr: 'المنزل',
    nameEn: 'Home',
    count: 35,
    iconName: 'Home',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'إضاءة حديثة، أدوات مطبخ وأثاث وديكورات متميزة.',
    descriptionEn: 'Modern lighting, cookware, interior decor, and living accessories.'
  },
  {
    id: 'accessories',
    nameAr: 'الإكسسوارات',
    nameEn: 'Accessories',
    count: 29,
    iconName: 'Watch',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'نظارات، مجوهرات، وساعات تناسب كافة الأذواق.',
    descriptionEn: 'Stylish sunglasses, watches, and jewelry essentials.'
  },
  {
    id: 'beauty',
    nameAr: 'الجمال',
    nameEn: 'Beauty',
    count: 24,
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'منتجات العناية بالبشرة والمستحضرات الطبيعية عالية الجودة.',
    descriptionEn: 'Natural skin care, beauty serums, and organic self-care cosmetics.'
  }
];
