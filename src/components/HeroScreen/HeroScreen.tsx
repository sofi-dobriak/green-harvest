import mobHeroJPG from '/images/mobHero.jpg';
import mobHeroJPG2x from '/images/mobHero2x.jpg';
import mobHeroWEBP from '/images/mobHero.webp';
import mobHeroWEBP2x from '/images/mobHero2x.webp';

import tabHeroJPG from '/images/tabHero.jpg';
import tabHeroJPG2x from '/images/tabHero2x.jpg';
import tabHeroWEBP from '/images/tabHero.webp';
import tabHeroWEBP2x from '/images/tabHero2x.webp';

import deskHeroJPG from '/images/deskHero.jpg';
import deskHeroJPG2x from '/images/deskHero2x.jpg';
import deskHeroWEBP from '/images/deskHero.webp';
import deskHeroWEBP2x from '/images/deskHero2x.webp';
import Container from '../Container/Container';

const HeroScreen = () => {
  return (
    <section className='xl:flex xl:items-center xl:justify-center'>
      <Container>
        <h1 className='uppercase font-semibold text-[44px] md:text-[70px] leading-none md:max-w-[704px] xl:max-w-[502px] text-[#fbfbfb] mb-5 md:mb-6 xl:mb-32 pt-[100px] px-5 md:px-8 xl:px-0'>
          organic vegetables to your diet today!
        </h1>

        <p className='font-medium text-sm md:text-base leading-[1.43] md:leading-[1.25] text-[#fbfbfb]  md:max-w-[702px] xl:max-w-[450px] mb-10 md:mb-13 px-5 md:px-8  xl:px-0'>
          Our expertly curated vegetable baskets are made with the freshest, highest quality
          vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality
          vegetables in expertly curated vegetable baskets delivered to you.
        </p>
      </Container>

      <picture className='w-full xl:w-[1280px] xl:max-w-[50%] '>
        <source
          media='(min-width:768px)'
          type='image/webp'
          srcSet={`${deskHeroWEBP} 1x, ${deskHeroWEBP2x} 2x`}
        />
        <source
          media='(min-width:768px) '
          type='image/jpg'
          srcSet={`${deskHeroJPG} 1x, ${deskHeroJPG2x} 2x`}
        />

        <source
          media='(min-width:768px)'
          type='image/webp'
          srcSet={`${tabHeroWEBP} 1x, ${tabHeroWEBP2x} 2x`}
        />
        <source
          media='(min-width:768px) '
          type='image/jpg'
          srcSet={`${tabHeroJPG} 1x, ${tabHeroJPG2x} 2x`}
        />

        <source
          media='(max-width:767px)'
          type='image/webp'
          srcSet={`${mobHeroWEBP} 1x, ${mobHeroWEBP2x} 2x`}
        />
        <source
          media='(max-width:767px)'
          type='image/jpg'
          srcSet={`${mobHeroJPG} 1x, ${mobHeroJPG2x} 2x`}
        />

        <img
          src={mobHeroJPG}
          alt='Image with vegetables'
          className='object-cover block w-full max-w-[1280px] xl:max-w-[640px]  max-h-[536px] xl:max-h-[796px]'
        />
      </picture>
    </section>
  );
};

export default HeroScreen;
