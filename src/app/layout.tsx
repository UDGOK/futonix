import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header1 } from '@/components/ui/header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Futonix - Building Excellence',
  description: 'Leading construction and development company specializing in commercial and industrial projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full scroll-smooth">
      <body className={`${inter.className} h-full`}>
        <Header1 />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
