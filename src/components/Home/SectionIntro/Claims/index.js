import React, { useEffect } from 'react'
import { Stack, Typography,useMediaQuery,useTheme ,Box} from '@mui/material'
import GradientButton from '@/components/Widgets/GradientButton'
import CircleCheck from '@/icons/CircleCheck'
import {animate,inView} from 'motion'

export default function Claims() {
  const theme = useTheme();
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  useEffect(() => {
    inView('.fadeInUp2', (info) => {
      animate('.fadeInUp2',{opacity:[0,1],y:[-20,0]},{duration:2,ease:'linear'})
      // return (leaveInfo) => {
      //    animate('.fadeInUp',{opacity:[1,0],y:[0,-20]},{duration:2,ease:'linear'})
      // }

    })

  },[])
  return (
    <Stack className="fadeInUp2" direction="column" alignItems={{xs:'flex-start'}}>
       {isMobile ?
 <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{mb:2}}>
    <Box component={'img'} src="/circleinsurance.png" sx={{width:'100%',maxWidth:30}} />
    <Typography variant="h2" sx={{fontWeight:400,my:0}}>Claims</Typography>
 </Stack>
 :
 <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{mb:2}}>
    <Box component={'img'} src="/circleclaims.png" sx={{width:'100%',maxWidth:50}} />
    <Typography variant="h2" sx={{fontWeight:200,my:0}}>Claims</Typography>
 </Stack>
 }
          <Typography className="gradientText" variant="body2" sx={{fontSize:{xs:16,sm:20}}}>Proactive complaint handling
</Typography>
          <Typography variant="body1" sx={{fontSize:12}}>

We understand it can be difficult to receive a complaint, but if you do, we’re here to support you through the process in a truly collaborative way. BareRock Claims is structured to work proactively alongside you as your supportive advocate, helping to guide you to a positive, timely client resolution. We’re here to give you support when you need it the most.

          </Typography>
          <Typography variant="h3"   sx={{mb:{xs:1,sm:2},fontSize:{xs:14,sm:12},fontWeight:600}}>What’s different about BareRock Claims?
 </Typography>
          {/* List */}
          <Stack direction="column" spacing={1} sx={{mb:4}}>
            <Stack direction="row"  spacing={1}>
             <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1" sx={{fontSize:12}} >Expert guidance on how to approach complaints & claims
</Typography>
            </Stack>

            <Stack direction="row"   spacing={1}>
             <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1"  sx={{fontSize:12}}>Proactive support focused on reaching a positive resolution .</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
             <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1"  sx={{fontSize:12}}>A constructive & supportive advocate

              </Typography>
            </Stack>

            <Stack direction="row"   spacing={1} >
             <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1"  sx={{fontSize:12}}>Working in collaboration with Reynolds Porter Chamberlain (RPC) LLC </Typography>
            </Stack>
          </Stack>
          {/* <GradientButton  text={"Reg"} /> */}
      </Stack>
  )
}
