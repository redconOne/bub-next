import Header from '../components/Header';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

function MyApp({ Component, session, pageProps }) {
  return (
    <>
      <Head>
        <title>Binary Upload Boom</title>
      </Head>
      <Header />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
