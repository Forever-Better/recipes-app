import { Skeleton } from '@/components/ui/skeleton';

export default function RecipeListSkeleton() {
  return (
    <ul className='recipe-grid'>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className='bg-white '>
          <Skeleton className='w-full rounded-xl h-56' />
          <div className='flex flex-col'>
            <div className='mt-3 h-10'>
              <Skeleton className='h-4' />
              <Skeleton className='h-4 mt-2' />
            </div>
            <div className='flex gap-6 my-3'>
              <div className='flex flex-col gap-1'>
                <Skeleton className='w-12 h-4' />
                <Skeleton className='w-8 h-4' />
              </div>
              <div className='flex flex-col gap-1'>
                <Skeleton className='w-12 h-4' />
                <Skeleton className='w-8 h-4' />
              </div>
              <div className='flex flex-col gap-1'>
                <Skeleton className='w-16 h-4' />
                <div className='flex gap-1'>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className='w-[10px] h-[10px]' />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
}
