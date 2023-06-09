'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import { toast } from '@/hooks/useToast';
import { cn } from '@/lib/utils';
import { userAuthSchema } from '@/lib/validations/auth';

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

type FormData = z.infer<typeof userAuthSchema>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    formState: { errors, isDirty, isValid },
    handleSubmit,
    register
  } = useForm<FormData>({ resolver: zodResolver(userAuthSchema) });
  const [isLoading, setIsLoading] = React.useState(false);
  const [isVKLoading, setIsVKLoading] = React.useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState(false);
  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    const signInResult = await signIn('email', {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get('from') || getPublicUrl.main()
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: 'Something went wrong.',
        description: 'Your sign in request failed. Please try again.',
        variant: 'destructive'
      });
    }

    return toast({
      title: 'Check your email',
      description: 'We sent you a login link. Be sure to check your spam too.'
    });
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
      <div className='flex flex-col gap-2'>
        <Button
          disabled={isLoading || isVKLoading}
          type='button'
          variant='outline'
          onClick={() => {
            setIsVKLoading(true);
            signIn('VK');
          }}
        >
          {isVKLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} VK
        </Button>
        <Button
          disabled={isLoading || isGoogleLoading}
          type='button'
          variant='outline'
          onClick={() => {
            setIsGoogleLoading(true);
            signIn('google');
          }}
        >
          {isGoogleLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />} Google
        </Button>
      </div>
    </div>
  );
}
