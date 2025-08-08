import { create } from 'zustand';
import reviewsData from '../data/reviews.json';

interface Image {
  png: string;
  webp: string;
}

interface ImageVariants {
  normal: Image;
  retina: Image;
}

export interface Review {
  name: string;
  review: string;
  images: ImageVariants;
}

interface ReviewsStore {
  reviews: Review[];
}

const useReviewsStore = create<ReviewsStore>(() => ({
  reviews: reviewsData,
}));

export default useReviewsStore;
