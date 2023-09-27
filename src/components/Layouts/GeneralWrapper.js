import React,{useEffect,useRef} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import Circle from '@/icons/Circle'
import styles from './GeneralWrapper.module.css'
export default function GeneralWrapper({children}) {
  const circleShape = useRef(null);
const [scrollTopVal, setScrollTopVal] = React.useState(0);


  return (
    <Box >
      <Header />
      {children}
      <Footer />
    </Box>
  )
}
