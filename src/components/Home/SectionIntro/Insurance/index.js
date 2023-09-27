import React from 'react'
import { Stack, Typography } from '@mui/material'
import GradientButton from '@/components/Widgets/GradientButton'
import CircleCheck from '@/icons/CircleCheck'

export default function Insurance() {
  return (
    <Stack direction="column">
          <Typography variant="h2">Insurance</Typography>
          <Typography className="gradientText" variant="body2">PII. Reimagined.</Typography>
          <Typography variant="body1" sx={{fontSize:12}}>
          The way you do business is constantly evolving. It&apos;s time your PI insurance did too. We&apos;ve rewritten PI insurance from the ground up, carefully creating a revolutionary new Direct to Consumer PI service tailored specifically for top tier financial advisers and planners.
          </Typography>
          <Typography variant="h3"  sx={{fontSize:12,fontWeight:600}}>What&apos;s different? </Typography>
          {/* List */}
          <Stack direction="column" spacing={1} sx={{mb:4}}>
            <Stack direction="row"  spacing={1}>
              <CircleCheck sx={{fontSize:20}} />
              <Typography variant="body1" sx={{fontSize:12}} >A revolutionary ratings model that <strong>bases your premium on the good work your company&apos;s doing</strong>, not industry averages.</Typography>
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
          <GradientButton  text={"Register your interest"} />
      </Stack>
  )
}
