import type { AppProps } from "next/app";
import "../styles/fonts/fonts.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
export default MyApp;
