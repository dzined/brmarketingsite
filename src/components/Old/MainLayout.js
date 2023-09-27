// components/layouts/main
import Head from 'next/head';
import { Box,Container } from '@mui/material';
// import HeaderWhite from './HeaderWhite';
// import Footer from '../Footer';
// import PostFooter from '../PostFooter';
import CookieBanner from '../CookieBanner';
const MainLayout = ({ children,themeColor="light" }) => (
	<>

		{/* <HeaderWhite themeColor={themeColor} /> */}
	{children}
	{/* <Footer themeColor={themeColor} /> */}
	{/* <PostFooter /> */}
	<CookieBanner />
	</>
);

export default MainLayout;
