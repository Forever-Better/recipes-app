import { Rubik } from 'next/font/google';

import Layout from '@/components/layout/Layout';

import './globals.css';
import Providers from './providers';

const rubik = Rubik({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata = {
  title: 'Recipes App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
