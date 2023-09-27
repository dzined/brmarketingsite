import React,{useEffect,useRef} from 'react'
import { Button,Box ,Stack,useTheme,useMediaQuery, Grid} from '@mui/material'
import header from './Header.module.css'
import { gsap } from 'gsap';
import Link from 'next/link';
import StyledModal from '../Widgets/StyledModal/index';
import Bars from '@/icons/Bars';
import Menu from './Menu';

export default function Header({opacity=1}) {
  const theme = useTheme();
  //using mediaquery
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


  useEffect(() => {
    if(opacity==0){
      gsap.from(headerRef.current, {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
        delay: 1
      });
    }
  }, []);
  const headerRef = useRef(null);
  return (
<>
{isMobile ? <>
  <Box sx={{position:'fixed',top:0,left:0,zIndex:999,width:'100%',
background:theme.palette.primary.navy,

}}>
  <Box sx={{p:2}}>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
      <Link href="/">
      <Box component="img" src="/br-logo.png" alt="logo" className={header.logo} sx={{width:'100%',maxWidth:200}} />
      </Link>
      </Grid>
      <Grid item xs={6} sx={{textAlign:'right'}} >
        <Menu />
      </Grid>

      </Grid>
      </Box>
      <Box className="animateStrip" />
  </Box>
  <Box sx={{height:64}}></Box>
</> :<>
    <header ref={headerRef} className={header.header} id="headerSection" style={{opacity:opacity}}>
      <Box className={header.headerInner}>
      <Link href="/">
      <img src="/br-logo.png" alt="logo" className={header.logo} />
      </Link>
        <Stack direction="row" spacing={3}>
      <nav className={header.nav}>
        <ul>
          <li>
            <Link href="/insurance">Insurance</Link></li>
          <li>
          <Link href="/claims">Claims</Link></li>
          <li>
          <Link href="/risk-management">Risk Management</Link></li>
          {/* <li>Articles</li>
          <li>About Us</li>
          <li>News</li>
          <li>My Portal</li> */}
        </ul>
        </nav>

       <StyledModal/>
        </Stack>
        </Box>
        <Box className={header.headerCase}></Box>
    </header>  <Box sx={{height:64}}></Box>
    </>
}
</>
  )
}
