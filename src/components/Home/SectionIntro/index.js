import GradientButton from '@/components/Widgets/GradientButton'
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import CircleCheck from 'src/assets/icons/CircleCheck'
import Insurance from './Insurance'
import Claims from './Claims'
import Risk from './Risk'

export default function SectionIntro() {
  return (
    <Box>

      <Stack direction="row" alignItems="center" className=" whiteBg padded">

        <Box component={'img'} src="/flywheel.png" sx={{width:400}} />
        <Insurance />


      </Stack>
      <Stack direction="row" alignItems="center" className=" whiteBg padded">

<Box component={'img'} src="/flywheel.png" sx={{width:400}} />

<Claims />


</Stack>
<Stack direction="row" alignItems="center" className=" whiteBg padded">

<Box component={'img'} src="/flywheel.png" sx={{width:400}} />

<Risk />

</Stack>
    </Box>
  )
}
