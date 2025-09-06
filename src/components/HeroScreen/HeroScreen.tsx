import Container from '../Container/Container';

const HeroScreen = () => {
  return (
    <section className='xl:flex xl:items-center xl:justify-center' data-aos='fade-up'>
      <Container>
        <h1 className='uppercase font-semibold text-[44px] md:text-[70px] leading-none md:max-w-[704px] xl:max-w-[502px] text-[var(--light-text-color)] mb-5 md:mb-6 xl:mb-32 pt-[100px] px-5 md:px-8 xl:px-0'>
          organic vegetables to your diet today!
        </h1>

        <p className='font-medium text-sm md:text-base leading-[1.43] md:leading-[1.25] text-[var(--light-text-color)]  md:max-w-[702px] xl:max-w-[450px] mb-10 md:mb-13 px-5 md:px-8  xl:px-0'>
          Our expertly curated vegetable baskets are made with the freshest, highest quality
          vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality
          vegetables in expertly curated vegetable baskets delivered to you.
        </p>
      </Container>

      <picture className='w-full xl:w-[1280px] xl:max-w-[50%] '>
        <source
          media='(min-width:768px)'
          type='image/webp'
          srcSet='/images/deskHero.webp 1x, /images/deskHero2x.webp 2x'
        />
        <source
          media='(min-width:768px) '
          type='image/jpg'
          srcSet='/images/deskHero.jpg 1x, /images/deskHero2x.jpg 2x'
        />

        <source
          media='(min-width:768px)'
          type='image/webp'
          srcSet='/images/tabHero.webp 1x, /images/tabHero2x.webp 2x'
        />
        <source
          media='(min-width:768px) '
          type='image/jpg'
          srcSet='/images/tabHero.jpg 1x, /images/tabHero2x.jpg 2x'
        />

        <source
          media='(max-width:767px)'
          type='image/webp'
          srcSet='/images/mobHero.webp 1x, /images/mobHero2x.webp 2x'
        />
        <source
          media='(max-width:767px)'
          type='image/jpg'
          srcSet='/images/mobHero.jpg 1x, /images/mobHero2x.jpg 2x'
        />

        <img
          src='/images/mobHero.jpg'
          alt='Image with vegetables'
          className='object-cover block w-full max-w-[1280px] xl:max-w-[640px]  max-h-[536px] xl:max-h-[796px]'
        />
      </picture>
    </section>
  );
};

export default HeroScreen;
