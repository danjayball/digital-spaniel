import React, { useEffect, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import cx from 'clsx';
import NavBarLink from './NavBarLink';
import NavBarBurgerMenu from './NavBarBurgerMenu';
import useWindowScroll from '@/hooks/useWindowScroll';
import useLockScroll from '@/hooks/useLockScroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import NavBarLinks from './NavBarLinks';
import NavBarBackDrop from './NavBarBackDrop';

function NavBar() {
  const { y, deltaY } = useWindowScroll();
  const [mounted, setMounted] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);
  const [_, setLocked] = useLockScroll();
  const matches = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (menuToggled && matches) {
      setLocked(true);
    } else {
      setLocked(false);
    }
  }, [menuToggled, matches]);

  return (
    <nav
      className={cx(
        'block fixed top-0 w-screen z-50 transition-all transform lg:px-8 2xl:px-44',
        !mounted &&
          'bg-transparent text-primary py-8 translate-y-0 lg:text-white',
        mounted && {
          'bg-transparent text-primary px-4 py-4 xl:py-4 2xl:py-8 lg:text-white':
            y <= 100,
          'bg-white text-primary px-4 py-4': y > 100,
          'translate-y-0': deltaY >= 0,
          '-translate-y-full': deltaY < 0 && y > 500,
          'opacity-0': !mounted,
          'opacity-100': mounted,
        }
      )}
    >
      <div className="container mx-auto flex justify-between items-center relative z-20">
        <StaticImage
          src="../images/logo.png"
          alt="Digital Spaniel logo"
          placeholder="none"
          className={cx(
            'transition-all',
            !mounted || (mounted && y <= 100)
              ? 'w-[96px] lg:w-[150px] 2xl:w-[196px]'
              : 'w-[96px]'
          )}
          loading="eager"
        />

        <NavBarLinks menuToggled={menuToggled}>
          <NavBarLink href="#services" active>
            Services
          </NavBarLink>
          <NavBarLink href="#work">Work</NavBarLink>
          <NavBarLink href="#about">About</NavBarLink>
          <NavBarLink href="#blog">Blog</NavBarLink>
          <NavBarLink href="#contact">Contact</NavBarLink>
        </NavBarLinks>

        <NavBarBurgerMenu
          menuToggled={menuToggled}
          setMenuToggled={setMenuToggled}
        />

        <NavBarBackDrop
          menuToggled={menuToggled}
          setMenuToggled={setMenuToggled}
        />
      </div>
    </nav>
  );
}

export default NavBar;
