import isBrowser from '@/utils/isBrowser';
import { useState, useEffect } from 'react';

/**
 * Creates a listener for if a media query matches the current window.
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    isBrowser ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handler = () =>
      setMatches(isBrowser ? mediaQueryList.matches : false);

    mediaQueryList.addEventListener('change', handler);

    handler();

    return () => {
      mediaQueryList.removeEventListener('change', handler);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
