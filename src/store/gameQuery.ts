import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  search?: string;
}

export interface GameQueryStore {
  query: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSort: (sort?: string) => void;
  setSearch: (term?: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  query: {},
  setGenreId: (genreId: number) =>
    set((state) => ({ query: { ...state.query, genreId } })),
  setPlatformId: (platformId: number) =>
    set((state) => ({ query: { ...state.query, platformId } })),
  setSort: (sort?: string) =>
    set((state) => ({ query: { ...state.query, sort } })),
  setSearch: (search?: string) => set({ query: { search } }),
}));

export default useGameQuery;
