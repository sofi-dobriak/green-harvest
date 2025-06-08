import useVegetablesStore from '../../zustand/vegetable';
import VegetableCart from '../VegetableCart/VegetableCart';

const VegetableList = () => {
  const vegetables = useVegetablesStore(state => state.vegetables);

  return (
    <section className='bg-[#7a3145] py-20 px-5 md:px-8 xl:px-25'>
      <h2 className='uppercase font-semibold text-[#fbfbfb] text-[48px] md:text-[64px] leading-[1] mb-5 md:mb-6'>
        organic <span className='text-[#d4bfc4]'>vegetables</span>
      </h2>

      <p className='font-medium text-[14px] md:text-base leading-[1.43] md:leading-[1.25] mb-10 md:mb-13.5 text-[#fbfbfb] md:max-w-[626px]'>
        Our organic vegetables are hand-picked from local farms and delivered straight to your
        doorstep, ensuring that you get the freshest and most nutritious produce possible.
      </p>

      <ul className='flex flex-col gap-5 md:gap-6 md:flex-row md:flex-wrap justify-center xl:max-w-[1280px] mx-auto'>
        {vegetables.map(vegetable => (
          <VegetableCart key={vegetable.id} {...vegetable} />
        ))}
      </ul>
    </section>
  );
};

export default VegetableList;
