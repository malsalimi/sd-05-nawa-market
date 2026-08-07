import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext'; // Wait, let's make sure file path is context/WishlistContext
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'سوق نواة الإلكتروني | Nawa Market',
  description: 'منصة تسوق إلكترونية تجريبية توفر تجربة شراء حديثة ومتنوعة لمختلف المنتجات. A fictional online marketplace providing a modern shopping experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
        <LanguageProvider>
          <CartProvider>
            <WishlistProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
