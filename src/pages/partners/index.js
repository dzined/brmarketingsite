import GeneralWrapper from '@/components/Layouts/GeneralWrapper'
import Rings from '@/components/Widgets/Rings';
import RingsLeft from '@/components/Widgets/Rings/Left';
import StyledModal from '@/components/Widgets/StyledModal';
import WhiteModal from '@/components/Widgets/WhiteModal';
import { fadeInDown } from '@/helpers/animation';
import Circle from '@/icons/Circle';
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography,useTheme } from '@mui/material'
import {inView, animate,stagger,spring,timeline } from 'motion';
import React, { useEffect } from 'react'
const GreyBox=({children})=> {
  const theme=useTheme();
  return(<Stack alignItems="center" justifyContent="center" sx={{position:'relative',background:'#FFF',width:'100%',height:'100%',borderRadius:5,p:3}}>{children}</Stack>)
}

export default function Partners() {

    useEffect(() => {
    inView('#partnerCase', (info) => {
    const sequence= [
      // [
      //   '.whiteBox',
      //   { height: [0,'100vh']},

      //   {duration:2,easing: spring()},
      // ],
      [
        '.partners',
        { opacity: [0,1]},
        {delay:stagger(0.2)},
        {duration:3,easing: spring()},
      ],[
        '.partnerBox',
        { opacity: [0,1],scale: [0.5,1]},
        {delay:stagger(0.5)},
        {duration:3},
      ]
    ]
    timeline(sequence, { repeat:0})
  })




  },[])


const partners=[
{
  'name':'Analyser',
  'purpose':'Investment platform and MPS due diligence',
  'logo':'/partners/analyser-bk.png',
  'intro': 'Analyser is a software platform that helps financial advisers and mortgage brokers to deliver better outcomes for their clients. It does this by providing a range of tools that help advisers to analyse their clients’ financial situation, and then to make recommendations based on their needs.',
  'description': <>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
  Analyser is a software platform that helps financial advisers and mortgage brokers to deliver better outcomes for their clients. It does this by providing a range of tools that help advisers to analyse their clients’ financial situation, and then to make recommendations based on their needs.
  </Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
Analyser’s dataset is continuously maintained with input from the platforms and MPS providers themselves. The system can’t be gamed by anyone, so advisers and planners get the cold, hard facts they need to compare a huge range of different features in a fair and objective way. As well as analysing platforms, advisers and planners can interrogate MPS data in different ways to create everything from quick comparisons to full due diligence reports, automatically documenting the process to demonstrate compliance with regulations. Alongside the interactive suitability tool, Analyser subscribers also gain exclusive access to regular content, insight and publications from the lang cat to keep them up to speed with industry developments.</Typography>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
‘Investment platform and MPS due diligence’
Analyser uses the lang cat’s experience, data and methodology to give adviser firms a logic-driven audit trail matching platforms and MPS providers with the needs of target client segments. This gives the firm the ability to assess their use of platform and investment portfolios quickly and robustly in a way which meets regulatory requirements.
</Typography>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
This consistency and independence of data avoids firms having advisers select platforms and investments which are not suitable for clients based on ‘status quo bias’. This reduces PII risk due to having robust independent evidence to support product selection.
</Typography>

  </>,
},
{
  'name':'What EV does',
  'purpose':'Pension risk stress-testing',
  'logo':'/partners/ev-pro-bk.png',
  'intro':'EV is one of the UK’s market-leading digital financial planning solutions providers. Connecting and empowering their intermediary financial partners with intuitive, customer-centric advice and guidance software and investment solutions, EV has an impressive track record in developing engaging tools designed to help financial advisers and their clients navigate the complexities of financial markets.',
  'description': <>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>EV is one of the UK’s market-leading digital financial planning solutions providers. Connecting and empowering their intermediary financial partners with intuitive, customer-centric advice and guidance software and investment solutions, EV has an impressive track record in developing engaging tools designed to help financial advisers and their clients navigate the complexities of financial markets. The focus is on delivering simplified financial planning and enabling clarity over investment options, cashflow forecasting and aligned client risk profiles.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>With their proprietary market-leading stochastic asset model providing the engine, EV’s powerful calculations and strategic multi-asset allocations are used globally across the financial ecosystem by financial advisers, pension and platform providers, asset managers, banks and building societies.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}></Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}></Typography>

  </>
}
,
{
  'name':'Fintegrate',
  'purpose':'Investment proposition assessment',
  'logo':'/partners/fintegrate-bk.png',
  'intro':'Fintegrate tackles crucial laborious and time-consuming areas of the adviser firm’s planning process. By aligning with each firm’s Centralised Investment Proposition, Fintegrate’s intuitive financial planning technology eliminates disjointed advice processes, significantly reduces costs and business risk, and ensures the delivery of consistent client outcomes.',
  'description': <>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
Fintegrate tackles crucial laborious and time-consuming areas of the adviser firm’s planning process. By aligning with each firm’s Centralised Investment Proposition, Fintegrate’s intuitive financial planning technology eliminates disjointed advice processes, significantly reduces costs and business risk, and ensures the delivery of consistent client outcomes.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Integrating with other best-of-breed technologies, the Fintegrate platform offers automation including risk profiling, portfolio reviews, portfolio risk analysis, recommendation building and white-labelled client reporting, as a result streamlining the most time-consuming and challenging areas of the financial planning process. Importantly, Fintegrate is tailored to meet the specific needs of each financial planning firm, in line with their advisory model.
</Typography>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
Fintegrate has the portfolios from over 60 MPS providers built into its system. This means advisers can compare current fund holdings, portfolio and fund charges, risk, asset allocation and past performance, which includes historic rebalances by the portfolio manager.
</Typography>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Fintegrate uses individual client risk analysis to compare current investment and platform costs and performance against the firm’s investment proposition. This helps accurately determine suitable client outcomes and provides consistent reports detailing the analysis to help solidify the foundation for advice in a time efficient and unambiguous way.</Typography>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Client investment analysis involves processes which have to be done manually for individual clients; the system allows this to be undertaken rapidly and efficiently. This reduces PII risk resulting from the reduction in errors owing to automation and consistency.</Typography>
  </>
}
,
{
  'name':'Model Office',
  'purpose':'Regulatory self-diagnostic audit',
  'logo':'/partners/mo.png',
  'intro':'Aimed at financial advisers, planners, wealth managers and banking organisations, Model Office uses continuing compliance-driven research and data to benchmark firms’ working environment against five regulatory keys – focus, engagement, promise, systems, people – that together demonstrate sustainable and professional good practice. ',
  'description': <>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Aimed at financial advisers, planners, wealth managers and banking organisations, Model Office uses continuing compliance-driven research and data to benchmark firms’ working environment against five regulatory keys – focus, engagement, promise, systems, people – that together demonstrate sustainable and professional good practice. Algorithms automate their customers’ diagnostic, gap analysis and audit reporting against all FCA regulatory requirements. Evidence shows that firms using Model Office gain significant compliance cost and time savings, better PII renewal rates and increased quality MI and Governance, Risk and Compliance (GRC) data</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Using natural language processing artificial intelligence and expert systems, Model Office will provide instant benchmarked and heat-mapped GRC dashboards with alerts and resources to improve firms’ scores. Integration with third-party software such as back offices/CRMs provides real-time streamlined data and regulatory dashboard reports, automates audit activities and updates the governance, risk and compliance diagnostic platform regularly, and provides instant alerts. In this way, customers can keep track of new regulatory requirements, relevant regulatory directives and papers and good practice benchmarks.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Model Office uses ongoing market and compliance-driven research to benchmark a firm’s working environment against five keys that demonstrate sustainable and professional best practice.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>This diagnostic test aims to provide business owners with a fuller understanding of where the firm is ‘at’ in relation to key business, people, digital and regulatory development issues.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Firms having greater insight into their regulatory position will reduce the risk of FCA intervention and past-business reviews.
</Typography>
  </>
}
,
{
  'name':'Money Alive',
  'purpose':'Client engagement and education',
  'logo':'/partners/money-alive-bk.png',
  'intro':'Money Alive is a ground-breaking UK-based technology company that has developed advanced Interactive Video Engagement products for the financial services market. The company’s products drive, evidence and ensure the consistency of consumer engagement and understanding – important key principles of Consumer Duty.',
  'description': <>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Money Alive is a ground-breaking UK-based technology company that has developed advanced Interactive Video Engagement products for the financial services market. The company’s products drive, evidence and ensure the consistency of consumer engagement and understanding – important key principles of Consumer Duty.
</Typography>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
Money Alive Office – RegTech SaaS platform that uses Money Alive content to deliver Interactive Video Engagements on key financial topics.
  </Typography>
<List dense>
<ListItem alignItems="flex-start">
  <ListItemIcon sx={{minWidth:25}}>
    <Circle sx={{fontSize:10}} />
  </ListItemIcon>
  <ListItemText disableTypography primary={<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Money Alive Office – RegTech SaaS platform that uses Money Alive content to deliver Interactive Video Engagements on key financial topics..</Typography>} />
</ListItem>

<ListItem alignItems="flex-start">
  <ListItemIcon sx={{minWidth:25}}>
    <Circle sx={{fontSize:10}} />
  </ListItemIcon>
  <ListItemText disableTypography primary={<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Video Canvas – a smart player that delivers AI-powered personalised video communications helping firms to deliver personalised portfolio reviews, pension statements and other financial communications.</Typography>} />
</ListItem>
</List>
<Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
Money Alive’s products are used by financial advisers, pension schemes, pension consultants, fintech companies and product providers.
</Typography>


  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>Money Alive uses online video resources to give firms a consistent methodology of providing clients with generic information about the products and advice they are receiving. This gives the firms control and oversight of client understanding in their advice process and an audit trail of clients’ engagement with the process.
</Typography>
  <Typography variant="body1"  sx={{color:'#000',fontSize:12,mb:2}}>
  This consistency of information and the audit trail of client engagement reduces PII risk, as lack of proof of client understanding and their inability to demonstrate what they were told at point of sale is often a significant factor in defence of complaints.

  </Typography>
  </>
}


]


  const theme=useTheme();
  return (
    <GeneralWrapper><Box sx={{height:80,width:'100%'}}></Box>
    <RingsLeft />
    <Box >
      <Stack  alignItems={"center"} sx={{py:8,width:'100%',backgroundColor:theme.palette.primary.superLight, }} >
        <Box className="whiteBox" sx={{background:'#FFF',p:4,borderRadius:5,maxWidth:'80%',mt:4,boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}}>
     {/* <RingsLeft /> */}

        <Box sx={{p:8}}>
          <Typography className="partners gradientText" sx={{fontWeight:500,fontSize:40,color:'#000'}}>How our partners help</Typography>
          <Typography className="partners" variant="body1" gutterBottom sx={{color:'#000',fontSize:14}}>
          We’ve partnered with five best-in-class adviser tools that share our mission to support advisers with the best resources to deliver good client outcomes. We hand-picked each of our partners as having a positive de-risking impact on PII and firms that use these tools will score favourably in our premium rating process. </Typography>
          <Typography className="partners" variant="body1" sx={{color:'#000',fontSize:14}}> Interested in learning more about how our partners can help your business? Read more below:
          </Typography>
          <Box sx={{my:5,width:'100%',height:'2px',borderRadius:5}} className="gradientBackground" />
            {/* <Stack direction="row"> */}
            <Stack sx={{mt:2}} spacing={10} id="partnerCase" justifyContent="space-between">

              {partners.map((partner,index)=>(


                  <Box class="partnerBox" key={index}>
                    <Grid container spacing={6}>
                    <Grid item xs={12} sm={4} md={4} display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" >
                    <Box sx={{width:'100%'}} component="img" src={partner.logo} alt={partner.name} />
                      </Grid>
                      <Grid item xs={12} sm={8} md={8} display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" >
                    <Typography variant="body1" sx={{mb:2,color:'#000',fontSize:12}}>{partner.intro}</Typography>
                      <WhiteModal name={partner.name} logo={partner.logo} design={partner.description} />


                    </Grid>
                      </Grid>

                    </Box>




              ))}

              </Stack>

          {/* </Stack> */}
        </Box>

        </Box>
      </Stack>
      </Box>
    </GeneralWrapper>
  )
}
