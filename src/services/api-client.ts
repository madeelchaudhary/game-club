import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5dba4db3a96d4a66bf9516a47d7422fb",
  },
});

export default apiClient;
