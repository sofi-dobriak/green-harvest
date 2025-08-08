import { useMediaQuery } from 'react-responsive';

const Logo = () => {
  const isTablet: boolean = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      {isTablet && (
        <a href='#'>
          <picture>
            <source
              media='(max-width:767px)'
              type='image/webp'
              srcSet='/images/mobLogo.webp 1x, /images/mobLogo2x.webp 2x'
            />
            <source
              media='(max-width:767px)'
              type='image/png'
              srcSet='/images/mobLogo.png 1x, /images/mobLogo2x.png 2x'
            />
            <img src='/images/mobLogo.png' alt='Logo' />
          </picture>
        </a>
      )}

      {!isTablet && (
        <a href='#'>
          <picture>
            <source
              media='(min-width:768px)'
              type='image/webp'
              srcSet='/images/tabLogo.webp 1x, /images/tabLogo2x.webp 2x'
            />
            <source
              media='(min-width:768px)'
              type='image/png'
              srcSet='/images/tabLogo.png 1x, /images/tabLogo2x.png 2x'
            />
            <img src='/images/tabLogo.png' alt='Logo' />
          </picture>
        </a>
      )}
    </>
  );
};

export default Logo;
