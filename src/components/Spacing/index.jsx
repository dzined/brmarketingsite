import React from 'react';
import Div from '../Div';
import './spacing.scss';
import { Box } from '@mui/material';

export default function Spacing({ lg, md }) {
  return <Box className={`cs-height_${lg} cs-height_lg_${md}`}></Box>;
}
