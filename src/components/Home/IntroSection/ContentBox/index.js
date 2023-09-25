import React from 'react'
import styles from './ContentBox.module.css'
import { Box, Stack, Typography } from '@mui/material'
export default function ContentBox({title,subtitle,icon}) {
  return (
    <Stack className={styles.contentBox} direction="column" justifyContent="space-between">
      {icon=='insurance' && <Box component="img" src="insurance.png" alt="Innovative Insurance" className={styles.icon} />}
      {icon=='claims' && <Box component="img" src="claims.png" alt="Proactive Claims Support" className={styles.icon} />}
      {icon=='risk' && <Box component="img" src="risk.png" alt="Intelligent Risk Management" className={styles.icon} />}
      <Box>
        <Typography variant="h3" className={styles.title}>{title}</Typography>
        <Typography variant="body1"className={styles.subtitle}>{subtitle}</Typography>
      </Box>
    </Stack>
  )
}
