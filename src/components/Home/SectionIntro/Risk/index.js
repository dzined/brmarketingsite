import React, { useEffect } from 'react'
import { Stack, Typography,useMediaQuery,useTheme ,Box} from '@mui/material'
// import GradientButton from '@/components/Widgets/GradientButton'
import CircleCheck from '@/icons/CircleCheck'
import {animate,inView} from 'motion'
export default function Risk() {
  const theme = useTheme();
  useEffect(() => {
    inView('.fadeInUp3', (info) => {
      animate('.fadeInUp3',{opacity:[0,1],y:[-20,0]},{duration:2,ease:'linear'})
      // return (leaveInfo) => {
      //    animate('.fadeInUp',{opacity:[1,0],y:[0,-20]},{duration:2,ease:'linear'})
      // }

    })

  },[])
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <Stack className="fadeInUp3" direction="column" alignItems={{xs:'flex-start'}}>
     {isMobile ?
 <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{mb:2}}>
    <Box component={'img'} src="/circlerisk.png" sx={{width:'100%',maxWidth:30}} />
    <Typography variant="h2" sx={{fontWeight:400,my:0}}>Risk</Typography>
 </Stack>
 :
 <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} sx={{mb:2}}>
    <Box component={'img'} src="/circlerisk.png" sx={{width:'100%',maxWidth:50}} />
    <Typography variant="h2" sx={{fontWeight:200,my:0}}>Risk</Typography>
 </Stack>
 }
          <Typography className="gradientText" variant="body2" sx={{fontSize:{xs:16,sm:20}}}>Intelligent risk assessment
</Typography>
          <Typography variant="body1" sx={{fontSize:12}}>
          Our mission is to disentangle the risk management process. We help you analyse and de-risk your organisation to give you a fairer, intelligent and more personalised alternative to legacy providers. Our specialists have developed cutting edge tools that will put you back in the driver’s seat and enable you to gain access to PI insurance.

          </Typography>

          <Typography variant="h3"   sx={{mb:{xs:1,sm:2},fontSize:{xs:14,sm:12},fontWeight:600}}>What’s different about BareRock Risk Management?
 </Typography>
          {/* List */}
          <Stack direction="column" spacing={1} sx={{mb:4}}>
            <Stack direction="row"  spacing={1}>
          <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1" sx={{fontSize:12}} >Revolutionary frame</Typography>
            </Stack>

            <Stack direction="row"   spacing={1}>
          <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1"  sx={{fontSize:12}}>An easy to use, <strong>fully online application form</strong> that asks the right questions so there&apos;s no longer the need to prepare lengthy supporting documents for your PI insurance application.</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
          <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1"  sx={{fontSize:12}}>Entirely <strong>new policy wording</strong>, written by our experts who have worked hand in hand with Financial Intermediaries for decades.
              </Typography>
            </Stack>

            <Stack direction="row"   spacing={1} >
          <CircleCheck sx={{fontSize:{xs:16,sm:20}}} />
              <Typography variant="body1"  sx={{fontSize:12}}><strong>Deal directly</strong> with us as your insurance provider.</Typography>
            </Stack>
          </Stack>

      </Stack>
  )
}
