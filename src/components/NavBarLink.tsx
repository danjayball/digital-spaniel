import React, { HTMLProps } from 'react';
import cx from 'clsx';
import './NavBarLink.css';

interface NavBarLinkProps extends HTMLProps<HTMLLIElement> {
  active?: boolean;
  href: string;
}

function NavBarLink({
  active = false,
  className = '',
  href,
  children,
  ...props
}: NavBarLinkProps) {
  return (
    <li
      {...props}
      className="nav-bar-link-wrapper px-6 py-4 text-3xl text-right lg:py-0 lg:text-base lg:text-left"
    >
      <a
        href={href}
        className={cx('nav-bar-link relative px-2', {
          active,
        })}
      >
        {children}
      </a>
    </li>
  );
}

export default NavBarLink;
