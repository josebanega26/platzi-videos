import React from 'react';
import '../assets/styles/app.scss';
import Layout from '../components/Layout/Layout';
import HomePage from '../containers/HomePage';

function App() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
