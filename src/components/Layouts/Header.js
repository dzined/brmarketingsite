import React,{useEffect,useRef} from 'react'
import { Button } from '@mui/material'
import header from './Header.module.css'
import { gsap } from 'gsap';

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
      <img src="br-logo.png" alt="logo" className={header.logo} />
      <nav className={header.nav}>
        <ul>
          <li>Insurance</li>
          <li>Claims</li>
          <li>Risk Management</li>
          <li>Articles</li>
          <li>About Us</li>
          <li>News</li>
          <li>My Portal</li>
        </ul>
        </nav>
        <Button className={header.buttonReverse}>Get a Quote</Button>
    </header>
  )
}
