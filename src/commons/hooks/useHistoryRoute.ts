import { useRef } from 'react';

import { useRouter } from 'next/router';

export const useHistoryRoute = () => {
  const router = useRouter();

  const ref = useRef<string[]>([]);

  router.events?.on('routeChangeStart', () => {
    ref.current.push(router.asPath);
  });

  return ref.current;
};
