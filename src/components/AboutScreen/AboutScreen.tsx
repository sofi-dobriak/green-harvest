import Container from '../Container/Container';

import mobAboutPNG from '../../assets/images/mobAbout.png';
import mobAboutPNG2x from '../../assets/images/mobAbout2x.png';
import mobAboutWEBP from '../../assets/images/mobAbout.webp';
import mobAboutWEBP2x from '../../assets/images/mobAbout2x.webp';

import tabAboutPNG from '../../assets/images/tabAbout.png';
import tabAboutPNG2x from '../../assets/images/tabAbout2x.png';
import tabAboutWEBP from '../../assets/images/tabAbout.webp';
import tabAboutWEBP2x from '../../assets/images/tabAbout2x.webp';

import deskAboutPNG from '../../assets/images/deskAbout.png';
import deskAboutPNG2x from '../../assets/images/deskAbout2x.png';
import deskAboutWEBP from '../../assets/images/deskAbout.webp';
import deskAboutWEBP2x from '../../assets/images/deskAbout2x.webp';

const AboutScreen = () => {
  return (
    <section className=''>
      <Container>
        <div className='bg-[#7a3145] md:py-25 md:px-16 xl:p-25 w-full xl:max-w-[640px]'>
          <picture>
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet={`${deskAboutWEBP} 1x, ${deskAboutWEBP2x} 2x`}
            />
            <source
              media='(min-width:768px) '
              type='image/png'
              srcSet={`${deskAboutPNG} 1x, ${deskAboutPNG2x} 2x`}
            />

            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet={`${tabAboutWEBP} 1x, ${tabAboutWEBP2x} 2x`}
            />
            <source
              media='(min-width:768px) '
              type='image/png'
              srcSet={`${tabAboutPNG} 1x, ${tabAboutPNG2x} 2x`}
            />

            <source
              media='(max-width:767px)'
              type='image/webp'
              srcSet={`${mobAboutWEBP} 1x, ${mobAboutWEBP2x} 2x`}
            />
            <source
              media='(max-width:767px)'
              type='image/png'
              srcSet={`${mobAboutPNG} 1x, ${mobAboutPNG2x} 2x`}
            />

            <img src={mobAboutPNG} alt='Image with woman' className='' />
          </picture>
        </div>
        <div></div>
      </Container>
    </section>
  );
};

export default AboutScreen;
