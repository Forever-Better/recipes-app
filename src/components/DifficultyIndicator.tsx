import { cn } from '@/lib/utils';

function DifficultyPoint({ active, className }: { active?: boolean; className?: string }) {
  return (
    <span
      className={cn('rounded-full inline-block', `h-[10px] w-[10px]`, !active && '!bg-transparent border-2', className)}
    />
  );
}

export default function DifficultyIndicator({ ingredientsLength }: { ingredientsLength: number }) {
  return (
    <div className='flex gap-[3px] mt-2'>
      {[...Array(4)].map((_, i) => {
        const easy = ingredientsLength <= 5;
        const simple = ingredientsLength > 5;
        const difficult = ingredientsLength > 10;
        const hard = ingredientsLength > 15;

        return (
          <DifficultyPoint
            key={i}
            active={i === 0 || (simple && i === 1) || (difficult && i === 2) || (hard && i === 3)}
            className={cn({
              'bg-green-500': easy,
              'bg-yellow-500': simple,
              'bg-orange-500': difficult,
              'bg-red-500': hard
            })}
          />
        );
      })}
    </div>
  );
}
