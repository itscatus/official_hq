import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      const heroHeight = window.innerHeight * 0.9; // Atau sesuaikan tinggi Hero section
      setScrolledPastHero(scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`p-5 md:flex items-top justify-between`}>
      {/* Top Right Logo (Desktop only) */}
      <div className="order-1 hidden flex-1 items-start justify-start p-2 md:flex">
        <Link href="/">{props.logo}</Link>
      </div>
      {/* Menu Button (Mobile) */}
      <div className="mb-6 flex flex-row-reverse items-center justify-between md:hidden">
        <button
          className="group relative flex size-10 items-center justify-center"
          onClick={toggleDrawer}
          aria-label="Toggle Menu"
        >
          {/* Deco Items (9 bars) */}
          <div className="absolute right-1 top-1 size-1 rounded-full bg-white"></div>
          <div className="absolute right-3 top-1 size-1 rounded-full bg-white"></div>
          <div className="absolute right-5 top-1 size-1 rounded-full bg-white"></div>
          <div className="absolute right-1 top-3 size-1 rounded-full bg-white"></div>
          <div className="absolute right-3 top-3 size-1 rounded-full bg-white"></div>
          <div className="absolute right-1 top-3 size-1 rounded-full bg-white"></div>
          <div className="absolute right-3 top-3 size-1 rounded-full bg-white"></div>
          <div className="absolute right-5 top-3 size-1 rounded-full bg-white"></div>
          <div className="absolute right-1 top-5 size-1 rounded-full bg-white"></div>
          <div className="absolute right-3 top-5 size-1 rounded-full bg-white"></div>
          <div className="absolute right-5 top-5 size-1 rounded-full bg-white"></div>
          {/* Menu Text */}
          <span className="sr-only">Menu</span>
        </button>
        <div className="md:hidden">{props.logo}</div>
      </div>
      {/* Menu Button (Mobile) */}
      <div className="order-2 w-full bg-transparent p-0 md:order-2 md:w-60">
        {/* Navigation Menu Overlay */}
        <div
          className={`bg-blue/50 fixed right-0 top-0 z-40 h-full w-60 shadow-lg backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-5 pt-7">
            <ul className="flex flex-col items-end space-y-4 text-right text-red-200 ">
              {/* next ganti warnanya aja */}
              <button
                className="group relative flex size-10 items-center justify-center"
                onClick={toggleDrawer}
                aria-label="Toggle Menu"
              >
                {/* Deco Items (9 bars) */}
                <div className="absolute right-1 top-1 size-1 rounded-full bg-white"></div>
                {/* <div className="absolute right-3 top-1 size-1 rounded-full bg-white"></div> */}
                <div className="absolute right-5 top-1 size-1 rounded-full bg-white"></div>
                {/* <div className="absolute right-1 top-3 size-1 rounded-full bg-white"></div> */}
                {/* <div className="absolute right-3 top-3 size-1 rounded-full bg-white"></div> */}
                {/* <div className="absolute right-1 top-3 size-1 rounded-full bg-white"></div> */}
                <div className="absolute right-3 top-3 size-1 rounded-full bg-white"></div>
                {/* <div className="absolute right-5 top-3 size-1 rounded-full bg-white"></div> */}
                <div className="absolute right-1 top-5 size-1 rounded-full bg-white"></div>
                {/* <div className="absolute right-3 top-5 size-1 rounded-full bg-white"></div> */}
                <div className="absolute right-5 top-5 size-1 rounded-full bg-white"></div>
                {/* Menu Text */}
                <span className="sr-only">Menu</span>
              </button>
              {props.children}
            </ul>
          </div>
        </div>
        {/* Navigation Menu Desktop */}
        <div
          className={`hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6`}
        >
          <ul
            className={`m-5 flex flex-col items-end space-x-0 space-y-4 text-right text-red-200 md:space-x-6 md:space-y-0 ${
              scrolledPastHero ? 'flex-row' : 'flex-col'
            }`}
          >
            {/* next ganti warnanya aja */}
            {props.children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { NavbarTwoColumns };
