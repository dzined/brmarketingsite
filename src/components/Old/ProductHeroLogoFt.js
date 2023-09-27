import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { css, keyframes } from "@emotion/react";
import TextField from '@mui/material/TextField';

import {Link, Button, Typography, Box ,Grid,Stack,useTheme,useMediaQuery, Divider,FormGroup,FormGroupLabel,FormControlLabel,Checkbox} from '@mui/material';

import ChevronRight from './ChevronRight';
import HeaderLogo from './HeaderLogo';

export default function ProductHero() {
	const [hovered,  setHovered ] = useState(false);

const theme=useTheme();
	const myEffect = keyframes`
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	`;


	const animatedItem = css`
	animation: ${myEffect} 15000ms ${theme.transitions.easing.easeInOut};
`;

const handleClick = () => {
	const mailerLiteApiKey='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMGY0Y2I0Yzk0YTRiYTQ2ZGVhNWMxZWFjMGRlOGRmMTQwMGZkMDFiNmM2ZWQxZjMxZjZiM2I1NWRjYTUwMjY1NGFkZDNjNDlmM2QxZmM3NTIiLCJpYXQiOjE2NzUyNzE2NzYuMzM3MDAyLCJuYmYiOjE2NzUyNzE2NzYuMzM3MDA0LCJleHAiOjQ4MzA5NDUyNzYuMzMyOTI2LCJzdWIiOiIzMzc5NDQiLCJzY29wZXMiOltdfQ.P4WeqTn4TsvhIwI9_x55UU4mIUzdbVhKKWmy84I65enLIHEni1DUpWE11oL4AW7bBLftmJQBrZAVAzz6OofBJ8gix_Yh-dFeuaHFM3TUMWnRaJkPU8HyeWCX7fjvU85zUO7kyANsieThuBMNkKe_-RvH1dteAkPftTh5rsDgu57lCMaeO7gGXbmSaK1xX-8Sg4xUHLpF2_OrNzmIMfMN-rMXb0okucgFQxxsSF_q1MyBVobqjHl8pPIebUEpsekEQ6qaqbvfQ48x0o8_J9fmnorQbvLHm0msGYF9NdkFSuscLOIQb6zXOoq7e7uDnjsHsqcwCso4reIq7AzzbAY0TO_d_3Q1KtsS0a7R0OKyTsNblJaqHlk4qa7yztCToS6R1I8tzcsybGUkowPKdw2rsknK3mNnbe1Lcysjo8LU8c8OhkuwYs9DOSOP14NGvtisKOxH4f0-raOzTxnOkc4pV3Kf0GioxKiIwvCgu3n-UJ2_7V4Xmrex11XPViZ6zjZ7XERZdg5M-egL0fXp7GhC_Iplgr2hiOCoIOjc0ZxyB99UoOJxNxViiRcTS-HPZYQnAJd_BdZheA-jpzjiifuhmaLRaTEb_ulPEsJfe4zG7hXznpex_QtfwVur3P1Ow7AQmC4HRv9_b-dPUi_gS49HkeiqvMwy3nilfAxpIGSQQtA';
	const mailerLiteApiUrl='https://connect.mailerlite.com/api/subscribers';
	const mailerLiteApiHeaders={
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${mailerLiteApiKey}`
	};
	const mailerLiteApiBody={
		'email': email,
		// 'fields': {
		// 	'source': 'BareRock Website',
		// 	"optin": "true",
		// 	"optin_time": moment().format('YYYY-MM-DD HH:mm:ss')
		// },
		"groups": [
			"78927772348581483"
		]
	};
	fetch(mailerLiteApiUrl, {
		method: 'POST',
		headers: mailerLiteApiHeaders,
		body: JSON.stringify(mailerLiteApiBody)
	})
	.then(response => response.json())
	.then(data => {
		//console.log(data)
		if(data.data.id){
			setSignup(true)
		}
	});



}
const [signup, setSignup] = useState(false);
const [email, setEmail] = useState('');
const handleEmailChange = (event) => {

	setEmail(event.target.value);

}
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
const [checked, setChecked] = useState(false);
const label="	Yes, I’d like to receive news and updates from BareRock Limited";
return (

			<Box sx={{background:'#FFF'}}>
			<Box sx={{ background:'#FFF',position:'relative',textAlign:'center'}} >

				<Stack direction="row" alignItems="center" justifyContent="center" css={animatedItem} sx={{minHeight:'100vh',p:{xs:4,sm:0},
				background: 'rgb(147,8,255)',
background: '-moz-linear-gradient(126deg, rgba(147,8,255,1) 0%, rgba(12,222,255,1) 100%)',
background: '-webkit-linear-gradient(126deg, rgba(147,8,255,1) 0%, rgba(12,222,255,1) 100%)',
background: 'linear-gradient(126deg, rgba(147,8,255,1) 0%, rgba(12,222,255,1) 100%)',
filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#9308ff",endColorstr="#0cdeff",GradientType=1)'


				}}>


				<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ type: 'easeOut', duration: 2, delay:1 }}
								exit={{ x: -300, opacity: 0 }}
							>
							<Box component="img"
          width="1250"
          height="334"
          src={process.env.NEXT_PUBLIC_LOGO_WHITE}
          sx={{textAlign:'center', margin:'0 auto',width: '100%', maxWidth: 500,marginTop:-1,px:{xs:5,sm:0} }}
          alt="BareRock"
        />
				<Typography variant="body2" sx={{mt:{xs:1,sm:4},textAlign:'center',color:'#FFF',fontWeight:800,fontSize:{xs:19,sm:25}}}>Good companies,{isMobile?<Divider sx={{borderColor:'transparent'}} />:''} in good company®</Typography>

				<Box sx={{textAlign:'center',maxWidth:700,width:'100%',margin:'0 auto'}}>


					<Typography sx={{width:'100%',mt:{xs:3,sm:7},textAlign:'center',color:'#FFF',fontSize:{xs:13,sm:17}}}>We’re revolutionising Professional Indemnity Insurance for Financial Advisers and Planners. Change is coming and isn’t it about time?
We’ll be lifting the lid at the Financial Advice Forum in London on 28th September 2023. The future beckons - see you there!  </Typography>

<Typography sx={{width:'100%',mt:{xs:2,sm:7},textAlign:'center',color:'#FFF',fontSize:{xs:13,sm:17}}}>Interested in receiving updates about BareRock? Sign up here: </Typography>




					<Box sx={{textAlign:'center',maxWidth:{xs:300,sm:500},width:'100%',margin:'0 auto'}}>

					{!signup ? (
						<React.Fragment>
						<TextField value={email} onChange={handleEmailChange} id="outlined-basic"
						variant="outlined"
						placeholder="Enter your email address"
						sx={{textAlign:'center',mt:2,width:'100%',mb:2,
								'input': {
									textAlign:'center',
									'&::placeholder': {
								fontSize:15,textAlign:''
								}
							}
						}}
						/>
						<FormGroup>
  <FormControlLabel  sx={{textAlign:'center',pt:0,mt:1,mb:2,color:'#FFF',px:0,mx:0,paddingLeft:2,}} control={<Checkbox onChange={()=>setChecked(!checked)}checked={checked} disableRipple style={{m:0,color:'#FFF',checked:{color:'white'}}} />}

	label={
    <Typography sx={{ fontSize: 14,color:'#FFF' }}>
     Yes, I’d like to receive news and updates from BareRock
    </Typography>
  }
	/>
</FormGroup>
{/* background:'rgba(255,255,255,0.2)',color:'#fff', */}
						<Button disabled={!checked ? true:false}fullWidth={true} variant="contained" sx={{width:{xs:'80%',sm:'60%'},mt:{xs:0,sm:2},border:'1px solid #FFF',p:2,px:{xs:2,sm:3},boxShadow:'none','&:hover':{background:'#9308ff',}}} onClick={handleClick}>Keep me in the loop</Button>
						{/* <Typography sx={{mt:2,fontSize:12,color:'#FFF',pt:{xs:0,sm:2}}}></Typography> */}
						</React.Fragment>
							) : (
												<Typography sx={{width:'100%',mt:{xs:3,sm:3},textAlign:'center',color:'#FFF',fontSize:{xs:13,sm:20,fontWeight:'bold'}}}>Thanks for signing up! </Typography>
							)}
				</Box>
				<Link href="https://cdn.barerock.group/documents/public/BareRock_Privacy_BC_updated_190723_v2.pdf" style={{color:'#FFF',marginTop:20,textDecoration:'none'}}>
				<Typography sx={{mt:2,color:'#FFF'}}>Privacy Policy</Typography>
				</Link>
				</Box>

								</motion.div>
							{/* <motion.div
								style={{ textAlign: 'left' }}
								whileHover={{
									scale: 1.55,
									transition: { type: 'easeInOut', duration: 0.3 }
								}}
								initial={{ opacity: 0, scale: 1 }}
								animate={{ opacity: 1, scale: 1.5 }}
								transition={{
									yoyo: isHovered ? 2 : 0,
									type: isHovered ? 'sping' : 'easeOut',
									duration: isHovered ? 0.2 : 1,
									delay: isHovered ? 0 : 1
								}}
								exit={{ x: -300, opacity: 0 }}
							> */}

							{/* </motion.div> */}
							</Stack>



			{/* <Box sx={{marginTop:'-10%',left:'10%',width:'100%',position:'absolute',boxShadow: '0px 0px 59px 7px rgba(76, 73, 84, 0.13)',
background:'#FFF',borderRadius:10,padding:10,borderTopRightRadius:0,borderBottomRightRadius:0,mr:2}}>

		<Typography
					sx={{

						background: 'linear-gradient(90deg, #9308FF 5.65%, #0CDEFF 50.15%)',

backgroundClip: 'text',
textFillColor: 'transparent',
						color:'#4c4954', fontWeight: '500',fontSize:50}}
					color="inherit"
					align="left"
					variant="h2"
					marked="left"
				>
		A pioneering new approach<br />to PI insurance
				</Typography>
				<Typography
					sx={{

						background: 'linear-gradient(97.52deg, #9308FF 15.65%, #0CDEFF 73.15%)',
mt:3,
backgroundClip: 'text',
textFillColor: 'transparent',
						color:'#4c4954', fontWeight: '500',fontSize:30}}
					color="inherit"
					align="left"
					variant="h2"
					marked="left"
				>
	for financial advice intermediary firms
				</Typography>

			</Box> */}
				</Box>




		</Box>
	);
}
/* Rectangle 42 */

/* A pioneering new approach to PI insurance */

