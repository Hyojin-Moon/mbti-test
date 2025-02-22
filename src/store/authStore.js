import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist( // 데이터를 저장하고 유지시켜주는 미들웨어
    (set) => ({
      //상태 => userAuthStore를 사용하여 어디서든 상태 접근 가능
      user: null,
      //액션 => 스토어에서 내부액션 처리 / 컴포넌트에서도 가능은함 추천X
      setUser: (userData) => set({ user: userData }),
      logout: () => set({ user: null }),
    }),
    //옵션
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;