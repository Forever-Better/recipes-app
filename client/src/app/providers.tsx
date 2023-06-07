'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import AuthProvider from '@/components/providers/AuthProvider';
import StoreProvider from '@/components/providers/StoreProvider';

export default function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <StoreProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </StoreProvider>
  );
}
