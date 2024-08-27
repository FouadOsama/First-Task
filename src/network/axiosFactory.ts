import axios from "axios";
import { getHeaders } from "../helpers/headers.ts";

const axiosFactory = () => (config) => {
  const headers = getHeaders(config);

  return axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    headers,
  });
};

const axiosInstance = axiosFactory();

export default axiosInstance;
