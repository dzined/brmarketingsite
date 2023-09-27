import React,{useState,useEffect} from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ProductHeroLogoFt from '../components/Old/ProductHeroLogoFt'
import MainLayout from '../components/Old/MainLayout';


function Home() {




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
						<ProductHeroLogoFt />
						{/* <HeaderLogo themeColor={themeColor} /> */}
					</FadeIn>
				{/* )}
		</React.Fragment> */}

		</MainLayout>
	);
}

export default Home;
