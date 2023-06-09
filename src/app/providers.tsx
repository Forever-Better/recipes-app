'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import SessionProvider from '@/components/providers/SessionProvider';

export default function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  );
}
