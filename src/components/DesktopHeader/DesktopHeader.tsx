import TabDeskLogo from '../TabDeskLogo.tsx/TabDeskLogo';

const DesktopHeader = () => {
  return (
    <div className='flex items-center justify-between fixed top-5 left-0 w-full px-25'>
      <TabDeskLogo />

      <div className='flex items-center gap-5'>
        <ul className='flex items-center gap-2'>
          <li>
            <a
              href='#'
              className='flex items-center w-full border border-[#fbfbfb] rounded-xl p-3 hover:bg-[#fbfbfb]  focus:bg-[#fbfbfb] hover:text-[#7a3145] focus:text-[#7a3145] duration-300 ease-in-out cursor-pointer'
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center w-full border border-[#fbfbfb] rounded-xl p-3 hover:bg-[#fbfbfb]  focus:bg-[#fbfbfb] hover:text-[#7a3145] focus:text-[#7a3145]  duration-300 ease-in-out cursor-pointer'
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center  w-full border border-[#fbfbfb] rounded-xl p-3  hover:bg-[#fbfbfb]  focus:bg-[#fbfbfb] hover:text-[#7a3145] focus:text-[#7a3145] duration-300 ease-in-out cursor-pointer'
            >
              Reviews
            </a>
          </li>
        </ul>

        <button
          type='button'
          className='flex items-center justify-center border-2 border-[#7a3145] bg-[#7a3145] rounded-4xl py-3 px-6 cursor-pointer hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145] duration-300 ease-in-out'
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default DesktopHeader;
