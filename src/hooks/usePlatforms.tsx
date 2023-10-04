import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { platformsService } from "../services/api-client";

const usePlatforms = () =>
  useQuery<Platform[]>(
    ["platforms", "parensts"],
    () => platformsService.getAll<Platform>().then((data) => data.results),
    {
      staleTime: ms("24h"),
    }
  );

export default usePlatforms;
