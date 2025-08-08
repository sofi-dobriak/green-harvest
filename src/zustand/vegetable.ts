import { create } from 'zustand';
import vegetablesData from '../data/vegetables.json';

interface Image {
  png: string;
  webp: string;
}

interface ImageVariants {
  normal: Image;
  retina: Image;
}

interface Images {
  tab: ImageVariants;
  desk: ImageVariants;
}

export interface Vegetable {
  title: string;
  mass: string;
  description: string;
  images: Images;
}

interface VegetablesStore {
  vegetables: Vegetable[];
}

const useVegetablesStore = create<VegetablesStore>(() => ({
  vegetables: vegetablesData,
}));

export default useVegetablesStore;
