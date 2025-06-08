import mobHeroJPG from '../../assets/images/mobHero.jpg';
import mobHeroJPG2x from '../../assets/images/mobHero2x.jpg';
import mobHeroWEBP from '../../assets/images/mobHero.webp';
import mobHeroWEBP2x from '../../assets/images/mobHero2x.webp';

import tabHeroJPG from '../../assets/images/tabHero.jpg';
import tabHeroJPG2x from '../../assets/images/tabHero2x.jpg';
import tabHeroWEBP from '../../assets/images/tabHero.webp';
import tabHeroWEBP2x from '../../assets/images/tabHero2x.webp';

import deskHeroJPG from '../../assets/images/deskHero.jpg';
import deskHeroJPG2x from '../../assets/images/deskHero2x.jpg';
import deskHeroWEBP from '../../assets/images/deskHero.webp';
import deskHeroWEBP2x from '../../assets/images/deskHero2x.webp';
import Container from '../Container/Container';

const HeroScreen = () => {
  return (
    <section className='xl:flex xl:items-center'>
      <Container>
        <h1 className='uppercase font-semibold text-[46px] md:text-[76px] leading-none max-w-[335px] md:max-w-[704px] xl:max-w-[502px] text-[#fbfbfb] mb-5 md:mb-6 xl:mb-32 pt-[100px]'>
          organic vegetables to your diet today!
        </h1>

        <p className='font-medium text-sm md:text-base leading-[1.43] md:leading-[1.25] text-[#fbfbfb] max-w-[335px] md:max-w-[604px] xl:max-w-[472px] mb-10 md:mb-13 '>
          Our expertly curated vegetable baskets are made with the freshest, highest quality
          vegetables available. Fresh Harvest Box has got you covered. Fresh, high-quality
          vegetables in expertly curated vegetable baskets delivered to you.
        </p>
      </Container>

      <div className='w-full xl:w-auto xl:max-w-[50%]'>
        <picture className='w-full block'>
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
            className='w-full max-w-[1280px] xl:max-w-[640px]  max-h-[536px] xl:max-h-[796px] object-cover block '
          />
        </picture>
      </div>
    </section>
  );
};

export default HeroScreen;
