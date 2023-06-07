'use client';

import { AvatarImage } from '@radix-ui/react-avatar';
import { User, UserCircle2 } from 'lucide-react';
import Link from 'next/link';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import { useAuth } from '@/hooks/useAuth';

import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

function UserBlock() {
  const { isLoading, user } = useAuth();
  console.log(isLoading);
  if (isLoading) return null;

  return user ? (
    <Avatar>
      <AvatarImage src={user?.image} />
      <AvatarFallback>
        <User size={20} />
      </AvatarFallback>
    </Avatar>
  ) : (
    <Button asChild>
      <Link href={getPublicUrl.signup()}>
        <UserCircle2 className='mr-2' size={20} /> Signup
      </Link>
    </Button>
  );
}

export default function Header() {
  return (
    <header className='h-14 border-b border-gray-300 px-6'>
      <div className='container flex justify-between items-center h-full'>
        <div className=''>
          <h2>Recipes app</h2>
        </div>
        <UserBlock />
      </div>
    </header>
  );
}
