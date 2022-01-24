import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import missionDataReducer, {fetchStatus, MissionDataState} from "../features/missionsSlice";

const loading: MissionDataState = {
  status: fetchStatus.loading,
  missionData: [],
  error: null
}


function render(
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  {
    // @ts-ignore
    preloadedState,
    // @ts-ignore
    store = configureStore({reducer: {missionData: missionDataReducer}, loading}),
    ...renderOptions
  } = {}
) {

  // @ts-ignore
  const wrapper = ({children}) => <Provider store={store}>{children}</Provider>

  return rtlRender(ui, {wrapper, ...renderOptions})
}

// re-export everything
export * from '@testing-library/react'
// override render method
export {render}