import { ENDPOINTS } from "../helpers/endpoints.ts";
import services from "../network/services.ts";
import { showHideLoader } from "../store/loader/loaderSlice.ts";
import { store } from "../store/index.ts";
// import { clearUserData } from "../utils/Auth.ts";

interface RequestConfig {
  handlerEnabled?: boolean;
  [key: string]: any;
}

export const isHandlerEnabled = (config: RequestConfig = {}) => {
  return config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled
    ? false
    : true;
};

let numberOfAjaxCAllPending = 0;

export const requestHandler = (request) => {
  numberOfAjaxCAllPending++;
  if (isHandlerEnabled(request)) {
    store.dispatch(showHideLoader(true));

    request.headers["Accept"] = "application/json";
  }
  return request;
};

export const successHandler = (response) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(response)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }
  return response;
};

export const errorHandler = async (error) => {
  numberOfAjaxCAllPending--;
  if (isHandlerEnabled(error.config)) {
    if (numberOfAjaxCAllPending === 0) {
      store.dispatch(showHideLoader(false));
    }
  }
  if (error.response.status === 401) {
    if (error.response.config.url.includes("/refresh_access_token")) {
      // clearUserData();
    } else {
      // if (!error.response.config.url.includes("/sessions")) {
      //   const response = await services.post(ENDPOINTS.refreshToken);
      //   return response;
      // }
      return Promise.reject({ ...error });
    }
  }
  return Promise.reject({ ...error });
};
