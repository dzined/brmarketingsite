import { Button, Typography,Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { animate ,spring,inView,stagger,timeline} from "motion"
export default function ReminderBox() {
  useEffect(() => {
    inView('#reminderBox', (info) => {
    animate(".object", { opacity: [0,1] }, { duration:2,delay: stagger(0.1) })

    // return (leaveInfo) => {
    //   animate('.object',
    //   { opacity: 0},
    //   )
    // }
  })

  },[])
  return (
    <Stack id="reminderBox" spacing={3} sx={{width:'100%',p:{xs:4,sm:4},borderRadius:5}} direction="column" alignItems="center" justifyContent="center" className="gradientBackground">
      <Typography className="object" sx={{fontSize:{xs:20,sm:30},fontWeight:500}}>Want to be reminded nearer renewal?</Typography>
      <Typography className="object" sx={{fontSize:{xs:13,sm:15},textAlign:{xs:'left',sm:'center'}}}>If you&apos;d like to explore the benefits BareRock can bring but still have time on your current policy, <strong>we can remind you nearer your renewal</strong>. Simply let us know your details and we&apos;ll get in touch when the time&apos;s right.</Typography>
      <Button  className="object" sx={{px:5,borderRadius:5,border:'1px solid #FFF',color:'#FFF',background:'transparent'}} variant="outline" >Send me a reminder</Button>
    </Stack>
  )
}
