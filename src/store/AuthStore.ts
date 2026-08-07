import { create } from "zustand";

type AuthMode = "login" | "register";

type AuthStore = {
  isOpen: boolean;
  mode: AuthMode;

  openLogin: () => void;
  openRegister: () => void;
  closeModal: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  isOpen: false,
  mode: "login",

  openLogin: () =>
    set({
      isOpen: true,
      mode: "login",
    }),

  openRegister: () =>
    set({
      isOpen: true,
      mode: "register",
    }),

  closeModal: () =>
    set({
      isOpen: false,
    }),
}));