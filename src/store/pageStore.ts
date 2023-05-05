import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PageState {
  page: number;
  setPage: (page: number) => void;
}

export const usePageStore = create<PageState>()(
  devtools(
    persist(
      (set) => ({
        page: 1,
        setPage: (page) => set({ page }),
      }),
      {
        name: "page-storage",
      }
    )
  )
);
