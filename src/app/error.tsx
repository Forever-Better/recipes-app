'use client';

import { Frown } from 'lucide-react';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='container mt-96 items-center gap-3 text-center flex flex-col'>
      <Frown size={32} />
      <p>
        We can only receive recipes 10 times per minute.
        <br /> Please try again later!
      </p>
      <Button
        variant='outline'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
