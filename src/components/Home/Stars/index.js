import React,{useRef,useEffect} from 'react'
import styles from './Hero.module.css'
import { Button, Typography,Box } from '@mui/material'
import { gsap } from 'gsap';
import Particles from "react-tsparticles";
import Particle from './Particle';

export default function Stars() {


  return (


   <Box sx={{width:'100%',height:'100vh'}}>
     <Particle />
      </Box>

  )
}
