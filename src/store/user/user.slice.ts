import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorage } from '@/helpers/getLocalStorage';
import { removeFromStorage, saveToStorage } from '@/services/auth/auth.helper';

import { login, refresh, signup } from './user.actions';
import type { AuthResponse, InitialState } from './user.interface';

const initialState: InitialState = {
  user: getLocalStorage('user'),
  isLoading: true
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    tokenReceived: (_, { payload }) => {
      saveToStorage(payload);
    },
    logout: (state) => {
      state.user = null;
      removeFromStorage();
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }: { payload: AuthResponse }) => {
        state.isLoading = false;
        state.user = payload.user;
        saveToStorage(payload);
      })
      .addCase(signup.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }: { payload: AuthResponse }) => {
        state.isLoading = false;
        state.user = payload.user;
        saveToStorage(payload);
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(refresh.pending, (state) => {
        state.isLoading = true;
        console.log('======>', state.isLoading);
      })
      .addCase(refresh.fulfilled, (state, { payload }: { payload: AuthResponse }) => {
        state.isLoading = false;
        state.user = payload.user;
        saveToStorage(payload);
      })
      .addCase(refresh.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      });
  }
});
