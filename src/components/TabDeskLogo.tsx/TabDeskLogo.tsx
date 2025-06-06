import tabLogo from '../../assets/images/tabLogo.png';
import tabLogoWebp from '../../assets/images/tabLogo.webp';

import tabLogo2x from '../../assets/images/tabLogo@2x.png';
import tabLogo2xWebp from '../../assets/images/tabLogo@2x.webp';

const TabDeskLogo = () => {
  return (
    <>
      <a href='#'>
        <picture>
          <source
            media='(min-width:768px) and (max-width:1280px)'
            type='image/webp'
            srcSet={`${tabLogoWebp} 1x, ${tabLogo2xWebp} 2x`}
          />
          <source
            media='(min-width:768px) and (max-width:1280px)'
            type='image/png'
            srcSet={`${tabLogo} 1x, ${tabLogo2x} 2x`}
          />
          <img src={tabLogo} srcSet={`${tabLogo2x} 2x`} alt='Logo' />
        </picture>
      </a>
    </>
  );
};

export default TabDeskLogo;
