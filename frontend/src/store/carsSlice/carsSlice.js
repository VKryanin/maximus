import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

const initialState = {
  list: [],
  isLoading: false,
  total: 0,
  page: 1,
  pageSize: 20,
  current: 0,
};

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (limit, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/stocks?limit=${limit}`);
    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }
    const data = await response.json();
    return data;
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
      state.current = action.payload * 20;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCars.fulfilled, (state, { payload }) => {
      state.list = payload.data;
      state.isLoading = false;
      state.total = payload.data.length;
    });
    builder.addCase(getCars.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setPage, setPageSize } = carsSlice.actions;
export default carsSlice.reducer;
