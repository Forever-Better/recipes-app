'use client';

import { useRouter } from 'next/navigation';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import { useAuth } from '@/hooks/useAuth';

export default function AuthOutlet({ children }: React.PropsWithChildren) {
  const { isLoading, user } = useAuth();
  const router = useRouter();

  if (isLoading) return null;

  if (user) {
    router.replace(getPublicUrl.main());
    return null;
  }

  return <>{children}</>;
}
