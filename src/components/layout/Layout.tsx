import type { User } from 'next-auth';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  user?: Pick<User, 'name' | 'image' | 'email'>;
}

export default function Layout({ children, user }: LayoutProps) {
  return (
    <div className='flex space-y-6 flex-col min-h-screen'>
      <Header user={user} />
      <main className='flex-1'>
        <section>{children}</section>
      </main>
      <Footer />
    </div>
  );
}
