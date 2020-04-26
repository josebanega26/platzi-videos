import React from 'react';
import '../assets/styles/app.scss';
import Layout from '../../components/Layout/Layout';
import HomePage from '../../containers/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={HomePage} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
