'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Input } from '@/components/ui/input';

interface FilterBarProps {
  searchParams: { q: string };
}

export default function FilterBar({ searchParams }: FilterBarProps) {
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
      <Input placeholder='Search recipes' value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  );
}
