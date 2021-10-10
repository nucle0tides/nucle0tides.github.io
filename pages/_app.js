import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;