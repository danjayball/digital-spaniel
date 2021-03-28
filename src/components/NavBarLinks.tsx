import React, { HTMLProps } from 'react';
import cx from 'clsx';
import './NavBarLinks.css';
import FacebookIcon from '@/assets/svg/facebook.inline.svg';
import TwitterIcon from '@/assets/svg/twitter.inline.svg';
import InstagramIcon from '@/assets/svg/instagram.inline.svg';
import LinkedinIcon from '@/assets/svg/linkedin.inline.svg';

interface NavBarLinksProps extends HTMLProps<HTMLUListElement> {
  menuToggled: boolean;
}

function NavBarLinks({ children, menuToggled }: NavBarLinksProps) {
  return (
    <ul
      className={cx(
        'nav-bar-links flex font-medium flex-col fixed z-20 bg-white top-0 right-0 w-3/4 max-w-sm h-screen pt-16 transform duration-200 transition-transform lg:w-auto lg:max-w-none lg:h-auto lg:flex-row lg:relative lg:bg-transparent lg:translate-x-0 lg:pt-0',
        {
          'translate-x-full ease-in': !menuToggled,
          'active translate-x-0 ease-out': menuToggled,
        }
      )}
    >
      {children}

      <li
        className={cx(
          'flex justify-center absolute bottom-0 left-0 text-secondary p-4 w-full transform transition-all lg:hidden',
          {
            'opacity-100 translate-y-0': menuToggled,
            'opacity-0 translate-y-full': !menuToggled,
          }
        )}
      >
        <FacebookIcon className="w-6 h-6 fill-current opacity-75 transition-opacity mx-4 hover:opacity-100" />
        <TwitterIcon className="w-6 h-6 fill-current opacity-75 transition-opacity mx-4 hover:opacity-100" />
        <InstagramIcon className="w-6 h-6 fill-current opacity-75 transition-opacity mx-4 hover:opacity-100" />
        <LinkedinIcon className="w-6 h-6 fill-current opacity-75 transition-opacity mx-4 hover:opacity-100" />
      </li>
    </ul>
  );
}

export default NavBarLinks;
