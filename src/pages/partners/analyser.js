import React,{useEffect,Component} from 'react'
import Wrapper from '@/components/Layouts/Wrapper'
import { Box, Grid, Stack, Toolbar, Typography } from '@mui/material'
import { Formik } from 'formik';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
// import mapStyles from './mapStyles'


import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import GeneralWrapper from '@/components/Layouts/GeneralWrapper'
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string(),
  message: Yup.string().required('Required')
});
export default function Contact() {
  return (
   <GeneralWrapper>
    <Toolbar sx={{height:83,background:'red'}} / >
    <Box sx={{ width: '100%',height:400,background:'#FFF',p:4 }}>
      <Grid container spacing={2} sx={{width:'100%',height:'100%'}}>
        <Grid item xs={12} sm={6} sx={{width:'100%',height:'100%'}}>
          <Stack direction={"row"} alignItems={'center'} justifyContent='center'>
            <Box component="img" src="http://localhost:3000/partners/analyser.png" sx={{width:'100%'}} />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} sx={{width:'100%',height:'100%'}}>
          <Typography variant="h4" sx={{color:'#000',fontWeight:'bold',mb:2}}>Fintergrate</Typography>
          <Typography variant="h6" sx={{color:'#000',mb:2}}>Lorem Ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Typography>
          <Typography variant="h6" sx={{color:'#000',mb:2}}>Lorem Ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Typography>
          <Typography variant="h6" sx={{color:'#000',mb:2}}>Lorem Ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{width:'100%',height:'100%'}}>
        <Grid item xs={12} sm={6} sx={{width:'100%',height:'100%'}}>
        </Grid>
        <Grid item xs={12} sm={6} sx={{width:'100%',height:'100%'}}>
        </Grid>
      </Grid>
    </Box>
   </GeneralWrapper>
  )
}

