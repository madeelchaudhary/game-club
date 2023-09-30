import { useQuery } from "@tanstack/react-query";
import { platformsService } from "../services/api-client";
import ms from "ms";

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
      staleTime: ms("24h"),
    }
  );

export default usePlatforms;
