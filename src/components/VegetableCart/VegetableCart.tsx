import type { Vegetable } from '../../zustand/vegetable';
import '../VegetableCart/VegetableCart.css';

const VegetableCart = ({ title, mass, images, description }: Vegetable) => {
  const { tab, desk } = images;

  return (
    <li className='cart w-full max-w-[340px] md:min-w-[280px] min-h-[380px]'>
      <div className='content'>
        <div className='front py-8 px-6 md:px-7.5 xl:px-8'>
          <h2 className='font-semibold text-[28px] md:text-[32px] uppercase mb-3 text-[var(--hover-text-color)]'>
            {title}
          </h2>
          <p className='font-medium text-[14px] text-[var(--dart-text-color)] leading-[1.43] md:text-[16px] md:leading-[1.25]'>
            {mass}
          </p>

          <picture className='w-full block'>
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet={`${desk.normal.webp} 1x, ${desk.retina.webp} 2x`}
            />
            <source
              media='(min-width:768px)'
              type='image/png'
              srcSet={`${desk.normal.png} 1x, ${desk.retina.png} 2x`}
            />
            <source
              media='(max-width:767px)'
              type='image/webp'
              srcSet={`${tab.normal.webp} 1x, ${tab.retina.webp} 2x`}
            />
            <source
              media='(max-width:767px)'
              type='image/png'
              srcSet={`${tab.normal.png} 1x, ${tab.retina.png} 2x`}
            />
            <img src={tab.normal.png} alt={`Image with ${title}`} className='block mx-auto' />
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
