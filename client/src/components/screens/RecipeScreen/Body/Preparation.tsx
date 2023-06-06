import { MoveRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { Recipe } from '@/types/recipe.interface';

interface PreparationProps {
  data: { source: Recipe['source']; url: Recipe['url'] };
}

export default function Preparation({ data }: PreparationProps) {
  return (
    <Card className='h-fit'>
      <CardHeader className='text-xl font-medium'>Preparation</CardHeader>
      <CardContent>
        <p>
          You can read cooking instructions on{' '}
          <Link className='underline' href={data.url} target='_blank'>
            {data.source}
          </Link>
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant='outline'>
          <Link href={data.url} target='_blank'>
            Instructions <MoveRight className='ml-2' size={18} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
