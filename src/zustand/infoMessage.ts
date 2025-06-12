import { create } from 'zustand';

interface InfoMessageInterface {
  isMessageVisible: boolean;
  openMessage: () => void;
  closeMessage: () => void;
}

export const useInfoMessageStore = create<InfoMessageInterface>(set => ({
  isMessageVisible: false,
  openMessage: () => set({ isMessageVisible: true }),
  closeMessage: () => set({ isMessageVisible: false }),
}));
