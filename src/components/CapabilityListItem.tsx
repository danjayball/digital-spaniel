import React, { HTMLProps } from 'react';

interface CapabilityListItemProps extends HTMLProps<HTMLLIElement> {
  href: string;
}

function CapabilityListItem({
  children,
  href = '',
  ...props
}: CapabilityListItemProps) {
  return (
    <li {...props}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default CapabilityListItem;
