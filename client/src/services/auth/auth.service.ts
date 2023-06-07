import axios from 'axios';

import { getApiUrl } from '@/helpers/getApiUrl';
import type { AuthResponse, LoginData, SignupData } from '@/store/user/user.interface';

import { instance } from '../api/api.service';

import { getRefreshToken } from './auth.helper';

export const AuthService = {
  async signup(formData: SignupData) {
    const { data } = await instance<AuthResponse>({
      method: 'POST',
      data: formData,
      url: getApiUrl.signup()
    });
    return data;
  },
  async login(formData: LoginData) {
    const { data } = await instance<AuthResponse>({
      method: 'POST',
      data: formData,
      url: getApiUrl.login()
    });
    return data;
  },
  async refresh() {
    const refreshToken = getRefreshToken();

    const { data } = await axios<AuthResponse>({
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}${getApiUrl.refresh()}`,
      headers: { Authorization: `Bearer ${refreshToken}` }
    });
    return data;
  }
};
