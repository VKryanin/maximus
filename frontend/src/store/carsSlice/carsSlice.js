import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";

const initialState = {
  list: [],
  staticMarks: [],
  isLoading: false,
  total: 0,
  page: 1,
  pageSize: 20,
  current: 0,
  models: [],
};

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (limit, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/stocks`);
    if (!response.ok) {
      throw new Error("Failed to fetch cars");
    }
    const data = await response.json();
    return data;
  }
);

export const marksCollection = createAsyncThunk(
  "cars/marksCollection",
  async ({ body }, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/marksCollection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
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
    setCars(state, action) {
      const { model, mark } = action.payload;
      const originalList = state.staticMarks;
      state.list = originalList.filter(
        (car) =>
          car.mark === mark && model.some((model) => car.model.includes(model))
      );
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
      state.models = Array.from(
        new Set(payload.data.map(({ model }) => model))
      );
      state.staticMarks = payload.data;
    });
    builder.addCase(getCars.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(marksCollection.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(marksCollection.fulfilled, (state, { payload }) => {
      state.list = payload.data;
      state.isLoading = false;
      state.total = payload.data.length;
    });
    builder.addCase(marksCollection.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setPage, setPageSize, setCars } = carsSlice.actions;
export default carsSlice.reducer;
