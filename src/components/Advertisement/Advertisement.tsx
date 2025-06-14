import { useMediaQuery } from 'react-responsive';
import Container from '../Container/Container';

const Advertisement = () => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  return (
    <section className='py-20 md:py-25 px-5 md:px-8 xl:px-25 bg-[#fbfbfb]'>
      <Container>
        <h2 className='visually-hidden'>Discount</h2>

        {!isDesktop && (
          <div className='md:max-w-[700px]'>
            <p className='vegetable-title bg-[var(--background-color)] text-[var(--light-text-color)] rounded-xl font-semibold text-[48px] max-w-[320px] md:max-w-[704px] md:text-[64px] uppercase leading-[1] '>
              Discount up to 40%!
            </p>

            <p className='font-semibold text-[48px] max-w-[340px] md:max-w-[704px] md:text-[64px] uppercase text-[var(--dart-text-color)] leading-[1]'>
              Taste the vitamins and keep your health
            </p>
          </div>
        )}

        {isDesktop && (
          <p className='font-semibold  xl:text-[74px] uppercase text-[var(--dart-text-color)] leading-[1] xl:max-w-[1054px]'>
            <span className='bg-[var(--background-color)] text-[var(--light-text-color)] rounded-xl font-semibold xl:text-[74px] uppercase leading-[1] xl:max-w-[800px]'>
              Discount up to 40%!
            </span>
            Taste the vitamins and keep your health
          </p>
        )}
      </Container>
    </section>
  );
};

export default Advertisement;
