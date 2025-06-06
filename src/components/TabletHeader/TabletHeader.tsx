import TabDeskLogo from '../TabDeskLogo.tsx/TabDeskLogo';

const TabletHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <TabDeskLogo />

      <button className='flex items-center justify-center cursor-pointer group focus:outline-none'>
        <svg
          width={40}
          height={40}
          className='stroke-[#fbfbfb] stroke-2 group-hover:stroke-[#7a3145] group-focus:stroke-[#7a3145] duration-300 ease-in-out'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='3.2'
            d='M5.333 8h21.333M5.333 16H16M5.333 24h21.333'
          />
        </svg>
      </button>
    </div>
  );
};

export default TabletHeader;
