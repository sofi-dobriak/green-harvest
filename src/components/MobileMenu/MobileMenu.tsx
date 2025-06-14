import { useMediaQuery } from 'react-responsive';
import clsx from 'clsx';
import { useEffect } from 'react';
import UseMobileMenuStore from '../../zustand/mobileMenu';
import useModalFormStore from '../../zustand/modalOrderForm';

const MobileMenu = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  const { isMobileOpen, closeMobileMenu } = UseMobileMenuStore();
  const { openModalForm } = useModalFormStore();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [closeMobileMenu]);

  const handleOpenModal = () => {
    closeMobileMenu();
    openModalForm();
  };

  return (
    <div
      onClick={() => closeMobileMenu()}
      className={clsx(
        'bg-[var(--mobile-backdrop-bg)] fixed inset-0 flex items-center justify-end z-999 duration-150 ease-in-out',
        isMobileOpen
          ? 'translate-x-0 opacity-100 visible pointer-events-auto'
          : '-translate-x-full opacity-0 invisible pointer-events-none'
      )}
    >
      <div
        onClick={e => e.stopPropagation()}
        className='bg-[var(--background-color)] h-full w-full max-w-[375px] relative p-[52px] flex justify-center'
      >
        {!isDesktop && (
          <button
            onClick={() => closeMobileMenu()}
            aria-label='Button to close mobile menu'
            className='flex items-center justify-center cursor-pointer group focus:outline-none'
          >
            <svg
              width={isMobile ? 32 : 40}
              height={isMobile ? 32 : 40}
              className='stroke-[var(--light-text-color)] stroke-2 group-hover:stroke-[var(--hover-text-color)] group-focus:stroke-[var(--hover-text-color)] duration-150 ease-in-out absolute top-5 right-5'
            >
              (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M24 8 8 24M8 8l16 16'
              />
              )
            </svg>
          </button>
        )}

        <div className='flex flex-col justify-between'>
          <ul className='flex flex-col gap-5 items-center m-auto'>
            <li onClick={closeMobileMenu}>
              <a
                href='#works'
                className='flex items-center justify-center w-[118px] border border-[var(--light-text-color)] text-[var(--light-text-color)] text-[16px] rounded-xl p-3 hover:bg-[var(--border-color)] hover:border-[var(--border-color)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)]  duration-150 ease-in-out cursor-pointer'
              >
                How It Works
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                href='#vegetables'
                className='flex items-center justify-center w-[118px] border border-[var(--light-text-color)] text-[var(--light-text-color)] text-[16px] rounded-xl p-3 hover:bg-[var(--border-color)] hover:border-[var(--border-color)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)]  duration-150 ease-in-out cursor-pointer'
              >
                Vegetables
              </a>
            </li>
            <li onClick={closeMobileMenu}>
              <a
                href='#reviews'
                className='flex items-center justify-center w-[118px] border border-[var(--light-text-color)] text-[var(--light-text-color)] text-[16px] rounded-xl p-3 hover:bg-[var(--border-color)] hover:border-[var(--border-color)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)]  duration-150 ease-in-out cursor-pointer'
              >
                Reviews
              </a>
            </li>
          </ul>

          <button
            onClick={handleOpenModal}
            type='button'
            aria-label='Button to open a modal window with an order form'
            className='w-full min-w-[176px] h-[52px] text-[var(--light-text-color)] text-[14px] md:text-[16px] bg-[var(--secondary-bg-section)] rounded-4xl  cursor-pointer hover:bg-[var(--hover-button-bg)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)] duration-150 ease-in-out'
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
