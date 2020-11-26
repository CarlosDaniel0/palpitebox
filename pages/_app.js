import React from 'react';
import Layout from '../components/Layout';
import '../css/styles.css';
import '../components/Fontawesome';


const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;