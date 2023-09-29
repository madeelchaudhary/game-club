import { useQuery } from "@tanstack/react-query";
import { platformsService } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<Platform[]>(
    ["platforms", "parensts"],
    () => platformsService.get<Platform>().then((data) => data.results),
    {
      staleTime: 24 * 60 * 60 * 1000, // 24 hours
    }
  );

export default usePlatforms;
