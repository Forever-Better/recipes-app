'use client';

import { Bookmark, LogOut } from 'lucide-react';
import Link from 'next/link';
import type { User as IUser } from 'next-auth';
import { signOut } from 'next-auth/react';

import { getPublicUrl } from '@/helpers/getPublicUrl';

import { UserAvatar } from './UserAvatar';
import { Icons } from './icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/dropdown-menu';

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<IUser, 'name' | 'image' | 'email'>;
}

export default function UserAccountNav({ user }: UserAccountNavProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar className='w-8 h-8' user={{ image: user.image || null, name: user.name || null }} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && <p className='w-[200px] truncate text-sm text-muted-foreground'>{user.email}</p>}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={getPublicUrl.bookmarks()}>Bookmarks</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getPublicUrl.settings()}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onSelect={(event) => {
            event.preventDefault();
            signOut({
              callbackUrl: `${window.location.origin}${getPublicUrl.login()}`
            });
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
