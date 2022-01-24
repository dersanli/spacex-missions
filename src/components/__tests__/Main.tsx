import React from 'react';
import {render, screen} from '../../app/test-utils'
import {Main} from '../Main';
import {fireEvent} from "@testing-library/react";

describe('Main component tests', () => {
  it('Renders the fetch button', () => {
    render(<Main/>);
    const fetchButton = screen.getByTestId('fetchButton');
    expect(fetchButton).toBeTruthy();
  });

  it('Renders spinner while loading', () => {
    render(<Main/>);
    const fetchButton = screen.getByTestId('fetchButton');
    fireEvent.click(fetchButton);
    const loadingSpinner = screen.getByTestId('loadingSpinner');
    expect(loadingSpinner).toBeTruthy();
  });

});