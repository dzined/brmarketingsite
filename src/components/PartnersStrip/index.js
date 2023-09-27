import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import Link from 'next/link'
import partners from '@/data/partners'
import styles from './PartnersStrip.module.css'
export default function PartnersStrip() {




  return (
    <Stack direction="column" alignItems="center" spacing={6}justifyContent="center">
    <Stack direction="column" alignItems="center" spacing={2}>
    <Typography variant="h4" className={styles.partnership}>Working in partnership with:</Typography>
    <Button className={styles.clearButton}>How our partners can help you</Button>
    </Stack>
   <Stack direction="row" spacing={5} justifyContent="space-evenly" alignItems="center" className={styles.partners}>
     {partners.map((partner,index) => (
      <Link href={partner.url} key={index}>
       <img src={partner.logo} alt={partner.name} />
     </Link>
     ))}


   </Stack>
   </Stack>
  )
}
