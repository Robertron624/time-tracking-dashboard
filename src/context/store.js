import { create } from "zustand";

const useStore = create((set) => ({
    time: 'weekly',
    setTime: (time) => set({ time }),
}));

export default useStore;