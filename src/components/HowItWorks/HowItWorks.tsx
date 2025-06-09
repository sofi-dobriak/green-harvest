import mobAboutPNG from '/images/mobAbout.png';
import mobAboutPNG2x from '/images/mobAbout2x.png';
import mobAboutWEBP from '/images/mobAbout.webp';
import mobAboutWEBP2x from '/images/mobAbout2x.webp';

import tabAboutPNG from '/images/tabAbout.png';
import tabAboutPNG2x from '/images/tabAbout2x.png';
import tabAboutWEBP from '/images/tabAbout.webp';
import tabAboutWEBP2x from '/images/tabAbout2x.webp';

import deskAboutPNG from '/images/deskAbout.png';
import deskAboutPNG2x from '/images/deskAbout2x.png';
import deskAboutWEBP from '/images/deskAbout.webp';
import deskAboutWEBP2x from '/images/deskAbout2x.webp';
import Container from '../Container/Container';

const HowItWorks = () => {
  return (
    <section className='xl:flex xl:mx-auto xl:max-w-[1280px]'>
      <div className='bg-[#7a3145] w-full py-10 px-5 md:py-25 md:px-16 xl:p-25 xl:max-w-[640px]'>
        <picture>
          <source
            media='(min-width:1280px)'
            type='image/webp'
            srcSet={`${deskAboutWEBP} 1x, ${deskAboutWEBP2x} 2x`}
          />
          <source
            media='(min-width:1280px) '
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

          <img src={mobAboutPNG} alt='Image with woman' className='block mx-auto' />
        </picture>
      </div>

      <Container>
        <div className='bg-[#576F35] py-20 px-5 md:py-25 md:px-41 md:mb-6 xl:px-20'>
          <h2 className='font-semibold text-[28px] uppercase leading-none text-[#fbfbfb] mb-5 md:text-[32px]'>
            To order your <span className='text-[#d4bfc4]'>vegetable</span> basket, simply follow
            these <span className='text-[#d4bfc4]'>easy steps</span>
          </h2>

          <p className='mb-10 font-medium text-[14px] text-[#fbfbfb] leading-[1.43] md:text-[16px] md:leading-[1.25] md:mb-13 xl:mb-26'>
            Our baskets are assembled with care and delivered straight to your doorstep, so you can
            enjoy the taste of fresh fruit without ever leaving your home.
          </p>

          <ol>
            <li className='py-3 px-5 bg-[#fbfbfb] border-[2px] border-[#fbfbfb] hover:border-[#7a3145] focus:border-[#7a3145] duration-300 ease-in-out  rounded-2xl mb-5 md:mb-6 flex items-center gap-6'>
              <div className='flex items-center justify-center bg-[#7a3145] rounded-full aspect-square w-[52px] h-[52px] border-[5px] border-[#d4bfc4]'>
                <p className='font-semibold text-[18px] text-[#fbfbfb]'>1</p>
              </div>
              <p className='font-medium text-[#858585] text-[14px] md:text-[16px]'>
                Just choose <span className='font-bold text-[#141414]'>the vegetable</span> you want
                to order by clicking on the checkboxes
                <span className='font-bold text-[#141414]'>next to it.</span>
              </p>
            </li>

            <li className='py-3 px-5 bg-[#fbfbfb] border-[2px] border-[#fbfbfb] hover:border-[#7a3145] focus:border-[#7a3145] duration-300 ease-in-out  rounded-2xl mb-5 md:mb-6 flex items-center gap-6'>
              <div className='flex items-center justify-center bg-[#7a3145] rounded-full aspect-square w-[52px] h-[52px] border-[5px] border-[#d4bfc4]'>
                <p className='font-semibold text-[18px] text-[#fbfbfb]'>2</p>
              </div>
              <p className='font-medium text-[#858585] text-[14px] md:text-[16px] max-w-[180px] md:max-w-none'>
                Click on <span className='font-bold text-[#141414]'>the basket</span> and fill out
                the form.
              </p>
            </li>

            <li className='py-3 px-5 bg-[#fbfbfb] border-[2px] border-[#fbfbfb] hover:border-[#7a3145] focus:border-[#7a3145] duration-300 ease-in-out rounded-2xl mb-5 md:mb-6 flex items-center gap-6'>
              <div className='flex items-center justify-center bg-[#7a3145] rounded-full aspect-square w-[52px] h-[52px] border-[5px] border-[#d4bfc4]'>
                <p className='font-semibold text-[18px] text-[#fbfbfb]'>3</p>
              </div>
              <p className='font-medium text-[#858585] text-[14px] md:text-[16px]'>
                Sit back and relax! Your
                <span className='font-bold text-[#141414]'>fresh vegetables</span> basket will be
                delivered.
              </p>
            </li>
          </ol>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
