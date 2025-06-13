import useVegetablesStore from '../../zustand/vegetable';
import Container from '../Container/Container';
import VegetableCart from '../VegetableCart/VegetableCart';

const VegetableList = () => {
  const vegetables = useVegetablesStore(state => state.vegetables);

  return (
    <section
      className='bg-[var(--secondary-bg-section)] py-20 px-5 md:px-8 xl:px-25'
      id='vegetables'
    >
      <Container>
        <h2 className='uppercase font-semibold text-[var(--light-text-color)] text-[48px] md:text-[64px] leading-[1] mb-5 md:mb-6'>
          organic <span className='text-[var(--accent-text-color)]'>vegetables</span>
        </h2>

        <p className='font-medium text-[14px] md:text-base leading-[1.43] md:leading-[1.25] mb-10 md:mb-13.5 text-[var(--light-text-color)] md:max-w-[626px]'>
          Our organic vegetables are hand-picked from local farms and delivered straight to your
          doorstep, ensuring that you get the freshest and most nutritious produce possible.
        </p>

        <ul className='flex gap-5 md:gap-6 md:flex-row flex-wrap justify-center xl:max-w-[1280px] mx-auto'>
          {vegetables.map((vegetable, index) => (
            <VegetableCart key={index + 1} {...vegetable} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default VegetableList;
