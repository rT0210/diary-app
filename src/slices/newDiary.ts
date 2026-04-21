import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sizeText: 16,
  intervalText: 1,
  colorText: "black",
  colorBackground: "white",
  positionText: "left" as "left" | "center" | "right",
  isBold: false,
  isItalic: false,
  isUnderline: false
};

const newDiary = createSlice({
  name: "newDiary",
  initialState,
  reducers: {
    incrementSizeText(state) {
      state.sizeText += 1;
    },
    decrementSizeText(state) {
      state.sizeText -= 1;
    },
    incrementSizeInterval(state) {
      if (state.intervalText >= 2) return;
      state.intervalText = +(state.intervalText + 0.1).toFixed(2);
    },
    decrementSizeInterval(state) {
      if (state.intervalText <= 0.8) return;
      state.intervalText = +(state.intervalText - 0.1).toFixed(2);
    },
    changeColorText(state, action) {
      state.colorText = action.payload;
    },
    changePositionText(state, action) {
      state.positionText = action.payload;
    },
    changeBackgroundText(state, action) {
      state.colorBackground = action.payload
    },
    changeBoldText(state) {
      state.isBold = !state.isBold
    },
    changeItalicText(state) {
      state.isItalic = !state.isItalic
    },
    changeUnderlineText(state) {
      state.isUnderline = !state.isUnderline
    },
  },
});

export const {
  incrementSizeText,
  decrementSizeText,
  incrementSizeInterval,
  decrementSizeInterval,
  changeColorText,
  changePositionText,
  changeBackgroundText,
  changeBoldText,
  changeItalicText,
  changeUnderlineText
} = newDiary.actions;

export const newDiaryReducer = newDiary.reducer;
