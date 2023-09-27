import GradientButton from '@/components/Widgets/GradientButton'
import { Box, Button, Stack, Typography,useMediaQuery,useTheme } from '@mui/material'
import React from 'react'
import CircleCheck from 'src/assets/icons/CircleCheck'
import Insurance from './Insurance'
import Claims from './Claims'
import Risk from './Risk'

export default function SectionIntro() {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <Box>
        {/* {isMobile && <Box className=" whiteBg"><Box component={'img'} src="/flywheel.png" sx={{width:'100%',maxWidth:400}} /></Box>} */}
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
    </Box>
  )
}
