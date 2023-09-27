import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'
// import PartnersStrip from '../PartnersStrip'
export default function AltFooter() {
  return (
    <Box sx={{
      background: '#1b1b33',
      padding: {xs:'1rem',sm:'5rem'},
      width: '100%'
    }}>
   {/* <PartnersStrip /> */}
     {/* <Box className={styles.separator} /> */}
      <Grid container sx={{width:'100%'}}>
        <Grid item xs={12} sm={6}>
          {/* <Stack direction={{xs:'row',sm:'column'}} spacing={2} sx={{p:{xs:2,sm:0}}}> */}
          <img src="/brlogowhite.png" alt="BareRock" style={{width:'100%',maxWidth:'224px'}} />
          {/* </Stack> */}
        </Grid>
        <Grid item xs={12} sm={6} sx={{textAlign:'right'}}>
        {/* <Stack direction={{xs:'row',sm:'column'}} spacing={2} sx={{p:{xs:2,sm:0}}}> */}
          <img src="/consumer-alliance.png" alt="Consumer Alliance" style={{width:'100%',maxWidth:'30px'}} />
          {/* </Stack> */}
        </Grid>

      </Grid>
      <Grid container className={styles.legalText} sx={{p:{xs:2,sm:0}}}>
        <Grid item xs={12} sm={9}>
          <Typography variant="body1">BareRock Limited is an appointed representative of IFAPROSURE Limited which is authorised and regulated by the Financial Conduct Authority.</Typography>
          <Typography variant="body1">
            Our registered address is: 22 Awford House, 43-45 Rectory Grove, Leigh-On-Sea, England, SS9 2HA. Our company is registered in England and Wales No: 12667957.

            BareRock Limited is entered on the Financial Services register under reference 950684
          </Typography>
        </Grid>
        <Grid item  xs={12} sm={3}>
          <Typography variant="body1">© 2023 BareRock Limited</Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item  xs={12} sm={3}>
        <Stack direction={{xs:'row',sm:'row'}} sx={{p:{xs:2,sm:0}}} className={styles.legalLinks}>
              <li>
                <Link href="/legal/terms-of-use">Terms of use</Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
              </li>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
