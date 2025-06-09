import type { Vegetable } from '../../types/vegetable';
import '../VegetableCart/VegetableCart.css';

const VegetableCart = ({
  title,
  mass,
  tabImagePNG,
  tabImageWEBP,
  tabImagePNG2x,
  tabImageWEBP2x,
  deskImagePNG,
  deskImageWEBP,
  deskImagePNG2x,
  deskImageWEBP2x,
  description,
}: Vegetable) => {
  return (
    <li className='cart w-full max-w-[340px] md:min-w-[280px] min-h-[380px]'>
      <div className='content'>
        <div className='front py-8 px-4 sm:px-6 md:px-7.5 xl:px-8'>
          <h2 className='font-semibold text-[28px] md:text-[32px] uppercase mb-3 text-[#7a3145]'>
            {title}
          </h2>
          <p className='font-medium text-[14px] text-[#141414] leading-[1.43] md:text-[16px] md:leading-[1.25]'>
            {mass}
          </p>

          <picture className='w-full block'>
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet={`${deskImageWEBP} 1x, ${deskImageWEBP2x} 2x`}
            />
            <source
              media='(min-width:768px)'
              type='image/png'
              srcSet={`${deskImagePNG} 1x, ${deskImagePNG2x} 2x`}
            />
            <source
              media='(max-width:767px)'
              type='image/webp'
              srcSet={`${tabImageWEBP} 1x, ${tabImageWEBP2x} 2x`}
            />
            <source
              media='(max-width:767px)'
              type='image/png'
              srcSet={`${tabImagePNG} 1x, ${tabImagePNG2x} 2x`}
            />
            <img src={tabImagePNG} alt={`Image with ${title}`} className='block mx-auto' />
          </picture>
        </div>

        <div className='back'>
          <p className='text-[14px] leading-[1.4] text-center px-4'>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default VegetableCart;
