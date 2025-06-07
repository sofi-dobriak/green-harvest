import { create } from 'zustand';

interface UseModalStore {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const useModalStore = create<UseModalStore>(set => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}));

export default useModalStore;
