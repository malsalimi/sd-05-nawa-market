export interface Review {
  id: string;
  authorNameAr: string;
  authorNameEn: string;
  rating: number;
  date: string;
  commentAr: string;
  commentEn: string;
  avatar: string;
}

export const reviews: Review[] = [
  {
    id: 'rev-1',
    authorNameAr: 'عبدالله السعيد',
    authorNameEn: 'Abdullah Al-Saeed',
    rating: 5,
    date: '2026-07-28',
    commentAr: 'تجربة تسوق ممتازة جداً، سرعة في التوصيل وجودة المنتجات طابقت الوصف تماماً!',
    commentEn: 'Exceptional shopping experience! Super fast delivery and the product quality perfectly matched the description.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'rev-2',
    authorNameAr: 'مريم العتيبي',
    authorNameEn: 'Maryam Al-Otaibi',
    rating: 5,
    date: '2026-07-30',
    commentAr: 'التصميم راقي وسهل الاستخدام، والمنتجات جاءت بتغليف ممتاز وأنيق.',
    commentEn: 'Sleek design, effortless navigation, and items arrived in beautiful protective packaging.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 'rev-3',
    authorNameAr: 'فهد الشمري',
    authorNameEn: 'Fahad Al-Shammari',
    rating: 4,
    date: '2026-08-02',
    commentAr: 'خدمة العملاء متجاوبة والدعم الفني متعاون للغاية. أنصح بالشراء من هذا المتجر.',
    commentEn: 'Responsive customer service and highly cooperative support team. Highly recommend shopping here.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  }
];
