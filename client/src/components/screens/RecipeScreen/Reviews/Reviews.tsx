import ReviewItem from './ReviewItem';

export default function Reviews() {
  return (
    <div>
      <h3 className='text-2xl font-medium mb-8'>Reviews</h3>
      <ul>
        <li className='border-b py-4 last:border-b-0 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
          <ReviewItem />
        </li>
        <li className='border-b py-4 last:border-b-0 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
          <ReviewItem />
        </li>
        <li className='border-b py-4 last:border-b-0 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
          <ReviewItem />
        </li>
        <li className='border-b py-4 last:border-b-0 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
          <ReviewItem />
        </li>
        <li className='border-b py-4 last:border-b-0 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted'>
          <ReviewItem />
        </li>
      </ul>
    </div>
  );
}
