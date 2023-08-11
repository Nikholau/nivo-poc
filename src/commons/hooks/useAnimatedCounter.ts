import { useState, useEffect } from 'react';

import { animate } from 'framer-motion';

interface AnimatedCounterProps {
  maxValue: number;
  initialValue?: number;
  duration?: number;
  delay?: number;
  type?: 'easeOut' | 'easeInOut' | 'linear';
  startWhen?: Array<boolean>;
}

export const useAnimatedCounter = ({
  maxValue,
  initialValue = 0,
  duration = 1,
  delay = 0,
  type = 'easeOut',
  startWhen = [],
}: AnimatedCounterProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  useEffect(() => {
    const controls = animate(initialValue, maxValue, {
      duration,
      delay,
      ease: type,
      onUpdate: value => setCounter(value),
    });

    return controls.stop;
  }, [initialValue, maxValue, duration, ...startWhen]);

  return counter;
};
