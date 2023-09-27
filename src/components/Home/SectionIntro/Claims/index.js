import React from 'react'
import SectionBody from '../SectionBody'
import { Box } from '@mui/material'


export default function Claims() {

  const pageText={
    id:'fadeInUp2',
    image:'/circleclaims.png',
    difference:'What\'s different about BareRock Claims?',
    heading:'Claims',
    subHeading:'Proactive complaint handling',
    intro:"We understand it can be difficult to receive a complaint, but if you do, we’re here to support you through the process in a truly collaborative way. BareRock Claims is structured to work proactively alongside you as your supportive advocate, helping to guide you to a positive, timely client resolution. We’re here to give you support when you need it the most."
  }
const textLinks = [
  {
    text: <Box component="span">Expert guidance on how to approach complaints & claims</Box>
  }
,
{
  text:<Box component="span">Proactive support focused on reaching a positive resolution.</Box>
}
,
{
  text:<Box component="span">A constructive & supportive advocate</Box>
}
,
{
  text:<Box component="span">Working in collaboration with Reynolds Porter Chamberlain (RPC) LLC</Box>
}

]

return (
  <SectionBody pageText={pageText} textLinks={textLinks}  />
)
}
