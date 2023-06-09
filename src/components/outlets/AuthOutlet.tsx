'use client';

import { useRouter } from 'next/navigation';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import { getCurrentUser } from '@/lib/session';

export default async function AuthOutlet({ children }: React.PropsWithChildren) {
  const user = await getCurrentUser();
  const router = useRouter();

  if (user) {
    router.replace(getPublicUrl.main());
    return null;
  }

  return <>{children}</>;
}
