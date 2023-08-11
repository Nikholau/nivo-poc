import { useEffect } from 'react';

import { useTour } from '@reactour/tour';
import { useRouter } from 'next/router';

import { firstPopover } from '@commons/providers/tour/steps';
import { formatToCapitalizeString } from '@commons/utils';
import { verifyPageView } from '@commons/utils/userTutorial';

import { useAdvisoryContext } from '@modules/Advisory/hooks';
import { useAuthContext } from '@modules/Auth/hooks';

export const usePresentsTour = () => {
  const { user } = useAuthContext();
  const { advisor } = useAdvisoryContext();

  const { isOpen, setIsOpen, setSteps, setCurrentStep } = useTour();
  const { pathname } = useRouter();
  const splitBar = pathname.split('/');
  const currentPath = splitBar[splitBar.length - 1];

  // Setup verify display tour
  useEffect(() => {
    setIsOpen(false);

    if (advisor || !user) {
      return;
    }

    const steps = verifyPageView({ currentPath, user });
    setCurrentStep(0);

    if (steps.length > 0) {
      if (currentPath === 'home') {
        const firstStepWithUsername = firstPopover(
          formatToCapitalizeString(user?.name?.split(' ')[0] || null)
        );

        setSteps([firstStepWithUsername, ...steps]);
      } else {
        setSteps(steps);
      }

      setIsOpen(true);
    }

    return () => {
      if (isOpen) {
        return setIsOpen(false);
      }
    };
  }, [user, currentPath]);
};
