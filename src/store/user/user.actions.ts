import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService } from '@/services/auth/auth.service';

import type { AuthResponse, LoginData, SignupData } from './user.interface';

export const signup = createAsyncThunk<AuthResponse, SignupData>('auth/signup', async (data, thunkApi) => {
  try {
    return await AuthService.signup(data);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const login = createAsyncThunk<AuthResponse, LoginData>('auth/login', async (data, thunkApi) => {
  try {
    return await AuthService.login(data);
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk<AuthResponse>('auth/refresh', async (_, thunkApi) => {
  try {
    return await AuthService.refresh();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
