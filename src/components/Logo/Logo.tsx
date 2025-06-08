import { useMediaQuery } from 'react-responsive';

import mobLogo from '../../assets/images/mobLogo.png';
import mobLogoWebp from '../../assets/images/mobLogo.webp';
import mobLogo2x from '../../assets/images/mobLogo2x.png';
import mobLogo2xWebp from '../../assets/images/mobLogo2x.webp';

import tabLogo from '../../assets/images/tabLogo.png';
import tabLogoWebp from '../../assets/images/tabLogo.webp';
import tabLogo2x from '../../assets/images/tabLogo@2x.png';
import tabLogo2xWebp from '../../assets/images/tabLogo@2x.webp';

const Logo = () => {
  const isMobile: boolean = useMediaQuery({ maxWidth: 375 });

  return (
    <>
      {isMobile && (
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
      )}

      {!isMobile && (
        <a href='#'>
          <picture>
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet={`${tabLogoWebp} 1x, ${tabLogo2xWebp} 2x`}
            />
            <source
              media='(min-width:768px)'
              type='image/png'
              srcSet={`${tabLogo} 1x, ${tabLogo2x} 2x`}
            />
            <img src={tabLogo} srcSet={`${tabLogo2x} 2x`} alt='Logo' />
          </picture>
        </a>
      )}
    </>
  );
};

export default Logo;
