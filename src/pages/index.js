import React,{useState,useEffect} from 'react';
import { Container } from '@mui/material';
import Lottie from 'react-lottie';
import animationData from '../components/Old/loader1.json';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProductHeroLogo from '../components/Old/ProductHeroLogo'
import MainLayout from '../components/Old/MainLayout';
import HeaderLogo from '../components/Old/HeaderLogo';
const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: "xMidYMid slice"
	}
};


function Home() {

	const [ done, setDone ] = useState(false);



	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setDone(true);
	// 	}, 700);
	// });


	return (
		<MainLayout>
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
						<ProductHeroLogo />
						{/* <HeaderLogo themeColor={themeColor} /> */}
					</FadeIn>
				{/* )}
		</React.Fragment> */}

		</MainLayout>
	);
}

export default Home;
