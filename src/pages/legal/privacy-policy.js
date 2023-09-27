import React,{useState,useEffect} from 'react';
import { Container,Grid,Box } from '@mui/material';
// import Lottie from 'react-lottie';
// import animationData from '../loader1.json';
import FadeIn from 'react-fade-in/lib/FadeIn';
// // import ProductHeroLogo from '../../components/ProductHeroLogo'
// import MainLayout from '@/components/layouts/Wrapper';
// import HeaderLogo from '../../components/HeaderLogo';
// import PrivacyDocs from '../../components/form/PrivacyDocs';
import Link from 'next/link';
import Wrapper from '@/components/Layouts/Wrapper';
// const defaultOptions = {
// 	loop: true,
// 	autoplay: true,
// 	animationData: animationData,
// 	rendererSettings: {
// 		preserveAspectRatio: "xMidYMid slice"
// 	}
// };


function Home() {

	const [ done, setDone ] = useState(false);



	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setDone(true);
	// 	}, 700);
	// });


	return (
		<Wrapper>
		{/* <React.Fragment>
		{!done ? (
					<>
						<Container
			maxWidth="false"
			sx={{
				backgroundColor:'#ffffff',
				width: '100vw',
				height: 'calc(100vh - 200px)',
				justifyContent: 'center',
				textAlign: 'center',
				alignItems: 'center',
				display: 'flex',
				paddingRight: 0,
				paddingLeft: 0,
				ml: 'auto',
				mr: 'auto'
			}}
		>

			<Lottie
	    options={defaultOptions}
        height={200}
        width={200}
      />

		</Container>
					</>
				) : ( */}
					<FadeIn transitionDuration="500">
						<Container sx={{color:'#000'}}>
							<Grid container>
								<Grid item={true} xs={12} md={12}>
									<Box sx={{p:10,background:'#FFF'}}>
										<Link href="/">Back to Home</Link><br /><br />

										<Link target="_blank" href="https://cdn.barerock.group/documents/public/BareRock_Privacy_BC_updated_190723_v2.pdf" >View our privacy policy</Link>
										</Box>
								</Grid>
							</Grid>
						</Container>
						{/* <HeaderLogo themeColor={themeColor} /> */}
					</FadeIn>
				{/* )}
		</React.Fragment> */}
		</Wrapper>
	);
}

export default Home;
