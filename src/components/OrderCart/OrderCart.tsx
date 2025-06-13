import mobSocialPNG from '/images/mobSocial.png';
import mobSocialPNG2x from '/images/mobSocial2x.png';
import mobSocialWEBP from '/images/mobSocial.webp';
import mobSocialWEBP2x from '/images/mobSocial2x.webp';

import tabSocialPNG from '/images/tabSocial.png';
import tabSocialPNG2x from '/images/tabSocial2x.png';
import tabSocialWEBP from '/images/tabSocial.webp';
import tabSocialWEBP2x from '/images/tabSocial2x.webp';

import deskSocialPNG from '/images/deskSocial.png';
import deskSocialPNG2x from '/images/deskSocial2x.png';
import deskSocialWEBP from '/images/deskSocial.webp';
import deskSocialWEBP2x from '/images/deskSocial2x.webp';

const OrderCart = () => {
  return (
    <div className='bg-[var(--secondary-bg-section)] rounded-[30px] py-10 px-5 md:py-13 md:px-13 xl:px-12'>
      <picture>
        <source
          media='(min-width:1280px)'
          type='image/webp'
          srcSet={`${deskSocialWEBP} 1x, ${deskSocialWEBP2x} 2x`}
        />
        <source
          media='(min-width:1280px) '
          type='image/png'
          srcSet={`${deskSocialPNG} 1x, ${deskSocialPNG2x} 2x`}
        />

        <source
          media='(min-width:768px)'
          type='image/webp'
          srcSet={`${tabSocialWEBP} 1x, ${tabSocialWEBP2x} 2x`}
        />
        <source
          media='(min-width:768px) '
          type='image/png'
          srcSet={`${tabSocialPNG} 1x, ${tabSocialPNG2x} 2x`}
        />

        <source
          media='(max-width:767px)'
          type='image/webp'
          srcSet={`${mobSocialWEBP} 1x, ${mobSocialWEBP2x} 2x`}
        />
        <source
          media='(max-width:767px)'
          type='image/png'
          srcSet={`${mobSocialPNG} 1x, ${mobSocialPNG2x} 2x`}
        />

        <img
          src={mobSocialPNG}
          alt='Image with woman'
          className='block mx-auto mb-4 md:mb-13 xl:mb-20'
        />
      </picture>

      <p className='font-bold text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-[var(--accent-text-color)] mb-4'>
        Follow us on our social networks:
      </p>

      <ul className='flex flex-wrap gap-2'>
        <li>
          <a
            href='https://www.instagram.com/goitclub/'
            target='_blank'
            className='text-[var(--light-text-color)] font-semibold text-[18px] leading-[1.1] uppercase hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)]'
          >
            instagram
          </a>
        </li>
        <li>
          <p className='text-[var(--light-text-color)] font-semibold text-[18px] leading-[1.1]'>
            /
          </p>
        </li>

        <li>
          <a
            href='https://www.facebook.com/goITclub/'
            target='_blank'
            className='text-[var(--light-text-color)] font-semibold text-[18px] leading-[1.1] uppercase hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)]'
          >
            facebook
          </a>
        </li>
        <li>
          <p className='text-[var(--light-text-color)] font-semibold text-[18px] leading-[1.1]'>
            /
          </p>
        </li>

        <li>
          <a
            href='https://www.youtube.com/c/GoIT'
            target='_blank'
            className='text-[var(--light-text-color)] font-semibold text-[18px] leading-[1.1] uppercase hover:text-[var(--hover-text-color)] hover:bg-[var(--hover-light-bg)] focus:text-[var(--hover-text-color)] focus:bg-[var(--hover-light-bg)]'
          >
            youtube
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OrderCart;
