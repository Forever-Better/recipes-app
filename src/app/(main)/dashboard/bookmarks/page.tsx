import Link from 'next/link';

import BookmarkItem from '@/components/BookmarkItem';
import { EmptyPlaceholder } from '@/components/EmptyPlaceholder';
import DashboardHeader from '@/components/screens/Dashboard/Header';
import DashboardShell from '@/components/screens/Dashboard/Shell';
import { Button } from '@/components/ui/button';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/session';

export default async function BookmarksPage() {
  const user = await getCurrentUser();

  const bookmarks = await db.bookmark.findMany({ where: { userId: user?.id }, include: { recipe: true } });

  return (
    <DashboardShell>
      <DashboardHeader heading='Bookmarks' text='Your saved recipes.' />
      <div>
        {bookmarks?.length ? (
          <div className='divide-y divide-border rounded-md border overflow-hidden'>
            {bookmarks.map(({ recipe }) => (
              <BookmarkItem recipe={recipe} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name='bookmark' />
            <EmptyPlaceholder.Title>No saved recipes</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any bookmarks yet. Find recipes for you.
            </EmptyPlaceholder.Description>
            <Link href={getPublicUrl.main()}>
              <Button>Find</Button>
            </Link>
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}
