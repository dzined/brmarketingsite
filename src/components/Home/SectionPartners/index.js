import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { useTheme } from '@mui/material';
import { useEffect } from 'react';
import {fadeIn, fadeInStagger} from '@/helpers/animation'
import Rings from '@/components/Widgets/Rings';
export default function SectionPartners() {
  useEffect(() => {
    fadeInStagger('missionText','.partnerBox',3)
    fadeIn('missionText',3,3)
  }, [])
  //asf
const GreyBox=({children})=> {
  return(<Stack alignItems="center" justifyContent="center" sx={{background:theme.palette.primary.superLight,width:'100%',minHeight:240,height:'100%',borderRadius:5,p:7}}>{children}</Stack>)
}


  const theme=useTheme();
  return (
    <Box id="partnerSection" sx={{position:'relative'}} className="whiteBg" >
      <Rings />
      <Box className="curvedSectionWhiteReverse" />

        <Box sx={{p:{xs:10,sm:40}}}>
        <Box sx={{width:'100%',px:{xs:0,sm:6}}}>
        <Grid container spacing={8}>

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
        <Grid xs={12} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
           <GreyBox>
           <Box sx={{width:'100%'}} component="img" src="/partners/analyser-bk.png" alt="Analyser" />
           </GreyBox>
           </Box>
        </Grid>
        <Grid xs={12} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
       <GreyBox>
        <Box  sx={{width:'100%'}}  component="img" src="/partners/ev-pro-bk.png" alt="Ev Pro" />
        </GreyBox>
        </Box>
        </Grid>

        </Grid>

        <Grid container spacing={8} sx={{mt:2}}>

        <Grid className="partnerBox" xs={12} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
        <GreyBox>
          <Box  sx={{width:'100%'}} component="img" src="/partners/fintegrate-bk.png" alt="Fintegrate" />
          </GreyBox>
          </Box>
        </Grid>
        <Grid xs={12} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
        <GreyBox>

          <Box  sx={{width:'100%'}} component="img" src="/partners/model-office.png" alt="Model Office" />
          </GreyBox>
          </Box>
        </Grid>
        <Grid xs={12} sm={4} md={4} display="flex" justifyContent="center" alignItems="center">
        <Box  className="partnerBox" >
        <GreyBox>
          <Box  sx={{width:'100%'}} component="img" src="/partners/money-alive-bk.png" alt="Money Alive" />
          </GreyBox>
          </Box>
        </Grid>

        </Grid>
        </Box>
        <Box id="missionText" sx={{width:'100%',p:{xs:3,sm:15},py:5}}>
        <Typography variant="body1" sx={{pt:3,lineHeight:1.2,fontWeight:400,textAlign:'center',fontSize:{xs:20,sm:26,md:26}}}>We&apos;re on a mission to create a healthy new ecosystem for forward-thinking financial intermediaries </Typography>
        </Box>
        </Box>
    </Box>
  )
}
