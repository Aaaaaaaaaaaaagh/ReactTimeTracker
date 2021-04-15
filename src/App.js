import React from 'react';
import ThemeProvider, { createGlobalStyle } from '@carvana/showroom-theme';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import DataEntryForm from './components/TimeTracking/DataEntryForm/DataEntryForm';


const GlobalStyle = createGlobalStyle(process.env.NODE_ENV);
export default (
  <Router>
    <ThemeProvider>
      <>
        <GlobalStyle/>
        <Route path="/" component={DataEntryForm} />
        </>
    </ThemeProvider>
    </Router>
);
