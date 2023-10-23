import { Box, Grid, Stack, Typography, Unstable_Grid2 } from '@mui/material'
import React,{useEffect} from 'react'
import { fadeInStagger } from '@/helpers/animation'
export default function Stats() {

  useEffect(() => {
    fadeInStagger('sectionStats','.statBox',5)
  }, [])
  //as

  const WhiteBox = ({ children }) => {
    return(
    <Stack direction="column" spacing={0} justifyContent="center" alignItems="center" sx={{background:'#FFF',borderRadius:2,p:4,height:'100%'}}>
      {children}
    </Stack>
    )

  }

  return (
    <Box id="sectionStats">
      <Grid container spacing={{xs:4,sm:6}}>
        <Grid item xs={12} sm={6} md={6} justifyContent={'center'} alignItems={'center'}>
        <Box className="statBox" sx={{height:'100%'}}>
         <WhiteBox>
          <Typography variant="body1" className="gradientText" sx={{fontWeight:500,textAlign:'center'}}>1st policy to accommodation FCA DISP 1.5.1</Typography>
          <Typography variant="h2" className="gradientText" sx={{mt:1,textAlign:'center'}}>3 day rule</Typography>
          </WhiteBox>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box className="statBox" sx={{height:'100%'}}>
          <WhiteBox>
          <Typography variant="body1" className="gradientText" sx={{fontWeight:500,textAlign:'center'}}>Over</Typography>
          <Typography variant="h2" className="gradientText" sx={{fontWeight:500,textAlign:'center',my:1,}}>5000</Typography>
          <Typography variant="body1" className="gradientText" sx={{fontWeight:500,textAlign:'center',lineHeight:1.2,fontSize:14}}>unnecessary words removed from policy</Typography>
          </WhiteBox>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <Box className="statBox" sx={{height:'100%'}}>
          <WhiteBox>
        <Typography variant="body1" className="gradientText" sx={{fontWeight:500,fontSize:15,textAlign:'center'}}>Fine-tuned over</Typography>
          <Typography variant="h2" className="gradientText" sx={{textAlign:'center',my:1}}>3 Years</Typography>
          </WhiteBox>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}
