import { create } from 'zustand';
import vegetablesData from '../data/vegetables.json';
import type { Vegetable } from '../types/vegetable';

interface VegetablesStore {
  vegetables: Vegetable[];
  setVegetables: (vegetables: Vegetable[]) => void;
}

const useVegetablesStore = create<VegetablesStore>(set => ({
  vegetables: vegetablesData,
  setVegetables: vegetables => set({ vegetables }),
}));

export default useVegetablesStore;
