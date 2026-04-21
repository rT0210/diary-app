import { createSlice } from "@reduxjs/toolkit";

export type DiaryEntry = {
  date: string;
  content: string;
  title: string
  updatedAt: string;
};

type DiaryState = {
  entries: DiaryEntry[];
};

const initialState: DiaryState = {
  entries: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    saveEntry(state, action) {
      const index = state.entries.findIndex(
        (entry) => entry.date === action.payload.date,
      );
      if (index !== -1) {
        state.entries[index] = action.payload;
      } else {
        state.entries.push(action.payload);
      }
      localStorage.setItem('diary_entries', JSON.stringify(state.entries))
    },
    loadEntries(state, action) {
        state.entries = action.payload
    }
  },
});

export const {saveEntry, loadEntries} = diarySlice.actions
export default diarySlice.reducer