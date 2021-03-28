import React, { HTMLProps } from 'react';
import cx from 'clsx';

function SectionTitle({
  children,
  className = '',
  ...props
}: HTMLProps<HTMLHeadingElement>) {
  return (
    <h1 className={cx('font-title text-4xl lg:text-5xl', className)} {...props}>
      {children}
    </h1>
  );
}

export default SectionTitle;
