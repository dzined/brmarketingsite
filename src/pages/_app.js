import '@/styles/globals.css'
import theme from '@/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
import TagManager,{TagManagerArgs} from 'react-gtm-module';
import React,{useEffect} from 'react';
export default function App({ Component, pageProps }) {

  const gtmId = "GTM-M8V66TQD";
const tagManagerArgs={gtmId}

useEffect(() => {
TagManager.initialize(tagManagerArgs);
}, []);
  return (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
    )

}
// // <ThemeProvider theme={theme}>

// </ThemeProvider>