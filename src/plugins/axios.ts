import axios from 'axios';
import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

/**
 *  @description Initialize axios instance with default configuration
 */
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
});

axiosInstance.interceptors.request.use(requestCallback, errorCallback);
axiosInstance.interceptors.response.use(responseCallback, errorCallback);
axiosInstance.defaults.timeout = 15000;

function requestCallback(config: InternalAxiosRequestConfig) {
  config.headers['X-RapidAPI-Key'] = import.meta.env.VITE_BASE_API_KEY;
  return config;
}

async function responseCallback(response: AxiosResponse) {
  return response.data;
}

function errorCallback(error: AxiosError) {
  return Promise.reject(error);
}
