import { configureStore } from "@reduxjs/toolkit";
import { newDiaryReducer } from "./newDiary";

export const store = configureStore({
    reducer: {
        settingsDiary: newDiaryReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch