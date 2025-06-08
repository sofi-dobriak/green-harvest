import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='flex items-center justify-between fixed w-full py-2.5 px-5 md:px-5 xl:py-4 xl:px-25 bg-[rgba(20,20,20,0.05)] backdrop-blur-lg'>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
