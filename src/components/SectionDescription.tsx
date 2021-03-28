import React, { HTMLProps } from 'react';

function SectionDescription({ children }: HTMLProps<HTMLParagraphElement>) {
  return (
    <p className="text-secondary text-lg max-w-[420px] mb-14 lg:text-[21px] lg:leading-[38px]">
      {children}
    </p>
  );
}

export default SectionDescription;
