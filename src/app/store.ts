import { configureStore } from '@reduxjs/toolkit'
import missionDataReducer from "../features/missionsSlice";

export const store = configureStore({
  reducer: {missionData: missionDataReducer},
})

export type RootState = ReturnType<typeof store.getState>