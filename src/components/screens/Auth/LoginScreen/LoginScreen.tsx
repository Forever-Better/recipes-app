import React from 'react';

import { UserAuthForm } from '@/components/UserAuthForm';

export default function LoginScreen() {
  return (
    <div className='flex items-center h-[calc(100vh-56px)]'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Welcome back</h1>
          <p className='text-sm text-muted-foreground'>Enter your email and password to sign in to account</p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
