import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import {Provider} from "react-redux";
import {store} from "../app/store";


function MyApp({ Component, pageProps }) {
  <Provider store={store}>
    return <Component {...pageProps} />
  </Provider>

}

export default MyApp
