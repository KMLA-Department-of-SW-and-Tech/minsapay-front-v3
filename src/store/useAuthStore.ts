import create from 'zustand';

interface AuthStore {
  username: string;
  password: string;
  setCredentials: (username: string, password: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  password: "",
  setCredentials: (username, password) => set({ username, password }),
}));
