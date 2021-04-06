import axios from "axios";
import requestInterceptor from "./helpers/requestInterceptor";
import responseInterceptor from "./helpers/responseInterceptor";
import onError from "./helpers/onError";
import qs from "querystringify";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE || "/api"
});

const api = {};

Object.getOwnPropertyNames(instance)
  .filter(prop => typeof instance[prop] === "function")
  .forEach(func => {
    api[func] = (...props) => {
      return instance[func](...props).then(res => res.data);
    };
  });

api["$get"] = (url, params, config) => {
  return api["get"](url + qs.stringify(params, "?"), config);
};

instance.interceptors.request.use(requestInterceptor, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(responseInterceptor, onError);

export default api;
