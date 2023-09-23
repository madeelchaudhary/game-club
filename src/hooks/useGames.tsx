import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  rating_top: number;
  parent_platforms: Platform[];
  platforms: Platform[];
  metacritic: number;
}

interface GameAPIResponse {
  results: Game[];
  count: number;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    apiClient
      .get<GameAPIResponse>("/games", { signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, loading, error };
};

export default useGames;
