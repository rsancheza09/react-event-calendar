import React from 'react';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, lime } from '@material-ui/core/colors';
import Home from './containers/home';
import AppBar from './components/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: lime,
  },
});
const App = () => (
  <MuiThemeProvider theme={ theme }>
    <header>
      <AppBar />
    </header>

    <main>
      <Route exact path="/" component={ Home } />
    </main>
  </MuiThemeProvider>
);

export default App;
