import { create } from "zustand";

const useStore = create((set) => ({
    currentTimely: 'weekly'
}));

export default useStore;