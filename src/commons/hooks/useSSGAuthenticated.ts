import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

import { USER_COOKIE_NAME } from '@commons/utils/constants/cookies';

export const useSSGAuthenticated = () => {
  const router = useRouter();

  const cookies = parseCookies();

  const authenticated = !!cookies[USER_COOKIE_NAME];

  useEffect(() => {
    if (!authenticated) {
      router.replace('/login');
    }
  }, [authenticated]);

  return { authenticated };
};
