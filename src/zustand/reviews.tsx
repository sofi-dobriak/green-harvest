import { create } from 'zustand';
import reviewsData from '../data/reviews.json';
import type { Review } from '../types/review';

interface ReviewsStore {
  reviews: Review[];
}

const useReviewsStore = create<ReviewsStore>(() => ({
  reviews: reviewsData,
}));

export default useReviewsStore;
