import axios from 'axios';

import { getContentType } from './api.helper';

export const edamamInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EDAMAM_API_URL,
  headers: getContentType(),
  params: {
    type: 'public',
    app_id: process.env.NEXT_PUBLIC_EDAMAM_ID,
    app_key: process.env.NEXT_PUBLIC_EDAMAM_KEY
  }
});
