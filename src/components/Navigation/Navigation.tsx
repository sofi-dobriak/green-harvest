import { useMediaQuery } from 'react-responsive';
import useModalStore from '../../zustand/mobile';

const Navigation = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 375 });
  const isDesktop: boolean = useMediaQuery({ minWidth: 1280 });

  const { openMenu } = useModalStore();

  return (
    <>
      {!isDesktop && (
        <button
          onClick={() => openMenu()}
          className='flex items-center justify-center cursor-pointer group focus:outline-none'
        >
          <svg
            width={isMobile ? 32 : 40}
            height={isMobile ? 32 : 40}
            className='stroke-[#fbfbfb] stroke-2 group-hover:stroke-[#7a3145] group-focus:stroke-[#7a3145] duration-300 ease-in-out'
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
                href='#'
                className='flex items-center w-full border border-[#fbfbfb] text-[#fbfbfb] text-[16px] rounded-xl p-3 hover:bg-[#d4bfc4] hover:border-[#d4bfc4] hover:text-[#7a3145] focus:bg-[#fbfbfb]  focus:text-[#7a3145] duration-300 ease-in-out cursor-pointer'
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center w-full border border-[#fbfbfb] text-[#fbfbfb] text-[16px] rounded-xl p-3 hover:bg-[#d4bfc4] hover:border-[#d4bfc4] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145]  duration-300 ease-in-out cursor-pointer'
              >
                Vegetables
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center  w-full border border-[#fbfbfb] text-[#fbfbfb] text-[16px] rounded-xl p-3  hover:bg-[#d4bfc4] hover:border-[#d4bfc4] hover:text-[#7a3145] focus:bg-[#fbfbfb]  focus:text-[#7a3145] duration-300 ease-in-out cursor-pointer'
              >
                Reviews
              </a>
            </li>
          </ul>

          <button
            type='button'
            className='flex items-center justify-center text-[#fbfbfb] text-[16px] bg-[#7a3145] rounded-4xl py-3 px-6 cursor-pointer hover:bg-[#d4bfc4] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145] duration-300 ease-in-out'
          >
            Shop now
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
