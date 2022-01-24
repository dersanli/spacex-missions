import {createSlice, nanoid, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export enum fetchStatus {
  idle = 'idle',
  loading = 'loading',
  succeeded = 'succeeded',
  failed = 'failed',
}

export interface MissionData {
  missionId: string,
  flightNumber: number,
  missionName: string,
  missionDate: string,
  rocketInfo?: RocketInfo,
  extraInfo?: ExtraInfo
}

interface RocketInfo {
  rocketId: string,
  rocketName: string,
  rocketType: string,
}

interface ExtraInfo {
  details: string | null,
  launchSiteName: string | null,
  missionPatchLink: string | null
}

export interface MissionDataState {
  status: fetchStatus,
  missionData: MissionData[],
  error: string | null | undefined
}

export const initialState: MissionDataState = {
  status: fetchStatus.idle,
  missionData: [],
  error: null
}

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/launches?limit=50&sort=launch_date_utc&order=desc')
  return response.data
})

// Inside the createSlice, we do not mutate the state, the Immer library takes care of it
export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.pending, (state: MissionDataState, action) => {
        state.status = fetchStatus.loading;
      })
      .addCase(fetchMissions.fulfilled, (state: MissionDataState, action) => {
        const missions: { mission_name: any; launch_date_utc: any; flight_number: any, rocket: any, details:string, launch_site:any, links:any  }[] = action.payload;
        const missionData: MissionData[] = [];
        missions.map((mission) => {
          missionData.push({
            missionId: nanoid(),
            flightNumber: mission.flight_number,
            missionName: mission.mission_name,
            missionDate: mission.launch_date_utc,
            rocketInfo:{
              rocketId: mission.rocket.rocket_id,
              rocketName: mission.rocket.rocket_name,
              rocketType: mission.rocket.rocket_type,
            },
            extraInfo: {
              details: mission.details,
              launchSiteName: mission.launch_site.site_name_long,
              missionPatchLink: mission.links.mission_patch_small,
            }
          })
        })

        state.status = fetchStatus.succeeded
        // Add fetched missions to the array
        state.missionData = missionData
      })
      .addCase(fetchMissions.rejected, (state: MissionDataState, action) => {
        state.status = fetchStatus.failed
        state.error = action.error.message
      })
  }
})

export default missionsSlice.reducer
