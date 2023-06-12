'use client';

import Diet from './Diet';

interface FilterBarProps {
  searchParams: { q: string };
}

export default function FilterBar({ searchParams }: FilterBarProps) {
  return (
    <div className='grid grid-cols-4 max-w-3xl'>
      <Diet />
    </div>
  );
}
