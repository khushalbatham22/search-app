import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: null,
  selectedSearchResult: null,
  isLoadingResults:false,
  searchKey: "",
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setSelectedSearchResults: (state, action) => {
      state.selectedSearchResult = action.payload;
    },
    setIsLoadingResults: (state, action) => {
      state.isLoadingResults = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setSearchKey,
  setSearchResults,
  setError,
  setIsLoadingResults,
  setSelectedSearchResults,
} = searchSlice.actions;
export default searchSlice.reducer;
