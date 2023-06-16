import '../styles/globals.css'
import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider,ProviderProps } from "react-redux";
import store from '../store/store';



export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
      
        <ToastContainer />
        <ChakraProvider>

          <Component {...pageProps} />
        </ChakraProvider>
        </Provider>
  
}
