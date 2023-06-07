import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { userSlice } from './user/user.slice';

const rootReducer = combineReducers({
  user: userSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
