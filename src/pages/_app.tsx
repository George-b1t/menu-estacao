import { OrderProvider } from '../context/OrderContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  )
}

export default MyApp
