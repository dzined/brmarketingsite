import React from 'react'
import { Stack, Typography } from '@mui/material'
import GradientButton from '@/components/Widgets/GradientButton'
import CircleCheck from '@/icons/CircleCheck'

export default function Risk() {
  return (
    <Stack direction="column">
          <Typography variant="h2">Risk Management</Typography>
          <Typography className="gradientText" variant="body2">Intelligent risk assessment
</Typography>
          <Typography variant="body1" sx={{fontSize:12}}>
          Our mission is to disentangle the risk management process. We help you analyse and de-risk your organisation to give you a fairer, intelligent and more personalised alternative to legacy providers. Our specialists have developed cutting edge tools that will put you back in the driver’s seat and enable you to gain access to PI insurance.

          </Typography>
          <Typography variant="h3"  sx={{fontSize:12,fontWeight:600}}>What’s different about BareRock Risk Management?
 </Typography>
          {/* List */}
          <Stack direction="column" spacing={1} sx={{mb:4}}>
            <Stack direction="row"  spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1" sx={{fontSize:12}} >Revolutionary frame</Typography>
            </Stack>

            <Stack direction="row"   spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1"  sx={{fontSize:12}}>An easy to use, <strong>fully online application form</strong> that asks the right questions so there&apos;s no longer the need to prepare lengthy supporting documents for your PI insurance application.</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1"  sx={{fontSize:12}}>Entirely <strong>new policy wording</strong>, written by our experts who have worked hand in hand with Financial Intermediaries for decades.
              </Typography>
            </Stack>

            <Stack direction="row"   spacing={1} >
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1"  sx={{fontSize:12}}><strong>Deal directly</strong> with us as your insurance provider.</Typography>
            </Stack>
          </Stack>

      </Stack>
  )
}
