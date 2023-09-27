import React,{useEffect,useRef} from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'
import Circle from '@/icons/Circle'
import styles from './GeneralWrapper.module.css'
import AltFooter from './AltFooter'

export default function Wrapper({children}) {
  const layersTop = useRef(null);
  const circleShape = useRef(null);
const [scrollTopVal, setScrollTopVal] = React.useState(0);

//   useEffect(() => {

//     // const hero = document.querySelector('#heroSection');
//     // const rect = hero.getBoundingClientRect();
//     // const bottom = rect.bottom;
//     // console.log("hero bottom",bottom)
//     // const messagingAnim = document.querySelector('#messagingAnim');
//     // const rect2 = messagingAnim.getBoundingClientRect();
//     // const y = rect2.top + window.scrollY;

//     // const layers = layersTop.current;
//     // const circle=circleShape.current
//     // header.style.opacity = 1;

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setScrollTopVal(scrollTop)

// //  console.log("scrollTop",scrollTop)
// const speed =  1.5;
// const yPos =scrollTop-280;
// console.log("yPos",yPos)
//       if(scrollTop >200 && yPos <295) {


//         console.log("1")
//           circle.style.transform = `translateY(${yPos}px)`;

//       }
//       else if(yPos >295 && yPos <395) {
//         console.log("2")
//         circle.style.transform = ` translateY(${yPos}px) scale(1.2) `;
//       }
//       else if(yPos >750 && yPos <900) {
//         console.log("3")
//         circle.style.transform = `translateY(${yPos}px) scale(1)`;
//       }
//     }

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     }
//   }, []);


  return (
    <Box ref={layersTop}>
      {/* <Box sx={{zIndex:500000,position:'fixed',top:100,left:100}}>
        {scrollTopVal}
      </Box>
      <Box sx={{width:'2px',height:'180vh',position:'absolute',zIndex:99999, background: 'linear-gradient(to right, #00B7FF, #9308FF)',left:50,top:'85vh'}}>
        <Box ref={circleShape} sx={{position:'absolute',top:4,left:0,marginLeft:-0.8}}>
        <Circle className={styles.circle} id="circle"  sx={{color:'#0CDEFF',fontSize:14,}}/>
        </Box>
        </Box> */}
      <Header />
      {children}
      <AltFooter />
    </Box>
  )
}
