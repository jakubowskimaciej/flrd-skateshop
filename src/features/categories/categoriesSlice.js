import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoriesAndDocs } from 'utils/firebase/firebase.utils';

const initialState = {
  categoriesMap: {},
};

export const fetchCategories = createAsyncThunk(
  'categories/FETCH_CATEGORIES',
  async () => {
    const categories = await getCategoriesAndDocs();
    return categories;
  }
);

const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    setCategoriesMap(state, action) {
      state.categoriesMap = action.payload;
    },
  },
});

export const { setCategoriesMap } = categoriesSlice.actions;
export default categoriesSlice.reducer;
