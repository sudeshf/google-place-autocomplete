import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormattedLocation } from "../interfaces/app-interface";

export interface AppState {
  loading: boolean;
  suggestedLocations: IFormattedLocation[];
  error: {};
}

const initialState: AppState = {
  loading: false,
  suggestedLocations: [],
  error: {},
};

const appSlice = createSlice({
  name: "app-slice",
  initialState,
  reducers: {
    setLoading(state: AppState, action: PayloadAction<any>) {
      state.loading = action.payload.loading;
    },
    setLoactions(state: AppState, action: PayloadAction<any>) {
      state.suggestedLocations = [];
      state.suggestedLocations = action.payload.data;
    },
  },
});

export const { setLoactions, setLoading } = appSlice.actions;

export default appSlice.reducer;
