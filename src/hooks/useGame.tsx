import { useQuery } from "@tanstack/react-query";
import { gamesService } from "../services/api-client";
import ms from "ms";

const useGame = (slug: string) =>
  useQuery(["game", slug], () => gamesService.get<Game>(slug), {
    staleTime: ms("1h"),
  });

export default useGame;
