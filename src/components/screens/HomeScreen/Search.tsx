'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { getPublicUrl } from '@/helpers/getPublicUrl';

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') ?? '';
  const router = useRouter();

  return (
    <div className='mb-6'>
      {/* <Search defaultValue={query} onSearch={(search) => router.push(getPublicUrl.recipesQuery(search))} /> */}
    </div>
  );
}
