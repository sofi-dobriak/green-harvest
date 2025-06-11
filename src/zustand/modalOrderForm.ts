import { create } from 'zustand';

interface UseModalFormStore {
  isModalFormOpen: boolean;
  openModalForm: () => void;
  closeModalForm: () => void;
}

const useModalFormStore = create<UseModalFormStore>(set => ({
  isModalFormOpen: false,
  openModalForm: () => set({ isModalFormOpen: true }),
  closeModalForm: () => set({ isModalFormOpen: false }),
}));

export default useModalFormStore;
