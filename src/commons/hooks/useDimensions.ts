import { useState, useEffect, RefObject } from 'react';

interface Dimensions {
  width: number;
  height: number;
}

interface UseDimensionsProps {
  refElement: RefObject<HTMLElement>;
  resize?: boolean;
}

export const useDimensions = ({
  refElement,
  resize = false,
}: UseDimensionsProps) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!refElement?.current || !window) return;

    const onResize = () => {
      setDimensions({
        width: refElement?.current?.clientWidth,
        height: refElement?.current?.clientHeight,
      });
    };

    onResize();

    if (resize) {
      window.addEventListener('resize', onResize);
    }

    return () => window.removeEventListener('resize', onResize);
  }, [refElement]);

  return dimensions;
};
