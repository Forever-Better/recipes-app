/* eslint-disable no-underscore-dangle */
import axios from 'axios';

import { getAccessToken, removeFromStorage } from '../auth/auth.helper';

import { errorCatch, getContentType } from './api.helper';

export const edamamInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EDAMAM_API_URL,
  headers: getContentType(),
  params: {
    type: 'public',
    app_id: process.env.NEXT_PUBLIC_EDAMAM_ID,
    app_key: process.env.NEXT_PUBLIC_EDAMAM_KEY
  }
});

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: getContentType()
});

instance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        const response = instance.request(originalRequest);

        return await response;
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') {
          removeFromStorage();
        }
      }
    }
  }
);
