import Container from '../Container/Container';
import OrderCart from '../OrderCart/OrderCart';
import OrderForm from '../OrderForm/OrderForm';

const YourOrder = () => {
  return (
    <section className='py-20 px-5 md:py-25 md:px-8 xl:px-25'>
      <Container>
        <h2 className='font-semibold text-[48px] md:text-[64px] max-w-[335px] md:max-w-[640px] xl:max-w-[750px] leading-[1] uppercase text-[#fbfbfb] mb-6'>
          Fresh <span className='text-[#d4bfc4]'>Harvest</span> Box has got you covered
        </h2>
        <p className='font-medium text-[14px] md:text-[16px] max-w-[335px] md:max-w-[640px] xl:max-w-[742px] leading-[1.43] md:leading-[1.25] text-[#fbfbfb] mb-10 md:mb-13'>
          Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to
          eat healthier or support local farmers. Order your box today and start enjoying the best
          that nature has to offer!
        </p>

        <div className='flex flex-col gap-5 md:gap-8 xl:flex-row xl:justify-center'>
          <div className='bg-[#fbfbfb] py-10 px-5 rounded-[30px] md:py-13 md:px-25 xl:py-13 xl:px-12'>
            <p className='font-semibold text-[27px] md:text-[32px] leading-[1] uppercase text-[#141414] mb-10 max-w-[295px] md:max-w-[440px] xl:max-w-[428px]'>
              Ordering <span className='text-[#7a3145]'>from us</span> is quick and easy! Fill out{' '}
              <span className='text-[#576f35]'>the form</span> below and we will contact you !
            </p>

            <OrderForm />
          </div>

          <OrderCart />
        </div>
      </Container>
    </section>
  );
};

export default YourOrder;
