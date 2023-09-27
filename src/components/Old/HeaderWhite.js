import React, {  useState } from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,Stack} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ButtonClean from './ButtonClean';
import ButtonPortal from './ButtonPortal';
import ButtonApply from './ButtonApply';
import ButtonMobile from './ButtonMobile';
import HeaderLogo from './HeaderLogo';



// const Search = styled('div')(({ theme }) => ({
// 	position: 'relative',
// 	borderRadius: theme.shape.borderRadius,
// 	backgroundColor: alpha(theme.palette.common.white, 0.15),
// 	'&:hover': {
// 		backgroundColor: alpha(theme.palette.common.white, 0.25)
// 	},
// 	marginLeft: 0,
// 	width: '100%',
// 	[theme.breakpoints.up('sm')]: {
// 		marginLeft: theme.spacing(1),
// 		width: 'auto'
// 	}
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
// 	padding: theme.spacing(0, 2),
// 	height: '100%',
// 	position: 'absolute',
// 	pointerEvents: 'none',
// 	display: 'flex',
// 	alignItems: 'center',
// 	justifyContent: 'center'
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
// 	color: 'inherit',
// 	'& .MuiInputBase-input': {
// 		padding: theme.spacing(1, 1, 1, 0),
// 		// vertical padding + font size from searchIcon
// 		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// 		transition: theme.transitions.create('width'),
// 		width: '100%',
// 		[theme.breakpoints.up('sm')]: {
// 			width: '12ch',
// 			'&:focus': {
// 				width: '20ch'
// 			}
// 		}
// 	}
// }));




// 	const [ drawer, setDrawer ] = useState(false);
// 	const toggleDrawer = (status) => {
// 		setDrawer(status);
// 	};
// 	const closeDrawer = () => {
// 		setDrawer(false);
// 	};
export default function HeaderWhite({themeColor}) {



	const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesXs = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<>
		{/* <Nav  /> */}
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ backgroundColor: themeColor==='light'?'#ffffff':'#29243d', position: 'fixed', zIndex: 99,py:2,pr:0}}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
				    <HeaderLogo themeColor={themeColor} />
						{matchesSm && <ButtonClean themeColor={themeColor} url="/insurance" text="Insurance" />}
						{matchesSm && <ButtonClean themeColor={themeColor}  url="/claims" text="Claims" />}
						{matchesSm && <ButtonClean themeColor={themeColor}  url="/risk-management" text="Risk Management" />}
						{matchesSm && <ButtonClean themeColor={themeColor}  url="/articles" text="Articles" />}
						{matchesSm && <ButtonClean themeColor={themeColor}  url="/contact" text="Contact" />}
						{matchesSm && <ButtonPortal themeColor={themeColor} />}
						{matchesSm && <ButtonApply />}
						{matchesXs && <ButtonMobile themeColor={themeColor} />}
				</Toolbar>
			</AppBar>
			<Toolbar sx={{background:'transparent',height:'99px' }}></Toolbar>
		</Box></>
	);
}
