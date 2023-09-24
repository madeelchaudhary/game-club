import useHttp from "./useHttp";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useHttp<Platform>("platforms/lists/parents");

export default usePlatforms;
