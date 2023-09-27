import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Home/Hero'
import Typography from '@mui/material/Typography'
import { Button,Box, Stack } from '@mui/material'
import Header from '@/components/Layouts/Header'
import ContentBox from '@/components/Home/IntroSection/ContentBox'
import IntroSection from '@/components/Home/IntroSection'
import Footer from '@/components/Layouts/Footer'
import Wrapper from '@/components/Layouts/Wrapper'
import MessagingAnim from '@/components/Home/MessageAnim'
import SectionIntro from '@/components/Home/SectionIntro'
import SectionPartners from '@/components/Home/SectionPartners'
import SectionTime from '@/components/Home/SectionTime'
import SectionFoot from '@/components/Home/SectionFoot'
import SectionPin from '@/components/Home/SectionPin'
import React,{useEffect, useRef} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
//   const [heroHeight,setHeight] = React.useState(0)
//   const heroRef = React.useRef(null)
//  useEffect(() => {
//   setHeight(heroRef.current.clientHeight)
//  },[])
  return (
    <Wrapper>
      <Head>
        <title>BareRock</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>

      <Box sx={{maxHeight:600,backgroundColor:'red',overflow:'hidden'}}>
      {/* <Box ref={heroRef}> */}
      <Hero  />
      {/* </Box> */}

      </Box>
      {/* <SectionPin  heroHeight={heroHeight} /> */}
      {/* <MessagingAnim />
       */}
    <Box className="curvedSectionBlueTop paddedXl"  />
     <SectionIntro />
     <SectionTime />
     <SectionPartners />
     <SectionFoot />
       {/*

       */}
    </main>
    </Wrapper>
  )
}
