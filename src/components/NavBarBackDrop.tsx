import React, { HTMLProps } from 'react';
import cx from 'clsx';

interface NavBarBackDropProps extends HTMLProps<HTMLDivElement> {
  menuToggled: boolean;
  setMenuToggled: (value: boolean) => void;
}

function NavBarBackDrop({ menuToggled, setMenuToggled }: NavBarBackDropProps) {
  return (
    <div
      className={cx(
        'fixed top-0 left-0 h-screen w-screen z-10 bg-black transition-opacity lg:pointer-events-none lg:d-none',
        {
          'opacity-0 pointer-events-none': !menuToggled,
          'opacity-50 pointer-events-auto': menuToggled,
        }
      )}
      onClick={() => setMenuToggled(false)}
    ></div>
  );
}

export default NavBarBackDrop;
