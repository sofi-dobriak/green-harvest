import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className='fixed w-full py-2.5 px-5 md:px-5 xl:py-4 xl:px-20 backdrop-blur-[3px] bg-[#576f3585] z-998'>
      <div className='flex items-center justify-between w-full max-w-[375px] md:max-w-[768px] xl:max-w-[1280px]  mx-auto '>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
