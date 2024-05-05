import { store } from "@/Store";
import "@/Styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import "normalize.css";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import i18next from "../../i18n.js";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </I18nextProvider>
  );
}
