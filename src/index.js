import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const theme = createMuiTheme({
    /* theme for v1.x */
   });
const themeV0 = getMuiTheme({
    /* theme for v0.x */
   });

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <V0MuiThemeProvider muiTheme={themeV0}>
        <App />
    </V0MuiThemeProvider>
  </MuiThemeProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
