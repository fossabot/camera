// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f7f7f7 !important;
  }

  #root {
    padding: 1rem;
  }

  /* Lighter dimmer */
  .ui.dimmer {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Blurring dimmer no grayscale content */
  .blurring.dimmed.dimmable > :not(.dimmer) {
    /* -webkit-filter: blur(5px) grayscale(0) ; */
    filter: blur(5px) grayscale(0);
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  margin-left: 1rem;
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <Flex>
      <Sidebar />
      <Content>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Content>
    </Flex>
  </Router>
);

export default App;
