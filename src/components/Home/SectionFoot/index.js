import { Box, Stack } from '@mui/material'
import React from 'react'
import Stats from '../Stats'
import GradientButton from '@/components/Widgets/GradientButton'
import ReminderBox from '@/components/Widgets/ReminderBox'
import GoodCompanies from '@/components/Widgets/GoodCompanies'
import { useTheme } from '@mui/material'
export default function SectionFoot() {
  const theme=useTheme()
  return (
    <Box sx={{background:theme.palette.primary.superLight}}>
      <Stack alignItems="center" justifyContent="center" sx={{p:{xs:4,sm:8},pb:{xs:6,sm:8}}}>
        <Stats />
        <Box sx={{mb:5}} />
        <GradientButton text="Register your Interest" />
        <Box sx={{mb:5}} />
        <Box sx={{mb:-20}}>
          <ReminderBox />
        </Box>
      </Stack>
      <GoodCompanies />
    </Box>
  )
}
