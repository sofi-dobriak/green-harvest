import mobLogo from '../../assets/images/mobLogo.png';
import mobLogoWebp from '../../assets/images/mobLogo.webp';

import mobLogo2x from '../../assets/images/mobLogo2x.png';
import mobLogo2xWebp from '../../assets/images/mobLogo2x.webp';
import useModalStore from '../../zustand/mobile';

const MobileHeader = () => {
  const { openMenu } = useModalStore();

  return (
    <div className='flex items-center justify-between fixed top-5 left-0 w-full px-5'>
      <a href='#'>
        <picture>
          <source
            media='(max-width:767px)'
            type='image/webp'
            srcSet={`${mobLogoWebp} 1x, ${mobLogo2xWebp} 2x`}
          />
          <source
            media='(max-width:767px)'
            type='image/png'
            srcSet={`${mobLogo} 1x, ${mobLogo2x} 2x`}
          />
          <img src={mobLogo} srcSet={`${mobLogo2x} 2x`} alt='Logo' />
        </picture>
      </a>

      <button
        onClick={() => openMenu()}
        className='flex items-center justify-center cursor-pointer group focus:outline-none'
      >
        <svg
          width={32}
          height={32}
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
    </div>
  );
};

export default MobileHeader;
