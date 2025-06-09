import { create } from 'zustand';
import vegetablesData from '../data/vegetables.json';
import type { Vegetable } from '../types/vegetable';

interface VegetablesStore {
  vegetables: Vegetable[];
}

const useVegetablesStore = create<VegetablesStore>(() => ({
  vegetables: vegetablesData,
}));

export default useVegetablesStore;
