import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BearState {
  auth: any;
  language: string | null;
  setLanguage: (language: string) => void;
}

export const useUserStore = create<BearState>()(
  persist(
    (set) => ({
      auth: null,
      language: null,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'auth-storage',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
