import GradientButton from '@/components/Widgets/GradientButton'
import { Box, Button, Stack, Typography,useTheme,useMediaQuery, Tabs, Tab, AccordionDetails, Accordion, AccordionSummary } from '@mui/material'
import React from 'react'
import CircleCheck from 'src/assets/icons/CircleCheck'
import Insurance from './Insurance'
import Claims from './Claims'
import Risk from './Risk'
// import { Swiper, SwiperSlide } from 'swiper/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// // Import Swiper styles
// import 'swiper/css';
export default function SectionIntro() {
const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));



  return (
    <Box sx={{background:'#FFF'}}>
        {/* {isMobile && <Box className=" whiteBg"><Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} /></Box>} */}
      {isMobile ?
      <>
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1} sx={{mb:0}}>
          <Box component={'img'} src="/circleinsurance.png" sx={{width:'100%',maxWidth:20}} />
          <Typography variant="h2" sx={{fontSize:20,fontWeight:300,my:0}}>Insurance</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
      <Stack direction={{xs:'row',sm:'row'}} sx={{p:{xs:4,sm:6},pb:{xs:2,sm:6}}} alignItems="center" className=" whiteBg">
      {isMobile ? null: <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />}
      <Insurance />
      </Stack>
      </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
          <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1} sx={{mb:0}}>
          <Box component={'img'} src="/circleclaims.png" sx={{width:'100%',maxWidth:20}} />
          <Typography variant="h2" sx={{fontSize:20,fontWeight:300,my:0}}>Claims</Typography>
        </Stack>
        </AccordionSummary>
        <AccordionDetails>
      <Stack direction={{xs:'column',sm:'row'}} sx={{p:{xs:4,sm:6},pb:{xs:2,sm:6}}} alignItems="center" className=" whiteBg ">
      {/* {isMobile ? <Box component={'img'} src="/circleclaims.png" sx={{width:'100%',maxWidth:200}} />:
      <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />} */}
        {isMobile ? null: <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />}
      <Claims />
      </Stack>
      </AccordionDetails>
      </Accordion>

      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
  <Stack direction="row" alignItems="center" justifyContent="flex-start" spacing={1} sx={{mb:0}}>
          <Box component={'img'} src="/circlerisk.png" sx={{width:'100%',maxWidth:20}} />
          <Typography variant="h2" sx={{fontSize:20,fontWeight:300,my:0}}>Risk Management</Typography>
        </Stack>
        </AccordionSummary>
            <AccordionDetails>
      <Stack direction={{xs:'column',sm:'row'}} sx={{p:{xs:4,sm:6},pb:{xs:2,sm:6}}} alignItems="center" className=" whiteBg ">
      {isMobile ? null: <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />}
      <Risk />
      </Stack>
      </AccordionDetails>
      </Accordion>
      </>
      :
      <>

      <Stack direction={{xs:'column',sm:'row'}} sx={{p:{xs:4,sm:6},pb:{xs:2,sm:6}}} alignItems="center" className=" whiteBg">
      {isMobile ? null: <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />}
      <Insurance />
      </Stack>

      <Stack direction={{xs:'column',sm:'row'}} sx={{p:{xs:4,sm:6},pb:{xs:2,sm:6}}} alignItems="center" className=" whiteBg ">
      {/* {isMobile ? <Box component={'img'} src="/circleclaims.png" sx={{width:'100%',maxWidth:200}} />:
      <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />} */}
        {isMobile ? null: <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />}
      <Claims />
      </Stack>

      <Stack direction={{xs:'column',sm:'row'}} sx={{p:{xs:4,sm:6},pb:{xs:2,sm:6}}} alignItems="center" className=" whiteBg ">
      {isMobile ? null: <Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} />}
      <Risk />
      </Stack>
      </>}

    </Box>
  )
}
