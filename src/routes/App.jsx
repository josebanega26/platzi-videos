import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../assets/styles/app.scss';
import Layout from '../../components/Layout/Layout';
import HomePage from '../../containers/HomePage';
import Login from '../../containers/Login';
import SignUp from '../../containers/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={SignUp} />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
