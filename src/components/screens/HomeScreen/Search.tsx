'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchProps {
  searchParams: { q: string };
}

export default function Search({ searchParams }: SearchProps) {
  const [query, setQuery] = useState(searchParams.q ?? '');

  const router = useRouter();
  const pathname = usePathname();

  const updateSearchParams = (query: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (query) {
      searchParams.set('q', query);
    } else {
      searchParams.delete('q');
    }

    const newPathname = `${pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateSearchParams(query?.toLowerCase());
  };

  return (
    <form onSubmit={handleSearch}>
      <div className='relative'>
        <Input
          className='bg-transparent'
          placeholder='Search recipes'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button className='absolute top-0 right-0 border border-l-0 rounded-l-none' type='submit' variant='ghost'>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
}
