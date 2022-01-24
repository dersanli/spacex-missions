import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MissionInfo from "./components/MissionInfo";
import {Main} from "./components/Main";

export const App: React.FunctionComponent = () => {


  return(
    <BrowserRouter>
      <Container maxWidth="lg">
        <Box sx={{my: 4}}>
          <Typography sx={{mb: 4}} variant="h4" component="h1" gutterBottom>
            Agora Front-End Test - SpaceX App
          </Typography>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/missions/:missionId" element={<MissionInfo/>}/>
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}
