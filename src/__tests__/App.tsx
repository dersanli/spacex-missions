import React from 'react';
import { render, screen } from '../app/test-utils'
import {App} from '../App';


describe('App component tests', function () {

  it('Shows the App Header', () => {
    render(<App/>);
    const header = screen.getByText('Agora Front-End Test - SpaceX App');
    expect(header).toBeTruthy();
  });
});
