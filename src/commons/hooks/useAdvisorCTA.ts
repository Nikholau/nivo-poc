import { useEffect, useState } from 'react';

import { formatToCapitalizeString } from '@commons/utils';

import { useAuthContext } from '@modules/Auth/hooks';

export const useAdvisorCTA = () => {
  const { user } = useAuthContext();
  const [numberPhoneAdvisory, setNumberPhoneAdvisory] = useState('');

  const advisorName = formatToCapitalizeString(
    user?.advisor?.name?.split(' ')[0] || ''
  );

  const handleAddingFiveFiveInToPhone = (advisorPhone: string) => {
    const verifyFiveFive =
      advisorPhone?.startsWith('55') || advisorPhone?.startsWith('+55');

    if (!verifyFiveFive) {
      setNumberPhoneAdvisory(`55${advisorPhone}`);
    } else {
      setNumberPhoneAdvisory(advisorPhone);
    }
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    const advisorPhone = user.advisor?.phone?.replace(' ', '');

    handleAddingFiveFiveInToPhone(advisorPhone);
  }, [user]);

  return {
    numberPhoneAdvisory,
    advisorName,
    user,
  };
};
