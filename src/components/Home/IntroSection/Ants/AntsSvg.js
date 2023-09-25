import React from 'react';
import { SvgIcon } from '@mui/material';
import { Box } from '@mui/material';
import styles from './Ants.module.css';
export default function Ants(props) {
	return (
    <Box className={styles.ants} sx={{pt:100}}>
		<SvgIcon {...props} viewBox='0 0 40 40' preserveAspectRatio='none'>
    <path className={styles.path} d="M 0,50 L 600,50"/>
		</SvgIcon>
    </Box>
	);
}
