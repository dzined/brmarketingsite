import theme from '@/styles/theme'
import { Box, Stack, Typography, Unstable_Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import {fadeIn} from '@/helpers/animation'
import PracticeBox from './PracticeBox'
import PetriDish from './PetriDish'
import Laptop from './Laptop'
import SplitType from 'split-type'
import {animate,stagger} from 'motion'
import Typist from 'react-typist';
import RatingModel from './RatingModel'
import RingsLeft from '@/components/Widgets/Rings/Left'

export default function SectionTime() {
  useEffect(() => {
    // fadeIn('sectionTime',1)
    // const itsTime = document.querySelector('.itsTime')
    // console.log("itsTime",itsTime)
      // const heading = new SplitType("#itsTime",{types:'words'})
      // const heroElements = [...heading.words];
      // animate(heroElements,{opacity:[0,1],y:[24,0]},{duration:0.8,delay:stagger(0.05)})
    // const animateText= newSplitType('.itsTimes',{types:'words'})

  },[])
  return (
    <Box sx={{background:theme.palette.primary.navy,position:'relative'}}>
            <RingsLeft />

      <Box className="curvedSectionWhiteTop paddedXl" />
    <Box className="" sx={{p:{xs:10,sm:40}}} >

      <Box sx={{px:{xs:0,sm:7}}}>
    <Stack sx={{width:'100%',height:150}} />
      {/* Good Practice */}
      <Unstable_Grid2 container spacing={5}>

        <Unstable_Grid2 xs={12} sm={6} alignItems={'center'} display="flex">
        <Stack direction="column" alignItems="flex-start" justifyContent="flex-start" >
        <Typography variant="body1"  className="gradientText " sx={{letterSpacing:1}}>it&apos;s time</Typography>

          <Typography variant="body1"sx={{lineHeight:1.2,fontSize:{xs:40,sm:35},fontWeight:200}} >your premium is based on <strong style={{fontWeight:500}}>your company&apos;s good practice</strong>, not industry averages</Typography>
          <Typography  id="itsTime"  variant="body1"sx={{fontSize:12,mt:4}} > your premium is based on We&apos;ve created a new rating model that&apos;s better suited to top-tier businesses. It places more emphasis on your company&apos;s processes and less on what the rest of the market&apos;s doing, meaning your premium more closely reflects the good work you do.</Typography>

        </Stack>
        </Unstable_Grid2>
        <Unstable_Grid2  spacing={5} xs={12} sm={6} alignItems={'center'} display="flex">
        <RatingModel />
        </Unstable_Grid2>
      </Unstable_Grid2>
      <Stack sx={{width:'100%',height:250}} />
      {/* Online Form */}
      <Unstable_Grid2 container  id="sectionTime">
      <Unstable_Grid2  spacing={5} xs={12} sm={6} alignItems={'center'} display="flex">
      <Laptop />
        </Unstable_Grid2 >
        <Unstable_Grid2 xs={12} sm={6} alignItems={'center'} display="flex">
          <Stack direction="column" alignItems="flex-start" justifyContent="flex-start" >

            <Typography variant="body1" className="gradientText" sx={{letterSpacing:1}}>it&apos;s time</Typography>
            <Typography variant="body1" sx={{lineHeight:1.2,fontSize:{xs:40,sm:35},fontWeight:200}}  >For the PI insurance application & renewal process to  <strong style={{fontWeight:500}}>feel easier</strong></Typography>
            <Typography variant="body1"sx={{fontSize:12,mt:4}} >A revolutionary insurance product calls for a revolutionary application process. We’ve developed an entirely new application form so you can apply for and manage your policy online. Gone are the days of supplying numerous supporting documents to help give context to your business activities, our behaviourally designed online application asks you the right questions while feeling easy to complete.</Typography>
          </Stack>
        </Unstable_Grid2>
      </Unstable_Grid2>
      <Stack sx={{width:'100%',height:150}} />

      {/* Safeguarded */}
      <Unstable_Grid2 container id="sectionProtect">
      <Unstable_Grid2  spacing={5} xs={12} sm={6} alignItems={'center'} display="flex">

        <Stack direction="column" alignItems="flex-start" justifyContent="flex-start" >
        <Typography  variant="body1" className="gradientText" sx={{letterSpacing:1}}>it&apos;s time</Typography>
          <Typography  variant="body1" sx={{lineHeight:1.2,fontSize:{xs:20,sm:35},fontWeight:200}}  >You have <strong style={{fontWeight:500}}>comfort</strong> in the knowledge you&apos;re safeguarded alongside <strong style={{fontWeight:500}}>other like-minded firms</strong> </Typography>
          <Typography  variant="body1"sx={{fontWeight:300,fontSize:12,mt:4}} >Just as you have robust processes in your business, we have robust processes in BareRock to make sure the firms we insure can show they&apos;re delivering good outcomes for their clients. This is delivered via the in-depth checks throughout the application process, through to BareRock Risk Management working with firms to support and guide them through their activities. If you&apos;re insured by BareRock, you can rest assured you&apos;re in good company with like-minded firms.</Typography>
        </Stack>
        </Unstable_Grid2>
        <Unstable_Grid2  spacing={5} xs={12} sm={6} alignItems={'center'} display="flex">
          <Box sx={{pl:6,pt:4}}>
          <PetriDish />
          </Box>
{/* <PracticeBox /> */}
        {/* <Box component="img" src="/time-3.png" sx={{width:'100%',maxWidth:400}} alt="Good Practice" /> */}
        </Unstable_Grid2>
      </Unstable_Grid2>
      <Stack sx={{width:'100%',height:150}} />
    </Box>
    </Box>
    </Box>
  )
}
