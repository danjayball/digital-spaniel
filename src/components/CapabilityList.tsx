import React, { HTMLProps } from 'react';
import cx from 'clsx';
import './CapabilityList.css';

function CapabilityList({
  children,
  className = '',
  ...props
}: HTMLProps<HTMLUListElement>) {
  return (
    <ul
      className={cx(
        'capability-list text-secondary font-medium text-lg leading-normal lg:text-[21px]',
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

export default CapabilityList;
