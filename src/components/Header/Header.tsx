import clsx from 'clsx';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useEffect } from 'react';
import useScrollStore from '../../zustand/scroll';

const Header = () => {
  const { isScroll, setIsScroll } = useScrollStore();

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScroll(window.pageYOffset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => window.removeEventListener('scroll', handleScroll);
  }, [setIsScroll]);

  return (
    <header
      className={clsx(
        'fixed w-full py-2.5 px-5 md:px-5 xl:py-4 xl:px-20 backdrop-blur-[3px]  z-998',
        isScroll ? 'bg-[#a2666637]' : 'bg-transparent'
      )}
    >
      <div className='flex items-center justify-between w-full max-w-[375px] md:max-w-[768px] xl:max-w-[1280px]  mx-auto '>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
