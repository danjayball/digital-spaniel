import cx from 'clsx';
import React, { HTMLProps } from 'react';
import './NavBarBurgerMenu.css';

interface NavBarBurgerMenuProps extends HTMLProps<HTMLButtonElement> {
  menuToggled: boolean;
  setMenuToggled: (value: boolean) => void;
}

function NavBarBurgerMenu({
  menuToggled,
  setMenuToggled,
}: NavBarBurgerMenuProps) {
  return (
    <button
      className={cx(
        'nav-bar-burger-menu absolute top-1 right-0 z-20 flex flex-col justify-center items-center w-10 h-10 p-2 rounded ring-accent ring-opacity-50 focus:outline-none focus:ring-2 lg:hidden',
        {
          active: menuToggled,
        }
      )}
      aria-label="Toggle menu"
      aria-pressed={menuToggled ? 'true' : 'false'}
      onClick={() => setMenuToggled(!menuToggled)}
    >
      <div className="w-8 h-0.5 bg-primary"></div>
      <div className="h-1.5"></div>
      <div className="w-8 h-0.5 bg-primary"></div>
      <div className="h-1.5"></div>
      <div className="w-8 h-0.5 bg-primary"></div>
    </button>
  );
}

export default NavBarBurgerMenu;
