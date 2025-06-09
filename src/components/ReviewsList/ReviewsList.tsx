import Container from '../Container/Container';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import ReviewCart from '../ReviewCart/ReviewCart';
import useReviewsStore from '../../zustand/reviews';

const ReviewsList = () => {
  const reviews = useReviewsStore(state => state.reviews);

  return (
    <section className='bg-[#fbfbfb] py-20 px-5 md:px-8 xl:px-25'>
      <Container>
        <h2 className='font-semibold text-[48px] md:text-[64px] leading-[1] max-w-[336px] md:max-w-[554px] uppercase text-[#141414] mb-5 md:mb-6'>
          reviews from our <span className='text-[#576f35]'>customers</span>
        </h2>
        <p className='font-medium text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-[#141414] mb-10 md:mb-13 md:max-w-[552px]'>
          Words of our customers: impressions and opinions about the quality of our services and the
          freshness of our products.
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          wrapperTag='ul'
        >
          {reviews.map(review => (
            <SwiperSlide
              key={review.id}
              tag='li'
              className='border border-[#d4bfc4] rounded-3xl bg-[#fbfbfb] py-5 px-4 md:px-5 min-h-[250px]'
            >
              <ReviewCart {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ReviewsList;
