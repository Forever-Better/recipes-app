import { Bookmark } from 'lucide-react';
import Link from 'next/link';

import { EmptyPlaceholder } from '@/components/EmptyPlaceholder';
import { Button } from '@/components/ui/button';
import { getPublicUrl } from '@/helpers/getPublicUrl';

export default function BookmarkScreen({ bookmarks = [] }: { bookmarks: [] }) {
  return (
    <div>
      {bookmarks?.length ? (
        <div className='divide-y divide-border rounded-md border'>
          {bookmarks.map((post) => (
            // <Recipe />
            <span>bookmark</span>
          ))}
        </div>
      ) : (
        <EmptyPlaceholder>
          <EmptyPlaceholder.Icon>
            <Bookmark className='h-10 w-10' />
          </EmptyPlaceholder.Icon>
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
  );
}
