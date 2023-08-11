import { useState, useEffect, useCallback } from 'react';

import { addSeconds, differenceInSeconds } from 'date-fns';

export interface UseCountdown {
  durationTimeInSeconds: number;
  startWhen?: unknown;
}

const formatTime = (time: number) => time.toString().padStart(2, '0');

export const useCountdown = ({
  durationTimeInSeconds,
  startWhen,
}: UseCountdown) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(durationTimeInSeconds);

  const hours = Math.floor(secondsLeft / 60 / 60);
  const minutes = Math.floor((secondsLeft / 60) % 60);
  const seconds = secondsLeft % 60;

  const formattedMinutes = formatTime(minutes);
  const formattedSeconds = formatTime(seconds);

  const handleChange = useCallback(
    (value: number) => setSecondsLeft(value),
    []
  );

  useEffect(() => {
    const startTime = new Date();
    const endTime = addSeconds(startTime, durationTimeInSeconds);

    if (!startWhen && startWhen !== undefined) return;

    const interval = setInterval(() => {
      const secondsDiff = differenceInSeconds(endTime, new Date());

      if (secondsDiff < 0) {
        clearInterval(interval);
        return;
      }

      setSecondsLeft(secondsDiff);
    }, 1000);

    return () => clearInterval(interval);
  }, [startWhen, durationTimeInSeconds]);

  return {
    minutes,
    seconds,
    hours,
    formattedTime: `${formattedMinutes}:${formattedSeconds}`,
    handleChange,
  };
};
