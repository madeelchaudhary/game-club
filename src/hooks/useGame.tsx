import { useQuery } from "@tanstack/react-query";
import { gameService } from "../services/api-client";
import ms from "ms";

const useGame = (slug: string) =>
  useQuery(["game", slug], () => gameService.get<Game>(slug), {
    staleTime: ms("1h"),
  });

export default useGame;
