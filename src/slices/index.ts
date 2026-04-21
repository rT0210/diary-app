import { configureStore } from "@reduxjs/toolkit";
import { newDiaryReducer } from "./newDiary";
import diarySlice from './diarySlice';

export const store = configureStore({
    reducer: {
        settingsDiary: newDiaryReducer,
        diary: diarySlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch