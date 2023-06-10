'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import SessionProvider from '@/components/providers/SessionProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export default function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ThemeProvider enableSystem attribute='class' defaultTheme='system'>
          {children}
        </ThemeProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
