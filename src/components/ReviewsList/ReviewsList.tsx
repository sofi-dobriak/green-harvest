import Container from '../Container/Container';
import './ReviewsList.css';
import ReviewCart from '../ReviewCart/ReviewCart';
import useReviewsStore from '../../zustand/reviews';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Mousewheel } from 'swiper/modules';

const ReviewsList = () => {
  const reviews = useReviewsStore(state => state.reviews);

  return (
    <section className='bg-[var(--hover-light-bg)] py-20 px-5 md:px-8 xl:px-25' id='reviews'>
      <Container>
        <h2 className='font-semibold text-[48px] md:text-[64px] leading-[1] max-w-[336px] md:max-w-[554px] uppercase text-[var(--dart-text-color)] mb-5 md:mb-6'>
          reviews from our <span className='text-[var(--background-color)]'>customers</span>
        </h2>
        <p className='font-medium text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-[var(--dart-text-color)] mb-10 md:mb-13 md:max-w-[552px]'>
          Words of our customers: impressions and opinions about the quality of our services and the
          freshness of our products.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          mousewheel={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          modules={[Pagination, Navigation, Mousewheel, Autoplay]}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          wrapperTag='ul'
          className='custom-swiper'
        >
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index + 1}
              tag='li'
              className='border border-[var(--border-color)] rounded-3xl bg-[var(--hover-light-bg)] py-5 px-4 md:px-5 min-h-[250px]'
            >
              <ReviewCart {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='custom-pagination mt-3 flex justify-center p-4' />
      </Container>
    </section>
  );
};

export default ReviewsList;
