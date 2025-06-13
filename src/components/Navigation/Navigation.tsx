import { useMediaQuery } from 'react-responsive';
import UseMobileMenuStore from '../../zustand/mobileMenu';
import UseModalFormStore from '../../zustand/modalOrderForm';

const Navigation = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 375 });
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  const { openMobileMenu } = UseMobileMenuStore();
  const { openModalForm } = UseModalFormStore();

  return (
    <>
      {!isDesktop && (
        <button
          onClick={() => openMobileMenu()}
          aria-label='Button to open mobile menu'
          className='flex items-center justify-center cursor-pointer group focus:outline-none'
        >
          <svg
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
            className='stroke-[var(--light-text-color)] stroke-2 group-hover:stroke-[var(--hover-text-color)] group-focus:stroke-[var(--hover-text-color)] duration-150 ease-in-out'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='3'
              d='M5.333 8h21.333M5.333 16H16M5.333 24h21.333'
            />
          </svg>
        </button>
      )}

      {isDesktop && (
        <div className='flex items-center gap-5'>
          <ul className='flex items-center gap-2'>
            <li>
              <a
                href='#works'
                className='flex items-center w-full border border-[var(--light-text-color)] text-[var(--light-text-color)] text-[16px] rounded-xl p-3 hover:bg-[var(--hover-button-bg)] hover:border-[var(--hover-button-bg)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)]  focus:text-[var(--hover-text-color)] duration-150 ease-in-out cursor-pointer'
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href='#vegetables'
                className='flex items-center w-full border border-[var(--light-text-color)] text-[var(--light-text-color)] text-[16px] rounded-xl p-3 hover:bg-[var(--hover-button-bg)] hover:border-[var(--hover-button-bg)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)]  focus:text-[var(--hover-text-color)] duration-150 ease-in-out cursor-pointer'
              >
                Vegetables
              </a>
            </li>
            <li>
              <a
                href='#reviews'
                className='flex items-center w-full border border-[var(--light-text-color)] text-[var(--light-text-color)] text-[16px] rounded-xl p-3 hover:bg-[var(--hover-button-bg)] hover:border-[var(--hover-button-bg)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)]  focus:text-[var(--hover-text-color)] duration-150 ease-in-out cursor-pointer'
              >
                Reviews
              </a>
            </li>
          </ul>

          <button
            onClick={() => openModalForm()}
            type='button'
            aria-label='Button to open a modal window with an order form'
            className='flex items-center justify-center text-[var(--light-text-color)] text-[16px] bg-[var(--secondary-bg-section)] rounded-4xl py-3 px-6 cursor-pointer hover:bg-[var(--hover-button-bg)] hover:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)] duration-150 ease-in-out'
          >
            Shop now
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
