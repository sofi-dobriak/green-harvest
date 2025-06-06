import { useMediaQuery } from 'react-responsive';

const MobileMenu = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 767 });
  const isTablet: boolean = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  return (
    <div className='bg-[rgba(20,20,20,0.4)] fixed inset-0  flex items-center justify-end z-999'>
      <div className='bg-[#576f35] h-full w-full max-w-[375px] relative p-[52px] flex justify-center'>
        {isMobile && (
          <button className='flex items-center justify-center cursor-pointer group focus:outline-none'>
            <svg
              width={32}
              height={32}
              className='stroke-[#fbfbfb] stroke-2 group-hover:stroke-[#7a3145] group-focus:stroke-[#7a3145] duration-300 ease-in-out absolute top-5 right-5'
            >
              (
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3'
                d='M24 8 8 24M8 8l16 16'
              />
              )
            </svg>
          </button>
        )}

        {isTablet && (
          <button className='flex items-center justify-center cursor-pointer group focus:outline-none'>
            <svg
              width={40}
              height={40}
              className='stroke-[#fbfbfb] stroke-2 group-hover:stroke-[#7a3145] group-focus:stroke-[#7a3145] duration-300 ease-in-out  absolute top-5 right-5'
            >
              (
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='3.2'
                d='M24 8 8 24M8 8l16 16'
              />
              )
            </svg>
          </button>
        )}

        <div className='flex flex-col justify-between'>
          <ul className='flex flex-col gap-5 items-center m-auto'>
            <li>
              <a
                href='#'
                className='flex items-center  justify-center w-[118px] border border-[#fbfbfb] rounded-xl p-3 hover:bg-[#fbfbfb]  focus:bg-[#fbfbfb] hover:text-[#7a3145]  focus:text-[#7a3145] duration-300 ease-in-out cursor-pointer'
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center w-[118px] border border-[#fbfbfb] rounded-xl p-3 hover:bg-[#fbfbfb]  focus:bg-[#fbfbfb] hover:text-[#7a3145]  focus:text-[#7a3145]  duration-300 ease-in-out cursor-pointer'
              >
                Vegetables
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center w-[118px] border border-[#fbfbfb] rounded-xl p-3 hover:bg-[#fbfbfb]  focus:bg-[#fbfbfb] hover:text-[#7a3145]  focus:text-[#7a3145]  duration-300 ease-in-out cursor-pointer '
              >
                Reviews
              </a>
            </li>
          </ul>

          <button
            type='button'
            className='w-full min-w-[176px] h-[52px] border-2 border-[#7a3145] bg-[#7a3145] rounded-4xl  cursor-pointer hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145] duration-300 ease-in-out'
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
