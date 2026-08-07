# Nawa Market (سوق نواة الإلكتروني)

**[العربية](#نظرة-عامة-على-المشروع) | [English](#project-overview)**

A premium bilingual e-commerce platform demo built with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

منصة تسوق إلكترونية تجريبية حديثة ومزدوجة اللغة مبنية باستخدام **Next.js** و **TypeScript** و **Tailwind CSS** و **Framer Motion** و **Lucide Icons**.

Part of the **Salimi Digital (SD) Collection** by **Salimi Tech**.

---

## Arabic Version / النسخة العربية

### نظرة عامة على المشروع
**سوق نواة الإلكتروني (Nawa Market)** هو مشروع نموذجي يمثل منصة تجارة إلكترونية حديثة ومبتكرة تتيح للمستخدمين استكشاف المنتجات، استعراض التفاصيل، إضافة العناصر لسلة التسوق، وتجربة رحلة شراء كاملة بتصميم عصري وجذاب.

الهدف من هذا المشروع هو إبراز مهارات تطوير الواجهات الأمامية المتقدمة وتشمل:
- واجهات التجارة الإلكترونية الحديثة.
- واجهة إدارة المنتجات والطلبات.
- تجربة تسوق سلسة وسريعة.
- تصميم لوحة التحكم (Dashboard).
- التجاوب الكامل مع مختلف الأجهزة.
- هندسة الويب الحديثة.

> **تنبيه مهم:**  
> هذا المشروع هو مشروع تجريبي لأغراض معرض الأعمال (Portfolio Demo). جميع المنتجات، والعملاء، والطلبات، والإحصائيات، والمعلومات المذكورة هي بيانات افتراضية ومصممة لأغراض العرض فقط، ولا توجد أي معالجة دفع حقيقية أو قواعد بيانات خلفية.

---

### المميزات الرئيسية
- **دعم دوال اللغة (Bilingual):** دعم كامل ومباشر للغتين العربية والإنجليزية.
- **دعم الاتجاهات (RTL/LTR):** اتجاه من اليمين لليسار (RTL) للغة العربية، ومن اليسار لليمين (LTR) للغة الإنجليزية.
- **تصفح واستكشاف المنتجات:** تصفح المنتجات حسب الأقسام، فلترة الأسعار (Slider Slider)، التقييم، والبحث الفوري بالكلمات المفتاحية.
- **صفحات المنتجات الديناميكية:** عرض تفصيلي لكل منتج يشمل الصور، المواصفات، حالة التوفر، التحكم بالكمية، والإضافة للسلة والمفضلة.
- **سلة تسوق تفاعلية:** إمكانية إضافة وحذف المنتجات، تعديل الكميات، تطبيق أكواد الخصم التجريبية، وحفظ السلة في `LocalStorage`.
- **تجربة إتمام شراء (Checkout UI):** نموذج إدخال بيانات الشحن اختيار طرق الدفع (بطاقة، دفع عند الاستلام، Apple Pay) بصورة تجريبية.
- **لوحة حساب المستخدم:** عرض المعلومات الشخصية، سجل الطلبات السابقة مع التتبع، وقائمة المفضلة.
- **لوحة تحكم الإدارة (Admin Dashboard):** إحصائيات المبيعات والأداء، رسومات بيانية تفاعلية، جدول المنتجات وجدول الطلبات.
- **تصميم تجاوبي وعصري:** متوافق بالكامل مع الشاشات الذكية، الآيباد، وأجهزة المحمول.

---

### التقنيات المستخدمة
- **إطار العمل:** [Next.js](https://nextjs.org/) (App Router)
- **لغة البرمجة:** [TypeScript](https://www.typescriptlang.org/)
- **التنسيق:** [Tailwind CSS](https://tailwindcss.com/)
- **الحركات والتأثيرات:** [Framer Motion](https://www.framer.com/motion/)
- **الأيقونات:** [Lucide Icons](https://lucide.dev/)
- **إدارة الحالة:** React Context API & `LocalStorage`

---

### مفهوم التصميم والألوان
يعتمد التصميم على الهوية التجارية الحديثة للمتاجر العالمية:
- **اللون الرئيسي (Deep Blue):** `#0F172A`
- **اللون الثانوي (Modern Green):** `#16A34A`
- **خلفيات وألوان محايدة:** أبيض `#FFFFFF` ورمادي فاتح `#F1F5F9`

---

### صفحات الموقع
1. **الرئيسية (`/`):** قسم الهيرو، الأقسام المميزة، المنتجات الأكثر مبيعاً، العروض الحصرية، قيم المتجر، وتقييمات العملاء.
2. **المتجر (`/shop`):** تصفح وشاشات الفلترة المتعددة والترتيب حسب السعر أو التقييم.
3. **تفاصيل المنتج (`/product/[id]`):** عرض كامل لبيانات ومواصفات المنتج والمنتجات ذات الصلة.
4. **سلة التسوق (`/cart`):** ملخص الطلب والتحكم في العناصر وإدخال كود الخصم.
5. **إتمام الشراء (`/checkout`):** نموذج الشحن واختيار طريقة الدفع والتأكيد التجريبي.
6. **لوحة الحساب (`/account`):** بيانات الملف الشخصي، سجل الطلبات، والمفضلة.
7. **لوحة التحكم (`/admin`):** إحصائيات المبيعات، الرسومات البيانية، جدول المنتجات والطلبات.
8. **عن المتجر (`/about`):** قصة البراند، الرسالة، الرؤية، والقيم الأساسية.
9. **اتصل بنا (`/contact`):** معلومات التواصل ونموذج إرسال الرسائل.

---

## English Version / النسخة الإنجليزية

### Project Overview
**Nawa Market (سوق نواة الإلكتروني)** is a fictional online marketplace designed to present a modern, commercial shopping experience across multiple product categories. This project serves as a showcase of advanced frontend web development skills, demonstrating high-performance UI components, dynamic language switching, cart management, responsive design, and executive administrative dashboards.

> **Important Notice:**  
> This is a fictional portfolio project created purely for demonstration purposes. All products, brands, customers, orders, metrics, and contact details are mock data. No real backend, payment processor, or database is connected.

---

### Features
- **Bilingual Architecture:** Seamless instant language switching between Arabic (Arabic default) and English.
- **RTL & LTR Directionality:** Full Right-To-Left (RTL) support for Arabic and Left-To-Right (LTR) support for English.
- **Product Catalog & Discovery:** Interactive catalog with category filtering, price sliders, star rating filters, and instant keyword searching.
- **Dynamic Product Pages:** Detailed view for each item showcasing image previews, specs, quantity counter, availability badges, and related items.
- **Stateful Shopping Cart:** Add, remove, update quantities, apply demo promo codes, and persist items across browser sessions via `LocalStorage`.
- **Checkout Experience UI:** Billing and shipping form, delivery choice, and interactive payment method selector (Credit Card, Cash on Delivery, Apple Pay in demo mode).
- **User Account Dashboard:** Personal details, past order history with status tracking, and saved wishlist items.
- **Executive Admin Dashboard:** Business KPIs (Total Products, Orders, Revenue, Customers), SVG analytics charts, product inventory tables, and order logs.
- **Responsive & Modern Design:** Fluid layout tailored for mobile devices, tablets, and desktop displays with smooth animations.

---

### Technologies
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **State & Storage:** React Context API & Browser `LocalStorage`

---

### Design Concept
- **Primary Color (Deep Blue):** `#0F172A`
- **Secondary Color (Modern Green):** `#16A34A`
- **Background & Neutrals:** White `#FFFFFF` and Light Gray `#F1F5F9`

---

### Pages
1. **Home Page (`/`)**: Hero banner, featured categories, best-selling product grid, promotional banners, core brand values, and customer reviews.
2. **Shop Catalog (`/shop`)**: Complete inventory browsing with multi-facet filters (category, price slider, rating) and search.
3. **Product Details (`/product/[id]`)**: Product specs, image preview, stock status, quantity adjustment, add-to-cart, and related recommendations.
4. **Cart (`/cart`)**: Itemized cart breakdown, quantity modifier, promo code activation, tax estimation, and grand total.
5. **Checkout (`/checkout`)**: Shipping details form, payment option tab selection, order summary, and demo order confirmation modal.
6. **User Account (`/account`)**: Profile info, interactive tabs for order history, saved addresses, and wishlist.
7. **Admin Dashboard (`/admin`)**: Metric stat cards, visual sales & revenue charts, inventory table, and orders status table.
8. **About Us (`/about`)**: Brand story, mission, vision, and core corporate values (Quality, Trust, Innovation, Speed).
9. **Contact (`/contact`)**: Demo contact information cards (email, phone, address) and an interactive contact feedback form.

---

## Project Structure / هيكل المشروع

```text
sd-05-nawa-market/
├── app/
│   ├── about/page.tsx
│   ├── account/page.tsx
│   ├── admin/page.tsx
│   ├── cart/page.tsx
│   ├── checkout/page.tsx
│   ├── contact/page.tsx
│   ├── product/[id]/page.tsx
│   ├── shop/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CartItem.tsx
│   ├── CategoryCard.tsx
│   ├── ChartCard.tsx
│   ├── ContactForm.tsx
│   ├── DashboardCard.tsx
│   ├── FilterPanel.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Navbar.tsx
│   ├── OrderTable.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   ├── ProductTable.tsx
│   ├── SearchBar.tsx
│   └── SectionTitle.tsx
├── context/
│   ├── CartContext.tsx
│   ├── LanguageContext.tsx
│   └── WishlistContext.tsx
├── data/
│   ├── categories.ts
│   ├── dashboard.ts
│   ├── orders.ts
│   ├── products.ts
│   ├── reviews.ts
│   └── users.ts
├── locales/
│   ├── ar.json
│   └── en.json
└── README.md
```

---

## Installation / التثبيت والتشغيل

1. **تشغيل المستودع / Clone the repository:**
   ```bash
   cd sd-05-nawa-market
   ```

2. **تثبيت الحزم / Install dependencies:**
   ```bash
   npm install
   ```

3. **تشغيل الخادم المحلي / Run dev server:**
   ```bash
   npm run dev
   ```

4. **افتح المتصفح على / Open browser:**  
   [http://localhost:3000](http://localhost:3000)

---

## Security & Privacy / الأمان والخصوصية

- **لا توجد قواعد بيانات أو خوادم خلفية / No Backend:** المشروع يعمل بالكامل على جانب العميل (Client-side) باستخدام بيانات افتراضية.
- **عدم جمع البيانات / Zero Data Collection:** لا يتم حفظ أي بيانات شخصية أو حقيقية.
- **عمليات دفع تجريبية / Demo Payments:** جميع الشاشات مخصصة لمحاكاة معارض الأعمال (Portfolio Demo).

---

## Author / المطور
**Salimi Tech (ساليمي تك)**

---

## Collection / السلسلة
**Salimi Digital (SD) Collection (مجموعة ساليمي الرقمية)**

---

## License / الترخيص
Portfolio & Educational Purposes / لأغراض العرض التعليمي ومعرض الأعمال.
