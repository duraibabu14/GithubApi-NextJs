import Nav from "../src/components/Nav";
import "../styles/globals.css";
import "../src/scss/styles.scss";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>GitHub Repos</title>
      </Head>
      <Nav />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
