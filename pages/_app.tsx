import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Meta from "../components/Meta";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <Meta />
          <Component {...pageProps} />
          <hr className="my-12 mx-auto w-48 border-secondary-200" />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
