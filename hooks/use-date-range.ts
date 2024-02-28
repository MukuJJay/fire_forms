import { DateRange } from "react-day-picker";
import { create } from "zustand";

type Store = {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
};

const useDateRange = create<Store>()((set) => ({
  date: undefined,
  setDate: (date) => set((state) => ({ date: date })),
}));

export default useDateRange;
