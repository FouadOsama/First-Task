import axiosInstance from "./axiosFactory.ts";

import { createAxiosInterceptors } from "../helpers/helpers.ts";

const servicesFactory = (axiosInstance) => ({
  get: (url) => {
    let axios = axiosInstance();

    axios = createAxiosInterceptors(axios);
    return axios.get(url);
  },
  post: (url, payload = {}, cancelToken) => {
    let axios = axiosInstance();

    axios = createAxiosInterceptors(axios);
    return axios.post(url, payload, { cancelToken });
  },
  put: (url, payload = {}, config = {}) => {
    let axios = axiosInstance(config);

    axios = createAxiosInterceptors(axios);
    return axios.put(url, payload);
  },
  patch: (url, payload = {}) => {
    let axios = axiosInstance();

    axios = createAxiosInterceptors(axios);
    return axios.patch(url, payload);
  },
  delete: (url, payload = {}) => {
    let axios = axiosInstance();

    axios = createAxiosInterceptors(axios);
    return axios.delete(url, payload);
  },
});

const services = servicesFactory(axiosInstance);

export default services;
