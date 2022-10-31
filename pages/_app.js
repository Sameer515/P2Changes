import Head from "next/head";
import Link from "next/link";
import "../styles.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My Test</title>
      </Head>
      <Link href="/">
        <h1>My Test</h1>
      </Link>
      <Component {...pageProps} />
    </>
  );
}

export default App;
