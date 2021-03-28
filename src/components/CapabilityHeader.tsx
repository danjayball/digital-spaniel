import React, { HTMLProps } from 'react';

function CapabilityHeader({ children }: HTMLProps<HTMLHeadingElement>) {
  return (
    <h2 className="text-primary font-title text-lg leading-normal mb-5 uppercase lg:text-[21px]">
      {children}
    </h2>
  );
}

export default CapabilityHeader;
