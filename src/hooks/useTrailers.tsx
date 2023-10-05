import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { gamesService } from "../services/api-client";

const useTrailers = (slug: string) =>
  useQuery(
    ["trailers", slug],
    () => gamesService.getAll<Trailer>(undefined, "/" + slug + "/movies"),
    {
      staleTime: ms("1h"),
    }
  );

export default useTrailers;
