import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper';
import { AuthService } from '@/services/auth/auth.service';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const { logout, refresh } = useActions();

  useEffect(() => {
    const accessToken = getAccessToken();

    if (accessToken) {
      refresh();
    }
  }, [refresh]);

  useEffect(() => {
    const refreshToken = getRefreshToken();

    if (!refreshToken && user) {
      logout();
    }
  }, [logout, user]);

  return <>{children}</>;
}
