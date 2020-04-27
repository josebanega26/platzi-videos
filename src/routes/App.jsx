import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../assets/styles/app.scss';
import Layout from '../../components/Layout/Layout';
import HomePage from '../../containers/HomePage';
import Login from '../../containers/Login';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
