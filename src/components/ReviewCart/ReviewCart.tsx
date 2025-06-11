import type { Review } from '../../types/review';

const ReviewCart = ({ name, review, imagePNG, imagePNG2x, imageWEBP, imageWEBP2x }: Review) => {
  return (
    <>
      <picture>
        <source
          media='(min-width:375px)'
          type='image/webp'
          srcSet={`${imageWEBP} 1x, ${imageWEBP2x} 2x`}
        />
        <source
          media='(min-width:375px)'
          type='image/png'
          srcSet={`${imagePNG} 1x, ${imagePNG2x} 2x`}
        />
        <img
          src={imagePNG}
          alt={`Image with author ${name}`}
          className='block mx-auto max-w-[56px] mb-6'
        />
      </picture>

      <h3 className='font-semibold text-[18px] leading-[1.1] uppercase text-center text-[#141414] mb-2'>
        {name}
      </h3>
      <p className=' text-[14px] md:text-[16px] leading-[1.43] md:leading-[1.25] text-center text-[#858585]'>
        {review}
      </p>
    </>
  );
};

export default ReviewCart;
