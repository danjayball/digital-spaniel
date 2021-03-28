import { useState, useEffect } from 'react';

type ScrollState = {
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
};

const isBrowser = typeof window !== 'undefined';

/**
 * Returns the current x and y coordinates of the window's scroll,
 * as well as the delta information for indentifying direction.
 */
const useWindowScroll = (): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    x: isBrowser ? window.pageXOffset : 0,
    y: isBrowser ? window.pageYOffset : 0,
    deltaX: 0,
    deltaY: 0,
  });

  useEffect(() => {
    const handler = () => {
      setScrollState((prevState) => {
        const { pageXOffset, pageYOffset } = window;
        if (prevState.x === pageXOffset && prevState.y === pageYOffset) {
          return prevState;
        }

        return {
          x: pageXOffset,
          y: pageYOffset,
          deltaX: prevState.x - pageXOffset,
          deltaY: prevState.y - pageYOffset,
        };
      });
    };

    handler();

    window.addEventListener('scroll', handler, {
      capture: false,
      passive: true,
    });
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [scrollState]);

  return scrollState;
};

export default useWindowScroll;
