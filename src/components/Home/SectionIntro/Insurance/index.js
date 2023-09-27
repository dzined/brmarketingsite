import React from 'react'
import SectionBody from '../SectionBody'
import { Box } from '@mui/material'

export default function Insurance() {

  const pageText={
    id:'fadeInUp1',
    image:'/circleinsurance.png',
    difference:'What\'s different?',
    heading:'Insurance',
    subHeading:'PII. Reimagined.',
    intro:" The way you do business is constantly evolving. It's time your PI insurance did too. We've rewritten PI insurance from the ground up, carefully creating a revolutionary new Direct to Consumer PI service tailored specifically for top tier financial advisers and planners."
  }
const textLinks = [
  {
    text: <Box component="span">A revolutionary ratings model that <strong>bases your premium on the good work your company&apos;s doing</strong>, not industry averages.</Box>
  }
,
{
  text:<Box component="span">An easy to use, <strong>fully online application form</strong> that asks the right questions so the&apos;s no longer the need to prepare lengthy supporting documents for your PI insurance application.</Box>
}
,
{
  text:<Box component="span">Entirely <strong>new policy wording</strong>, written by our experts who have worked hand in hand with Financial Intermediaries for decades.
  </Box>
}
,
{
  text:<Box component="span"><strong>Deal directly</strong> with us as your insurance provider.</Box>
}

]


  return (
    <SectionBody pageText={pageText} textLinks={textLinks}  />
  )
}
