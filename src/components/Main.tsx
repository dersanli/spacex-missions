import React, {ReactElement} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../app/store";
import {fetchMissions, fetchStatus} from "../features/missionsSlice";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import MissionGridView from "./MissionGridView";
import Alert from "@mui/material/Alert";

export const Main : React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const missionData = useSelector((state: RootState) => state.missionData)

  const getMissions = () => dispatch(fetchMissions());

  let content: ReactElement;
  if (missionData.status === fetchStatus.idle) {
    content = <Button data-testid="fetchButton" variant="contained" onClick={getMissions}>Get Missions</Button>
  } else if (missionData.status === fetchStatus.loading) {
    content = <CircularProgress data-testid="loadingSpinner"/>
  } else if (missionData.status === fetchStatus.succeeded) {
    content = <MissionGridView missionData={missionData.missionData}/>
  } else {
    content = <Alert severity="error">Error: {missionData.error}</Alert>
  }

  return content;
}
