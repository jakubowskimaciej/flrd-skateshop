import { combineReducers } from '@reduxjs/toolkit';
import categoriesSlice from 'features/categories/categoriesSlice';
import userSlice from 'features/user/userSlice';

export const rootReducer = combineReducers({
  currentUser: userSlice,
  categories: categoriesSlice,
});
