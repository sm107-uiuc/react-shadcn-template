import { create } from 'zustand'


const useDataStore = create((set) => ({
    clickCount: 0,
    setClickCount: () => set((state) => ({clickCount: state.clickCount + 1}))
}));

export default useDataStore;

