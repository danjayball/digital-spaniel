import { useState, useEffect, createElement, Fragment, HTMLProps } from 'react';

interface ClientOnlyProps extends HTMLProps<any> {
  fallback?: JSX.Element;
}

function ClientOnly({ children, fallback }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return createElement(Fragment, { children: fallback });
  }

  return createElement(Fragment, { children });
}

export default ClientOnly;
