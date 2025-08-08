import Container from '../Container/Container';

const HowItWorks = () => {
  return (
    <section className='xl:flex xl:mx-auto xl:max-w-[1280px]' id='works'>
      <h2 className='visually-hidden'>How It Works</h2>

      <div className='bg-[var(--secondary-bg-section)] w-full py-10 px-5 md:py-25 md:px-16 xl:p-25 xl:max-w-[640px]'>
        <picture>
          <source
            media='(min-width:1280px)'
            type='image/webp'
            srcSet='/images/deskAbout.webp 1x, /images/deskAbout2x.webp 2x'
          />
          <source
            media='(min-width:1280px) '
            type='image/png'
            srcSet='/images/deskAbout.png 1x, /images/deskAbout2x.png 2x'
          />

          <source
            media='(min-width:768px)'
            type='image/webp'
            srcSet='/images/tabAbout.webp 1x, /images/tabAbout2x.webp 2x'
          />
          <source
            media='(min-width:768px) '
            type='image/png'
            srcSet='/images/tabAbout.png 1x, /images/tabAbout2x.png 2x'
          />

          <source
            media='(max-width:767px)'
            type='image/webp'
            srcSet='/images/mobAbout.webp 1x, /images/mobAbout2x.webp 2x'
          />
          <source
            media='(max-width:767px)'
            type='image/png'
            srcSet='/images/mobAbout.png 1x, /images/mobAbout2x.png 2x'
          />

          <img src='/images/mobAbout.png' alt='Image with woman' className='block mx-auto' />
        </picture>
      </div>

      <Container>
        <div className='bg-[var(--background-color)] py-20 px-5 md:py-25 md:px-41 md:mb-6 xl:px-20'>
          <h2 className='font-semibold text-[28px] uppercase leading-none text-[var(--light-text-color)] mb-5 md:text-[32px]'>
            To order your <span className='text-[var(--accent-text-color)]'>vegetable</span> basket,
            simply follow these <span className='text-[var(--accent-text-color)]'>easy steps</span>
          </h2>

          <p className='mb-10 font-medium text-[14px] text-[var(--light-text-color)] leading-[1.43] md:text-[16px] md:leading-[1.25] md:mb-13 xl:mb-26'>
            Our baskets are assembled with care and delivered straight to your doorstep, so you can
            enjoy the taste of fresh fruit without ever leaving your home.
          </p>

          <ol>
            <li className='py-3 px-5 bg-[var(--light-text-color)] duration-150ease-in-out  rounded-2xl mb-5 md:mb-6 flex items-center gap-6'>
              <div className='flex items-center justify-center bg-[var(--secondary-bg-section)] rounded-full aspect-square w-[52px] h-[52px] border-[5px] border-[var(--border-color)]'>
                <p className='font-semibold text-[18px] text-[var(--light-text-color)]'>1</p>
              </div>
              <p className='font-medium text-[var(--secondary-light-text-color)] text-[14px] md:text-[16px]'>
                Just choose{' '}
                <span className='font-bold text-[var(--dart-text-color)]'>the vegetable</span> you
                want to order by clicking on the checkboxes
                <span className='font-bold text-[var(--dart-text-color)]'> next to it.</span>
              </p>
            </li>

            <li className='py-3 px-5 bg-[var(--light-text-color)] duration-150ease-in-out  rounded-2xl mb-5 md:mb-6 flex items-center gap-6'>
              <div className='flex items-center justify-center bg-[var(--secondary-bg-section)] rounded-full aspect-square w-[52px] h-[52px] border-[5px] border-[var(--border-color)]'>
                <p className='font-semibold text-[18px] text-[var(--light-text-color)]'>2</p>
              </div>
              <p className='font-medium text-[var(--secondary-light-text-color)] text-[14px] md:text-[16px]'>
                Click on <span className='font-bold text-[var(--dart-text-color)]'>the basket</span>{' '}
                and fill out the form.
              </p>
            </li>

            <li className='py-3 px-5 bg-[var(--light-text-color)] duration-150ease-in-out  rounded-2xl mb-5 md:mb-6 flex items-center gap-6'>
              <div className='flex items-center justify-center bg-[var(--secondary-bg-section)] rounded-full aspect-square w-[52px] h-[52px] border-[5px] border-[var(--border-color)]'>
                <p className='font-semibold text-[18px] text-[var(--light-text-color)]'>3</p>
              </div>
              <p className='font-medium text-[var(--secondary-light-text-color)] text-[14px] md:text-[16px]'>
                Sit back and relax! Your
                <span className='font-bold text-[var(--dart-text-color)]'>
                  {' '}
                  fresh vegetables
                </span>{' '}
                basket will be delivered.
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
