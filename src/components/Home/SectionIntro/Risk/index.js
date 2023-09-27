import React from 'react'
import SectionBody from '../SectionBody'
import { Box } from '@mui/material'

export default function Risk() {

  const pageText={
    id:'fadeInUp3',
    image:'/circlerisk.png',
    difference:'What’s different about BareRock Risk Management??',
    heading:'Risk Management',
    subHeading:'Intelligent risk assessment',
    intro:"Our mission is to disentangle the risk management process. We help you analyse and de-risk your organisation to give you a fairer, intelligent and more personalised alternative to legacy providers. Our specialists have developed cutting edge tools that will put you back in the driver’s seat and enable you to gain access to PI insurance."
  }
const textLinks = [
  {
    text: <Box component="span">Revolutionary frame</Box>
  }
,
{
  text:<Box component="span">Revolutionary frame.</Box>
}
,
{
  text:<Box component="span">Revolutionary frame</Box>
}
,
{
  text:<Box component="span">Revolutionary frame</Box>
}

]




return (
  <SectionBody pageText={pageText} textLinks={textLinks}  />
)
}
