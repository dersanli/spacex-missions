import React from 'react';
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography
} from "@mui/material";
import {RootState} from "../app/store";
import {MissionData} from "../features/missionsSlice";

const MissionInfo = () => {
  const params = useParams();
  const navigate = useNavigate();


  // Get the correct Mission Information from the redux state
  const missionInfo: MissionData | undefined = useSelector((state: RootState) => state.missionData.missionData.find(mission => mission.missionId === params.missionId))

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{fontSize: 24}} color="text.secondary" gutterBottom>
          Rocket Details & Extra Mission Information
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <ListItemText primary="Rocket ID" secondary={missionInfo?.rocketInfo?.rocketId}/>
              </ListItem>
              <Divider/>
              <ListItem>
                <ListItemText primary="Rocket Name" secondary={missionInfo?.rocketInfo?.rocketName}/>
              </ListItem>
              <Divider/>
              <ListItem>
                <ListItemText primary="Rocket Type" secondary={missionInfo?.rocketInfo?.rocketType}/>
              </ListItem>
            </List>
          </Grid>

          {missionInfo?.extraInfo?.missionPatchLink &&
            <Grid item xs={4}>
              <CardMedia
                component="img"
                image={missionInfo?.extraInfo?.missionPatchLink}
                alt="Mission Patch Image"
              />
            </Grid>
          }

          <Grid item xs={4}>
            <List>
              <ListItem>
                <ListItemText primary="Mission Name" secondary={missionInfo?.missionName}/>
              </ListItem>
              <Divider/>
              <ListItem>
                <ListItemText primary="Mission Details" secondary={missionInfo?.extraInfo?.details}/>
              </ListItem>
              <Divider/>
              <ListItem>
                <ListItemText primary="Launched From" secondary={missionInfo?.extraInfo?.launchSiteName}/>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          navigate('/', {replace: true})
        }}>BACK</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Box>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default MissionInfo;