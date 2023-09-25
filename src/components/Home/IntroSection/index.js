import React from 'react'
import { Box,Typography,Stack } from '@mui/material'
import ContentBox from '@/components/Home/IntroSection/ContentBox'
import styles from './IntroSection.module.css'
import Ants from './Ants'
export default function IntroSection() {
  return (
    <Stack direction="column" spacing={3} alignItems="flex-start" justifyContent="" className={styles.introPanel} >
    <Typography variant="h2" component="h2" gutterBottom >Introducing BareRock</Typography>
    <Typography variant="body1" className={styles.maxWrap}>We’ve revolutionised Professional Indemnity Insurance for Financial Advisers and Planners</Typography>
    <Ants />
    <Stack direction="row" spacing={5} sx={{width:'100%'}}>

      <ContentBox title="Innovative" icon="insurance" subtitle="PI Insurance" />
      <ContentBox title="Proactive" icon="claims" subtitle="Claims Support" />
      <ContentBox title="Intelligent" icon="risk" subtitle="Risk Management" />
    </Stack>
    {/* <svg width="600" height="100">

  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f00"/>
      <stop offset="50%" stop-color="#ff0"/>
      <stop offset="100%" stop-color="#00f"/>
    </linearGradient>
  </defs>

  <line x1="0" y1="50" x2="600" y2="50" stroke="url(#gradient)" stroke-width="10"
    stroke-dasharray="5,5" stroke-dashoffset="0">
    <animate attributeName="stroke-dashoffset" from="0" to="-30" dur="3s" repeatCount="indefinite"/>
  </line>

  </svg> */}
  </Stack>
  )
}
