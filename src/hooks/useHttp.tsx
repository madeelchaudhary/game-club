import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface APIResponse<T> {
  count: number;
  results: T[];
}

const useHttp = <T extends object>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps: unknown[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    apiClient
      .get<APIResponse<T>>("/" + endpoint, { signal, ...config })
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => controller.abort();
  }, [endpoint, ...deps]);

  return { data, loading, error };
};

export default useHttp;
