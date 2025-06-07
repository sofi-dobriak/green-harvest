import useModalStore from '../../zustand/mobile';
import TabDeskLogo from '../TabDeskLogo.tsx/TabDeskLogo';

const TabletHeader = () => {
  const { openMenu } = useModalStore();
  return (
    <div className='flex items-center justify-between fixed top-5 left-0 w-full px-8'>
      <TabDeskLogo />

      <button
        onClick={() => openMenu()}
        className='flex items-center justify-center cursor-pointer group focus:outline-none'
      >
        <svg
          width={40}
          height={40}
          className='stroke-[#fbfbfb] stroke-2 group-hover:stroke-[#7a3145] group-focus:stroke-[#7a3145] duration-300 ease-in-out'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='3.2'
            d='M5.333 8h21.333M5.333 16H16M5.333 24h21.333'
          />
        </svg>
      </button>
    </div>
  );
};

export default TabletHeader;
