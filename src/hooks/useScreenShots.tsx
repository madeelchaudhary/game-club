import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { gamesService } from "../services/api-client";

const useScreenShots = (slug: string) =>
  useQuery(
    ["screenshots", slug],
    () =>
      gamesService.getAll<ScreenShot>(undefined, "/" + slug + "/screenshots"),
    {
      staleTime: ms("1h"),
    }
  );

export default useScreenShots;
