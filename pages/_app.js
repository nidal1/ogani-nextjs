import { Provider } from 'react-redux';
import store from '../store'

import { fetchData } from '../util';
import '../styles/global.css';


function MyApp({ Component, pageProps, data }) {
  
  return (
    <Provider store={store}>
      <Component {...pageProps} data = { data }/>
    </Provider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const data = await fetchData('http://localhost:3000/api/getAllProducts');
  return { data : [...data] }
}

export default MyApp
