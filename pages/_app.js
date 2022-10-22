import "../styles/index.css";
import "../styles/App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Provider } from "react-redux";
import { wrapper } from "../redux/store";
import { SessionProvider } from "next-auth/react"

const App = ({ Component, pageProps }) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};

export default App;
