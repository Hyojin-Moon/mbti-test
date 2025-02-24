import { create } from "zustand";

const useAlertStore = create((set) => ({
  isOpen: false,
  title: "",
  message: "",
  onConfirm: null,
  onClose: () => set({ isOpen: false }),

  showAlert: ({ title, message, onConfirm }) =>
    set({ isOpen: true, title, message, onConfirm }),
}));

export default useAlertStore;
