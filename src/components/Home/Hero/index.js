import React,{useRef,useEffect} from 'react'
import styles from './Hero.module.css'
import { Button, Typography,Box, Stack } from '@mui/material'
import { gsap } from 'gsap';
import Particles from "react-tsparticles";
import Anime from '../Anime';

export default function Hero() {


  const parallaxElements = useRef([]);

const boxRef =useRef(null)
const boxRefa =useRef(null)
const boxRefb =useRef(null)
const boxRefc =useRef(null)
const myRef =useRef(null)
useEffect(() => {
  gsap.from(boxRef.current, {
    opacity: 1,
    duration: 1,
    ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    delay: 2
  });
  gsap.to(boxRefa.current, {
    opacity: 1,
    duration: 4,
    ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    delay: 2
  });
  gsap.to(boxRefb.current, {
    opacity: 1,
    duration: 4,
    ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    delay: 2.3
  });
  gsap.to(boxRefc.current, {
    opacity: 1,
    duration: 5,
    ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    delay: 2.4
  });
  gsap.to(myRef.current, {
    opacity: 0,
    duration: 13,
    ease: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
    delay: 1
  });
}, []);


  useEffect(() => {
    const layers = parallaxElements.current;
     const heroBox = document.querySelector('#heroBox');
    // header.style.opacity = 1;

    const handleScroll = () => {
      const hero = document.querySelector('#heroSection');
      const scrollTop = window.scrollY;

// console.log("scrollTop",scrollTop)
      if (scrollTop > 90) {
        heroBox.style.opacity = 0;
      } else {
        heroBox.style.opacity = 1;
      }

// console.log("scrollTop",scrollTop)
      if(scrollTop < 600) {
        layers.forEach((layer, i) => {
          const speed = i * 0.1;
          const yPos = (window.scrollY * speed) / 2;
          layer.style.transform = `translateY(${yPos}px)`;
        });
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (
    <Box id="heroSection" class={styles.heroSection} sx={{position:'relative',  width: '100%',
    height: '100%'}}>
    <Stack  ref={boxRef} id="heroBox" className={styles.heroBox} spacing={3}>
    <Typography variant="h2" ref={boxRefa} className={styles.heroTitle}>The new era<br />of PI Insurance<br />is here</Typography>
    <Typography variant="body1" ref={boxRefb} className={styles.heroSubtitle}>Welcome to a pioneering new <strong>PI insurance</strong> service created to protect <strong>forward-thinking financial intermediaries</strong></Typography>
    <Button href="/insurance" ref={boxRefc} className={styles.button}>How we&apos;re different</Button>

    </Stack>
      <img ref={el => parallaxElements.current[6] = el} src="mountain-6.svg" class={`${styles.parrallax} ${styles.mountain6}`}  />
      <img ref={el => parallaxElements.current[5] = el} src="mountain-5.svg" alt="mountains1" class={`${styles.parrallax} ${styles.mountain5}`} />
      <img ref={el => parallaxElements.current[4] = el} src="mountain-4.svg" alt="mountains1" class={`${styles.parrallax} ${styles.mountain4}`} />
      <img ref={el => parallaxElements.current[3] = el} src="mountain-3.svg" alt="mountains1" class={`${styles.parrallax} ${styles.mountain3}`} />
      <img ref={el => parallaxElements.current[2] = el} src="mountain-2.svg" alt="mountains1" class={`${styles.parrallax} ${styles.mountain2}`} />
      <img ref={el => parallaxElements.current[1] = el} src="mountain-1.svg" alt="mountains1" class={`${styles.parrallax} ${styles.mountain1}`} />


      <Box style={{opacity:1}} ref={myRef}>
        <Anime />
      <img src="night.png"  alt="night" class={styles.night} />
      </Box>
    <Box className={styles.sunHolder}>
    <Box className={styles.lensCenter}></Box>
    </Box>
    <img src="background.svg"  alt="mountains1" class={styles.parrallaxBg} />


    </Box>

  )
}
