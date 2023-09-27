import React from 'react'
import { Stack, Typography } from '@mui/material'
import GradientButton from '@/components/Widgets/GradientButton'
import CircleCheck from '@/icons/CircleCheck'

export default function Claims() {
  return (
    <Stack direction="column">
          <Typography variant="h2">Claims</Typography>
          <Typography className="gradientText" variant="body2">Proactive complaint handling
</Typography>
          <Typography variant="body1" sx={{fontSize:12}}>

We understand it can be difficult to receive a complaint, but if you do, we’re here to support you through the process in a truly collaborative way. BareRock Claims is structured to work proactively alongside you as your supportive advocate, helping to guide you to a positive, timely client resolution. We’re here to give you support when you need it the most.

          </Typography>
          <Typography variant="h3"  sx={{fontSize:12,fontWeight:600}}>What’s different about BareRock Claims?
 </Typography>
          {/* List */}
          <Stack direction="column" spacing={1} sx={{mb:4}}>
            <Stack direction="row"  spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1" sx={{fontSize:12}} >Expert guidance on how to approach complaints & claims
</Typography>
            </Stack>

            <Stack direction="row"   spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1"  sx={{fontSize:12}}>Proactive support focused on reaching a positive resolution .</Typography>
            </Stack>

            <Stack direction="row" spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1"  sx={{fontSize:12}}>A constructive & supportive advocate

              </Typography>
            </Stack>

            <Stack direction="row"   spacing={1} >
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1"  sx={{fontSize:12}}>Working in collaboration with Reynolds Porter Chamberlain (RPC) LLC </Typography>
            </Stack>
          </Stack>
          {/* <GradientButton  text={"Reg"} /> */}
      </Stack>
  )
}
