import BookmarkItem from '@/components/BookmarkItem';
import DashboardHeader from '@/components/screens/Dashboard/Header';
import DashboardShell from '@/components/screens/Dashboard/Shell';

export default function BookmarksLoading() {
  return (
    <DashboardShell>
      <DashboardHeader heading='Bookmarks' text='Your saved recipes.' />

      <div className='divide-border-200 divide-y rounded-md border'>
        <BookmarkItem.Skeleton />
        <BookmarkItem.Skeleton />
        <BookmarkItem.Skeleton />
        <BookmarkItem.Skeleton />
        <BookmarkItem.Skeleton />
      </div>
    </DashboardShell>
  );
}
