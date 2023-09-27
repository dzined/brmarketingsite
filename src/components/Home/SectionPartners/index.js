import React,{useEffect} from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Stack, Typography,useTheme,useMediaQuery } from '@mui/material';
import Link from 'next/link';
import {  } from 'react';
import {fadeIn, fadeInStagger} from '@/helpers/animation'
import Rings from '@/components/Widgets/Rings';
import { animate,inView,spring,stagger } from 'motion'

export default function SectionPartners() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {

        inView('#missionText', (info) => {
          // {isMobile ? animate('.time2',{opacity:[0,1],y:[-100,-1]},{duration:3,ease:'linear'}):
          animate('#missionText',{opacity:[0,1]},{duration:2,ease:'linear'})
          // }
        })

        return inView('#partnerSection', (info) => {
          animate(
            '.partnerBox',
            { opacity: [0,1], y: [-20,0]},
            { delay: stagger(0.10) },
            {duration:4},
            {easing: spring()},
          )
          // return (leaveInfo) => {
          //   animate(elementName,
          //   { opacity: 0},
          //   )
          // }
        })


  }, [])
  //asf
const GreyBox=({children})=> {
  return(<Stack alignItems="center" justifyContent="center" sx={{background:theme.palette.primary.superLight,width:'100%',minHeight:{xs:100,sm:240},height:'100%',borderRadius:5,p:{xs:4,sm:7}}}>{children}</Stack>)
}


  return (
    <Box id="partnerSection" sx={{position:'relative'}} className="whiteBg" >
      <Rings />

        <Box sx={{p:{xs:5,sm:10}}}>
        <Box sx={{width:'100%',px:{xs:0,sm:6}}}>
        <Grid container spacing={{xs:2,sm:8}}>

        <Grid xs={12} sm={4} md={4} display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" >
          <Stack direction="column" justifyContent="center" alignItems="space-between" spacing={4} sx={{height:'100%'}} className="partnerBox" >
            <Box><Typography variant="body1" sx={{fontSize:12}}>Good Companies Head Quarters:</Typography>
            <Typography variant="h3" sx={{mb:2,fontWeight:300,lineHeight:1.4,fontSize:24}}>Working in partnership with best-in-class adviser tools </Typography>
            </Box>
            <Link href="/partners">
            <Typography variant="body1" sx={{fontSize:11,textDecoration:'underline'}}>How our partners help</Typography>
            </Link>
            </Stack>
        </Grid>
        <Grid xs={6} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
           <GreyBox>
           <Box sx={{width:'100%'}} component="img" src="/partners/analyser-bk.png" alt="Analyser" />
           </GreyBox>
           </Box>
        </Grid>
        <Grid xs={6} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
       <GreyBox>
        <Box  sx={{width:'100%'}}  component="img" src="/partners/ev-pro-bk.png" alt="Ev Pro" />
        </GreyBox>
        </Box>
        </Grid>

        </Grid>

        <Grid container spacing={{xs:2,sm:8}} sx={{mt:2}}>

        <Grid className="partnerBox" xs={6} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
        <GreyBox>
          <Box  sx={{width:'100%'}} component="img" src="/partners/fintegrate-bk.png" alt="Fintegrate" />
          </GreyBox>
          </Box>
        </Grid>
        <Grid xs={6} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
        <GreyBox>

          <Box  sx={{width:'100%'}} component="img" src="/partners/model-office.png" alt="Model Office" />
          </GreyBox>
          </Box>
        </Grid>
        <Grid xs={6} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
        <GreyBox>
          <Box  sx={{width:'100%'}} component="img" src="/partners/money-alive-bk.png" alt="Money Alive" />
          </GreyBox>
          </Box>
        </Grid>

        </Grid>
        </Box>
        <Box id="missionText" sx={{width:'100%',p:{xs:2,sm:5},py:5}}>
        <Typography variant="body1" sx={{pt:3,lineHeight:1.2,fontWeight:400,textAlign:'center',fontSize:{xs:15,sm:26,md:26}}}>We&apos;re on a mission to create a healthy new ecosystem for forward-thinking financial intermediaries </Typography>
        </Box>
        </Box>
    </Box>
  )
}
