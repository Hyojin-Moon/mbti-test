import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getUserProfile } from "../api/auth";

const useAuthStore = create(
  persist(
    (set, get) => ({
      //상태
      user: null,
      //액션
      setUser: (userData) => {
        const prevUser = get().user;
        const updatedUser = {
          ...prevUser,  // 기존 데이터 유지
          ...userData,  // 변경된 데이터 적용
        };

        set({ user: updatedUser });

        localStorage.setItem("auth-storage", JSON.stringify({ state: { user: updatedUser } }));
      },

      logout: () => {
        localStorage.removeItem("auth-storage");
        set({ user: null });
      },
      
      fetchUser: async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) return;

          const userData = await getUserProfile(token);
          set({ user: userData });

          localStorage.setItem("auth-storage", JSON.stringify({ state: { user: userData } }));
        } catch (error) {
          console.error("유저 정보를 불러오는 중 오류 발생:", error);
          set({ user: null });
        }
      }
    }),
    //옵션
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
