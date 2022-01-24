import  {fetchMissions} from "../missionsSlice";
import { configureStore } from '@reduxjs/toolkit';
import axios from 'axios';

describe('Fetch Missions', ()=>{
  it('calls the correct endpoint and fetches 50 missions', async ()=>{
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValue({ data: Array(50) });

    const store = configureStore({
      reducer: function (state = '', action) {
        switch (action.type) {
          case 'missions/fetchMissions/fulfilled':
            return action.payload;
          default:
            return state;
        }
      },
    });

    await store.dispatch(fetchMissions());

    expect(getSpy).toBeCalledWith('https://api.spacexdata.com/v3/launches?limit=50&sort=launch_date_utc&order=desc');

    const state = store.getState();
    expect(state.length).toEqual(50);
  })
})