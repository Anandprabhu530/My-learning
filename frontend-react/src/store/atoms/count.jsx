import { atom, selector } from "recoil";

export const Singlecount = atom({
  key: "Singlecount",
  default: 0,
});

// eslint-disable-next-line react-refresh/only-export-components
export const singleselector = selector({
  key: "singleselector",
  get: ({ get }) => {
    const count = get(Singlecount);
    return count;
  },
});
