import { UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { User as IUser } from 'next-auth';

import { getPublicUrl } from '@/helpers/getPublicUrl';

import { ThemeToggle } from '../ThemeToggle';
import UserAccountNav from '../UserAccountNav';
import { Button } from '../ui/button';

export default function Header({ user }: { user?: Pick<IUser, 'name' | 'image' | 'email'> }) {
  return (
    <header className='h-14 border-b px-6'>
      <div className='container flex justify-between items-center h-full'>
        <div className=''>
          <Link href={getPublicUrl.main()}>
            <h2>Fluffly Recipes</h2>
          </Link>
        </div>
        <div className='flex gap-4 items-center'>
          {user?.email ? (
            <UserAccountNav user={user} />
          ) : (
            <Link href={getPublicUrl.signup()}>
              <Button>
                <UserCircle2 className='mr-2' size={20} /> Signup
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
