import axios, { AxiosError } from "axios";

export interface APIResponse<T> {
  count: number;
  results: T[];
  next?: string;
  previous?: string;
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5dba4db3a96d4a66bf9516a47d7422fb",
  },
});

class APIClient {
  constructor(private endpoint: string) {}

  getAll = async <T>(params?: object, path?: string) => {
    const response = await apiClient.get<APIResponse<T>>(
      this.endpoint + (path || ""),
      {
        params,
      }
    );
    return response.data;
  };

  get = async <T>(id: string) => {
    const response = await apiClient.get<T>(`${this.endpoint}/${id}`);
    return response.data;
  };
}

export const gamesService = new APIClient("games");
export const genresService = new APIClient("genres");
export const platformsService = new APIClient("platforms");

export { AxiosError };
