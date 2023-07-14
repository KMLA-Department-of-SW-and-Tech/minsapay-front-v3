import { create } from "zustand";

import { LoginInfo } from "../interfaces/LoginInfo";

export const useLoginStore = create<LoginInfo>()((set) => ({
  id: "",
  pw: "",
  setID: (id_input: string) => set({ id: id_input }),
  setPW: (pw_input: string) => set({ pw: pw_input }),
}));
