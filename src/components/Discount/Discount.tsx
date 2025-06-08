import Container from '../Container/Container';

const Discount = () => {
  return (
    <section className='py-20 md:py-25 px-5 md:px-8 xl:px-25 bg-[#fbfbfb]'>
      <Container>
        <p className='bg-[#576f35] text-[#fbfbfb] rounded-xl font-semibold text-[48px] md:text-[64px] xl:text-[74px] uppercase leading-[1] md:max-w-[700px] xl:max-w-[800px]'>
          Discount up to 40%!
        </p>
        <p className='font-semibold text-[48px] md:text-[64px] xl:text-[74px] uppercase text-[#141414] leading-[1]'>
          Taste the vitamins and keep your health
        </p>
      </Container>
    </section>
  );
};

export default Discount;
