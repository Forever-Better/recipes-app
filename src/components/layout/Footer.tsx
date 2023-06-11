import Image from 'next/image';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { ThemeToggle } from '../ThemeToggle';

export default function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn('border-t', className)}>
      <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
          <Image alt='Logo' height={36} src='/android-chrome-192x192.png' width={36} />
          <p className='text-center text-sm leading-loose md:text-left'>
            Built by{' '}
            <a
              className='font-medium underline underline-offset-4'
              href={siteConfig.links.githubProfile}
              rel='noreferrer'
              target='_blank'
            >
              ForeverBetter
            </a>
            . Hosted on{' '}
            <a
              className='font-medium underline underline-offset-4'
              href='https://vercel.com'
              rel='noreferrer'
              target='_blank'
            >
              Vercel
            </a>
            . Inspired by{' '}
            <a
              className='font-medium underline underline-offset-4'
              href='https://twitter.com/shadcn'
              rel='noreferrer'
              target='_blank'
            >
              shadcn
            </a>
            . The source code is available on{' '}
            <a
              className='font-medium underline underline-offset-4'
              href={siteConfig.links.github}
              rel='noreferrer'
              target='_blank'
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}
