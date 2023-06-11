import Image from 'next/image';

import { UserAuthForm } from '@/components/UserAuthForm';

export default function LoginScreen() {
  return (
    <div className='flex items-center h-screen'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col items-center space-y-2 text-center'>
          <Image alt='Authentication' height={48} src='/android-chrome-192x192.png' width={48} />

          <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
          <p className='text-sm text-muted-foreground'>Enter your email and password to sign in to account</p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
