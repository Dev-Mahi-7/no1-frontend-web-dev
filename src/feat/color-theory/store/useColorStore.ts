import { create } from "zustand";

interface State {
  domain: string;
  audience: string;
  tone: string;
  result: any;
  setData: (data: any) => void;
}

export const useColorStore = create<State>((set) => ({
  domain: "",
  audience: "",
  tone: "",
  result: null,
  setData: (data) => set(data),
}));