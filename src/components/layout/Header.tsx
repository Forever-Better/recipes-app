import Image from 'next/image';
import Link from 'next/link';
import type { User as IUser } from 'next-auth';

import { getPublicUrl } from '@/helpers/getPublicUrl';

import { ThemeToggle } from '../ThemeToggle';
import UserAccountNav from '../UserAccountNav';
import { Button } from '../ui/button';

export default function Header({ user }: { user?: Pick<IUser, 'name' | 'image' | 'email'> }) {
  return (
    <header className='h-14 border-b'>
      <div className='container flex justify-between items-center h-full'>
        <div className=''>
          <Link href={getPublicUrl.main()}>
            <div className='flex gap-4 items-center'>
              <Image alt='Brand' height={32} src='/android-chrome-192x192.png' width={32} />
              <h2 className='font-medium'>Fluffly Recipes</h2>
            </div>
          </Link>
        </div>
        <div className='flex gap-4 items-center'>
          {user?.email ? (
            <UserAccountNav user={user} />
          ) : (
            <Link href={getPublicUrl.signup()}>
              <Button variant='secondary'>Signup</Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
