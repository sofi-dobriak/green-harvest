import { create } from 'zustand';

interface UseMobileMenuStore {
  isMobileOpen: boolean;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

const UseMobileMenuStore = create<UseMobileMenuStore>(set => ({
  isMobileOpen: false,
  openMobileMenu: () => {
    set({ isMobileOpen: true });
    document.body.style.overflow = 'hidden';
  },
  closeMobileMenu: () => {
    set({ isMobileOpen: false });
    document.body.style.overflow = 'auto';
  },
}));

export default UseMobileMenuStore;
