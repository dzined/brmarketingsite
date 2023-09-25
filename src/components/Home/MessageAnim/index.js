import React from 'react'
import { Box,Typography,Stack } from '@mui/material'
import styles from './MessageAnim.module.css'
import AnimatedText from './AnimatedText'
export default function MessagingAnim() {



  return (
    <Stack id="messagingAnim" direction="column" justifyContent="center" className={styles.messageAnim} >
    <Typography variant="h3" gutterBottom >Isn&apos;t it time</Typography>
    <section>
      <AnimatedText />
    {/*  */}
    </section>
</Stack>
  )
}
