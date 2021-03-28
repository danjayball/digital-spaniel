import React, { HTMLProps } from 'react';

function SectionLink({ children, href = '#' }: HTMLProps<HTMLAnchorElement>) {
  return (
    <a href={href} className="section-link">
      {children}
    </a>
  );
}

export default SectionLink;
