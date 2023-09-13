import '@/styles/globals.css'
import theme from '@/styles/theme'
import { ThemeProvider } from '@mui/material/styles'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />

}
// // <ThemeProvider theme={theme}>

// </ThemeProvider>