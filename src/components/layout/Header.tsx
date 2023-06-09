import { UserCircle2 } from 'lucide-react';
import Link from 'next/link';
import type { User as IUser } from 'next-auth';

import { getPublicUrl } from '@/helpers/getPublicUrl';

import UserAccountNav from '../UserAccountNav';
import { Button } from '../ui/button';

export default function Header({ user }: { user?: Pick<IUser, 'name' | 'image' | 'email'> }) {
  return (
    <header className='h-14 border-b border-gray-300 px-6'>
      <div className='container flex justify-between items-center h-full'>
        <div className=''>
          <Link href={getPublicUrl.main()}>
            <h2>Recipes app</h2>
          </Link>
        </div>
        {user?.email ? (
          <UserAccountNav user={user} />
        ) : (
          <Link href={getPublicUrl.signup()}>
            <Button>
              <UserCircle2 className='mr-2' size={20} /> Signup
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
