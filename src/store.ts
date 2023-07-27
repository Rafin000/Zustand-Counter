import { create } from "zustand";

export interface State {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
  resetCount: () => void;
  increaseByValue: (value: number) => void;
}

export const useStore = create<State>((set) => ({
  count: 0,
  increaseCount: () =>
    set((state) => {
      return {
        ...state,
        count: state.count + 1
      };
    }),
  decreaseCount: () =>
    set((state) => {
      if (state.count === 0) return state;
      return {
        ...state,
        count: state.count - 1
      };
    }),
  resetCount: () =>
    set((state) => ({
      ...state,
      count: 0
    })),
  increaseByValue: (value) =>
    set((state) => ({
      ...state,
      count: state.count + value
    }))
}));
