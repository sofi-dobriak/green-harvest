import Container from '../Container/Container';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className='bg-[#7a3145] py-10 px-5 md:py-8 md:px-8 xl:py-13 xl:px-25'>
      <Container>
        <div className='md:flex md:justify-between md:mb-25 xl:mb-31'>
          <div className='mb-10 md:mb-0'>
            <Logo />
            <p className='mt-3.5 md:mt-6 font-medium text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-[#fbfbfb] max-w-[335px] md:max-w-[265px]'>
              Whether you're looking for a healthy snack or a thoughtful gift, our fruit baskets are
              the perfect choice.
            </p>
          </div>

          <div className='md:flex md:flex-col xl:flex-row xl:gap-30'>
            <ul className='flex flex-col gap-3.5 mb-10 md:mb-16 xl:mb-0'>
              <li>
                <a
                  href='#works'
                  className='text-[#fbfbfb] hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145] font-semibold text-[32px] leading-[1] uppercase  cursor-pointer'
                >
                  how it works
                </a>
              </li>
              <li>
                <a
                  href='#vegetables'
                  className='text-[#fbfbfb] hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145] font-semibold text-[32px] leading-[1] uppercase  cursor-pointer'
                >
                  vegetables
                </a>
              </li>
              <li>
                <a
                  href='#reviews'
                  className='text-[#fbfbfb] hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145] font-semibold text-[32px] leading-[1] uppercase  cursor-pointer'
                >
                  reviews
                </a>
              </li>
            </ul>

            <address className='mb-20 md:mb-0'>
              <a
                href='tel:+380684439426'
                className='not-italic font-bold text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-[#fbfbfb] mb-3.5 md:mb-6 block hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145]'
              >
                +380 (68) 443-94-26
              </a>
              <a
                href='https://maps.app.goo.gl/3wqz1ZXmpnxCcwq26'
                target='_blank'
                className='not-italic font-bold text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-[#fbfbfb] block max-w-[180px] hover:bg-[#fbfbfb] hover:text-[#7a3145] focus:bg-[#fbfbfb] focus:text-[#7a3145]'
              >
                1678 S. Pioneer Road Salt Lake City UT 84104
              </a>
            </address>
          </div>
        </div>

        <div className='md:flex md:items-center md:justify-between'>
          <ul className='flex gap-2 xl:gap-3 mb-4 md:mb-0'>
            <li>
              <a
                href='#'
                className='font-medium text-[14px] md:text-[16px] leading-[1.43] md:text-[1.25] text-[#d4bfc4] hover:bg-[#fbfbfb86] hover:text-[#45242d] focus:bg-[#fbfbfb86] focus:text-[#45242d]'
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <p className='font-medium text-[14px] md:text-[16px] leading-[1.43] md:text-[1.25] text-[#d4bfc4]'>
                /
              </p>
            </li>
            <li>
              <a
                href='#'
                className='font-medium text-[14px] md:text-[16px] leading-[1.43] md:text-[1.25] text-[#d4bfc4] hover:bg-[#fbfbfb86] hover:text-[#45242d] focus:bg-[#fbfbfb86] focus:text-[#45242d]'
              >
                Cookie settings
              </a>
            </li>
          </ul>

          <p className='font-medium text-[14px] md:text-[16px] leading-[1.43] md:text-[1.25] text-[#d4bfc4]'>
            &copy;Green Harvest 2023
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
