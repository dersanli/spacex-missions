import React from 'react';
import {Link} from "react-router-dom";
import {format, parseISO} from "date-fns";

export const RocketInfoRenderer = (params: any) => {
  const missionId = params.node.data.missionId;
  if (!missionId) {
    return;
  }
  return (
    <Link
      to={`/missions/${missionId}`}
      key={missionId}>
      view rocket details
    </Link>
  );
};

export const MissionDateRenderer = (params: any) => {
  const missionDateUTC = params.node.data.missionDate;
  const missionDate = parseISO(missionDateUTC)
  if (!missionDate) {
    return;
  }
  return (
    <div>{format(missionDate, 'yyyy-MM-dd HH:mm:ss')}</div>
  );
};