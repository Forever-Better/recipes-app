'use client';

import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { cn } from '@/lib/utils';
import type { SignupData } from '@/store/user/user.interface';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register
  } = useForm<SignupData>();
  const { isLoading } = useTypedSelector((state) => state.user);
  const { login, signup } = useActions();

  function onSubmit(data: SignupData) {
    signup(data);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            {/* <Label className='sr-only' htmlFor='email'>
              Email
            </Label> */}
            <Input
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              id='email'
              placeholder='name@example.com'
              type='email'
              {...register('email', { minLength: { value: 8, message: 'Минимум 8 символов' }, required: true })}
            />
            {errors.email?.message && <span className='text-sm'>{errors.email.message}</span>}
            <Input
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              className='mt-1'
              disabled={isLoading}
              id='password'
              placeholder='Password'
              type='password'
              {...register('password', { minLength: { value: 6, message: 'Минимум 6 символов' }, required: true })}
            />
            {errors.password && <span className='text-sm text-muted-foreground'>{errors.password.message}</span>}
          </div>
          <Button disabled={isLoading || (isDirty && !isValid)}>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>Or continue with</span>
        </div>
      </div>
      <Button disabled={isLoading} type='button' variant='outline'>
        {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Github
      </Button>
    </div>
  );
}
