const OrderCart = () => {
  return (
    <div className='bg-[var(--secondary-bg-section)] rounded-[30px] py-10 px-5 md:py-13 md:px-13 xl:px-12'>
      <picture>
        <source
          media='(min-width:1280px)'
          type='image/webp'
          srcSet='/images/deskSocial.webp 1x, /images/deskSocial2x.webp 2x'
        />
        <source
          media='(min-width:1280px) '
          type='image/png'
          srcSet='/images/deskSocial.png 1x, /images/deskSocial2x.png 2x'
        />

        <source
          media='(min-width:768px)'
          type='image/webp'
          srcSet='/images/tabSocial.webp 1x, /images/tabSocial2x.webp 2x'
        />
        <source
          media='(min-width:768px) '
          type='image/png'
          srcSet='/images/tabSocial.png 1x, /images/tabSocial2x.png 2x'
        />

        <source
          media='(max-width:767px)'
          type='image/webp'
          srcSet='/images/mobSocial.webp 1x, /images/mobSocial2x.webp 2x'
        />
        <source
          media='(max-width:767px)'
          type='image/png'
          srcSet='/images/mobSocial.png 1x, /images/mobSocial2x.png 2x'
        />

        <img
          src='/images/mobSocial.png'
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
