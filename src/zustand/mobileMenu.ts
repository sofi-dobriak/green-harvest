import { create } from 'zustand';

interface UseMobileMenuStore {
  isMobileOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const UseMobileMenuStore = create<UseMobileMenuStore>(set => ({
  isMobileOpen: false,
  openMobileMenu: () => set({ isMobileOpen: true }),
  closeMobileMenu: () => set({ isMobileOpen: false }),
}));

export default UseMobileMenuStore;
