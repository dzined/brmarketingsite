import React,{useEffect,useRef} from 'react'
import { Button,Box ,Stack} from '@mui/material'
import header from './Header.module.css'
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Header() {
  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
      delay: 1
    });
  }, []);
  const headerRef = useRef(null);
  return (

    <header ref={headerRef} className={header.header} id="headerSection" style={{opacity:0}}>
<Box className={header.headerInner}>
      <img src="br-logo.png" alt="logo" className={header.logo} />

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

        <Button className={header.buttonReverse}>Get a Quote</Button>
        </Stack>
        </Box>
<Box className={header.headerCase}></Box>
    </header>

  )
}
