
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { AuthProvider } from '@/contexts/AuthContext';
import { DataProvider } from '@/contexts/DataContext';
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meta Heros',
  description: '🦸 x 🦸🏿‍♂️',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
