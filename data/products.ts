export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'electronics' | 'fashion' | 'home' | 'accessories' | 'beauty';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  isFeatured?: boolean;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
}

export const products: Product[] = [
  {
    id: 'prod-1',
    nameAr: 'ساعة نوفا الذكية',
    nameEn: 'Nova Smart Watch',
    category: 'electronics',
    price: 89,
    originalPrice: 110,
    rating: 4.8,
    reviewsCount: 142,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'ساعة ذكية متطورة بتصميم عصري وأداء استثنائي. تتميز بمراقبة ضربات القلب وتتبع اللياقة بدقة عالية وتصميم مقاوم للماء مع بطارية تدوم حتى 7 أيام.',
    descriptionEn: 'An advanced smart watch featuring crisp modern aesthetics and powerful tracking. Monitors heart rate, fitness metrics with precision, water resistance, and a 7-day battery life.',
    featuresAr: [
      'شاشة AMOLED عالي الدقة',
      'مقاومة للماء حتى عمق 50 متراً',
      'تتبع أنشطة اللياقة والنوم 24/7',
      'بطارية تدوم حتى 7 أيام بشحنة واحدة'
    ],
    featuresEn: [
      'High definition AMOLED display',
      'Water resistant up to 50m depth',
      '24/7 fitness and sleep tracking',
      'Up to 7 days battery life on single charge'
    ]
  },
  {
    id: 'prod-2',
    nameAr: 'حقيبة أوريان الأنيقة',
    nameEn: 'Orian Premium Bag',
    category: 'fashion',
    price: 120,
    originalPrice: 150,
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'حقيبة يد فاخرة مصنوعة من الجلد الطبيعي المعالج بعناية فائقة. مصممة لتجمع بين المساحة الواسعة والشكل العصري الجذاب لكل المناسبات.',
    descriptionEn: 'A luxury leather handbag crafted with precision and premium finishing. Designed to blend spacious utility with modern elegant styling for every occasion.',
    featuresAr: [
      'جلد طبيعي عالي الجودة 100%',
      'سحابات معدنية متينة ومقاومة للصدأ',
      'جيوب تنظيمية داخلية متقدمة',
      'حزام كتف قابل للتعديل والإزالة'
    ],
    featuresEn: [
      '100% Premium handcrafted genuine leather',
      'Durable rust-proof metallic zippers',
      'Advanced inner multi-pocket organization',
      'Adjustable and detachable shoulder strap'
    ]
  },
  {
    id: 'prod-3',
    nameAr: 'مصباح مودرن',
    nameEn: 'Modern Lamp',
    category: 'home',
    price: 45,
    originalPrice: 60,
    rating: 4.6,
    reviewsCount: 65,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'مصباح طاولة عصري بإضاءة دافئة مريحة للعين وخيارات سطوع متعددة. يضفي لمسة ديكور فاخرة لمكتبك أو غرفتك.',
    descriptionEn: 'A sleek table lamp delivering warm eye-comfort lighting with multi-level touch dimming. Adds a premium decorative accent to your desk or room.',
    featuresAr: [
      'إضاءة LED موفرة للطاقة 3 مستويات',
      'تحكم باللمس الذكي لتعديل السطوع',
      'قاعدة معدنية متينة بتصميم دنماركي',
      'منفذ USB مدمج لشحن الأجهزة'
    ],
    featuresEn: [
      '3-level energy efficient LED illumination',
      'Smart touch control dimming sensor',
      'Solid metallic base with Nordic aesthetic',
      'Built-in USB device charging port'
    ]
  },
  {
    id: 'prod-4',
    nameAr: 'سماعات إيكو اللاسلكية',
    nameEn: 'Echo Wireless Headphones',
    category: 'electronics',
    price: 70,
    originalPrice: 95,
    rating: 4.7,
    reviewsCount: 210,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'سماعات رأس لاسلكية بخاصية إلغاء الضوضاء النشط وصوت ستيريو نقي عالي النقاء لتجربة استماع غامرة بلا انقطاع.',
    descriptionEn: 'Wireless over-ear headphones featuring Active Noise Cancellation (ANC) and crisp acoustic precision for immersive uninterrupted audio.',
    featuresAr: [
      'تقنية عزل الضوضاء النشط ANC',
      'بطارية تدوم 30 ساعة مع شحن سريع',
      'وسائد أذن مريحة من الذاكرة الرغوية',
      'اتصال Bluetooth 5.3 سريع ومستقر'
    ],
    featuresEn: [
      'Active Noise Cancellation (ANC) tech',
      '30-hour playback with fast USB-C charge',
      'Ultra-comfortable memory foam ear cushions',
      'Bluetooth 5.3 instant low-latency connectivity'
    ]
  },
  {
    id: 'prod-5',
    nameAr: 'نظارة شمسية كلاسيكية',
    nameEn: 'Classic Horizon Sunglasses',
    category: 'accessories',
    price: 55,
    originalPrice: 75,
    rating: 4.5,
    reviewsCount: 49,
    inStock: true,
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'نظارة شمسية بتصميم كلاسيكي أنيق وحماية متكاملة من الأشعة فوق البنفسجية UV400 مع عدسات مستقطبة مضادة للانعكاس.',
    descriptionEn: 'Classic polarized sunglasses providing UV400 protection, anti-reflective lenses, and lightweight alloy frame for timeless style.',
    featuresAr: [
      'عدسات مستقطبة 100% UV400',
      'إطار من الألومنيوم الخفيف والمقاوم للخدش',
      'جراب جلدي أنيق وقطعة تنظيف مجانية'
    ],
    featuresEn: [
      '100% UV400 polarized HD lenses',
      'Lightweight scratch-resistant metal frame',
      'Protective leather case and microfiber cloth'
    ]
  },
  {
    id: 'prod-6',
    nameAr: 'مجموعة العناية بالبشرة النضرة',
    nameEn: 'Luminous Radiant Skincare Set',
    category: 'beauty',
    price: 65,
    originalPrice: 85,
    rating: 4.9,
    reviewsCount: 94,
    inStock: true,
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'مجموعة عناية طبيعية متكاملة تمنح بشرتك الترطيب العميق والإشراقة الحيوية باستخدام مكونات عضوية خالية من المواد الكيميائية.',
    descriptionEn: 'A holistic natural skincare bundle engineered for deep hydration and youthful radiance using organic botanical ingredients.',
    featuresAr: [
      'مكونات عضوية 100% خالية من البرابين',
      'سيروم فيتامين C المغذي ومقشر طبيعي',
      'يناسب جميع أنواع البشرة حتى الحساسة'
    ],
    featuresEn: [
      '100% Organic, paraben-free formulation',
      'Nourishing Vitamin C serum and facial scrub',
      'Dermatologically tested for sensitive skin'
    ]
  },
  {
    id: 'prod-7',
    nameAr: 'حذاء سنيكرز رياضي مريح',
    nameEn: 'AeroGlide Comfort Sneakers',
    category: 'fashion',
    price: 95,
    originalPrice: 125,
    rating: 4.7,
    reviewsCount: 167,
    inStock: true,
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'حذاء رياضي ذو تصميم ديناميكي خفيف الوزن مع وسادة هواء ممتصة للصدمات للمشي والتمارين اليومية.',
    descriptionEn: 'Dynamic lightweight performance sneakers equipped with shock-absorption air cushions for maximum stride comfort.',
    featuresAr: [
      'نسيج محبوك ثلاثي الأبعاد لجودة التهوية',
      'نعل سفلي مطاطي مضاد للانزلاق',
      'وزن خفيف جداً يقلل من إجهاد القدم'
    ],
    featuresEn: [
      '3D breathable knitted mesh upper',
      'Anti-slip high-traction rubber outsole',
      'Ultra-lightweight design for effortless motion'
    ]
  },
  {
    id: 'prod-8',
    nameAr: 'وعاء سيراميك للقهوة المختصة',
    nameEn: 'Artisan Ceramic Coffee Set',
    category: 'home',
    price: 38,
    originalPrice: 50,
    rating: 4.8,
    reviewsCount: 78,
    inStock: true,
    isFeatured: false,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    descriptionAr: 'طقم إبريق وأكواب سيراميك مصنوع يدوياً بإتقان لعشاق القهوة المفلترة والقهوة المختصة.',
    descriptionEn: 'Handcrafted artisan ceramic coffee pour-over kettle and cup collection designed for specialty coffee lovers.',
    featuresAr: [
      'سيراميك حراري عالي الجودة يدوي الصنع',
      'احتفاظ ممتازة بدرجة حرارة المشروب',
      'تصميم مريح وسهل التنظيف في غسالة الأطباق'
    ],
    featuresEn: [
      'Handmade thermal glazed ceramic',
      'Optimal heat retention for rich flavor extraction',
      'Ergonomic handle and dishwasher safe'
    ]
  }
];
