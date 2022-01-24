import MissionInfo from "../MissionInfo";
import {createMemoryHistory} from 'history'
import {render, screen} from '../../app/test-utils'
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";


describe('MissionInfo tests', () => {
  it('Renders correctly', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);

    render(
      // @ts-ignore
      <Router history={history}>
        <MissionInfo/>
      </Router>,
    );
    const header = screen.getByText('Rocket Details & Extra Mission Information');
    expect(header).toBeTruthy();

  })
})
