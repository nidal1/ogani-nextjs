import { Provider } from 'react-redux';
import store from '../store'

import { fetchData } from '../util';
import '../styles/global.css';


function MyApp({ Component, pageProps, data }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} data={data} />
    </Provider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const products = await fetchData('http://localhost:3000/api/getAllProducts');
  const categories = await fetchData('http://localhost:3000/api/getAllCategories');
  const banners = await fetchData('http://localhost:3000/api/getAllBannersPic');
  return {
    data: {
      products,
      categories,
      banners
    }
  }
}

export default MyApp
