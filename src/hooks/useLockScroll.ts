import { useState, useEffect } from 'react';

/**
 * Lock or unlock scrolling of the current window.
 */
const useLockScroll = () => {
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    if (locked) {
      document.querySelectorAll('html, body').forEach((el) => {
        el.classList.add('overflow-hidden');
      });
    } else {
      document.querySelectorAll('html, body').forEach((el) => {
        el.classList.remove('overflow-hidden');
      });
    }
  }, [locked]);

  return [locked, setLocked] as const;
};

export default useLockScroll;
