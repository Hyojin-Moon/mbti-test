import { create } from "zustand";

const useToastStore = create((set) => ({
  isOpen: false,
  message: "",

  showToast: (message) => {
    set({ isOpen: true, message });
    setTimeout(() => set({ isOpen: false, message: "" }), 3000);
  },

  hideToast: () => set({ isOpen: false, message: "" }),
}));

export default useToastStore;
