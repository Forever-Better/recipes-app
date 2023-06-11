import { Command } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import img from '@/assets/dose-juice-sTPy-oeA3h0-unsplash.jpg';
import { UserAuthForm } from '@/components/UserAuthForm';
import { buttonVariants } from '@/components/ui/button';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import { cn } from '@/lib/utils';

export default function SignupScreen() {
  return (
    <div className='container relative h-[800px] items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <Link
        className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'absolute right-4 top-4 md:right-8 md:top-8')}
        href={getPublicUrl.login()}
      >
        Login
      </Link>
      <div className='relative hidden lg:h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
        <Image
          alt='Image'
          className='object-cover h-full absolute inset-0'
          height={0}
          sizes='50vw'
          src={img}
          width={0}
        />
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <Command className='mr-2 h-6 w-6' /> Acme Inc
        </div>
        <div className='relative z-20 mt-auto'>
          <blockquote className='space-y-2'>
            <p className='text-lg'>
              &ldquo;This library has saved me countless hours of work and helped me deliver stunning designs to my
              clients faster than ever before. Highly recommended!&rdquo;
            </p>
            <footer className='text-sm'>Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col items-center space-y-2 text-center'>
            <Image alt='Authentication' height={48} src='/android-chrome-192x192.png' width={48} />
            <h1 className='text-2xl font-semibold tracking-tight'>Create an account</h1>
            <p className='text-sm text-muted-foreground'>Enter your email below to create your account</p>
          </div>
          <UserAuthForm />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking continue, you agree to our{' '}
            <Link className='underline underline-offset-4 hover:text-primary' href='/terms'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link className='underline underline-offset-4 hover:text-primary' href='/privacy'>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
