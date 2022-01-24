import * as React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {store} from './app/store'
import {Provider} from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import theme from './app/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Provider store={store}>
      <App/>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);
