import '../styles/globals.css';
import Head from 'next/head';

// TODO Redux : importer les elements necessaires depuis react-redux et @reduxjs/toolkit
// TODO Redux : créer le store avec configureStore et brancher le reducer

function App({ Component, pageProps }) {
  return (
    // TODO Redux : englober le contenu dans le provider
    <>
      <Head>
        <title>Ma liste de courses</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
