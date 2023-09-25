import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import {animate,scroll} from 'motion';

export default function Circular() {
  useEffect(() => {

    // animate(".circle", { rotate: "350deg" },{ duration: 10 })
    scroll(animate(".circle", { scale: [0, 1] }));

    // return () => {
    //   tl.kill(); // Kill the animation when the component unmounts
    // };
  }, []);

  return (
    <>
      <Box sx={{ height: '100vh', width: '100%', background: 'navy' }}>
        <Box
          id="circleCase"
          sx={{ width: '600px', height: '600px', position: 'relative' }}
        >
          <Box
            component="img"
            className="circle"
            id="image1"
            sx={{ postition:'absolute', width: 400, height: 400 }}
            src={'fly.webp'}
          />
          {/* <Box
            component="img"
            className="circle"
            id="image2"
            sx={{ position: 'absolute', width: 50, height: 50 }}
            src={'fly.webp'}
          />
          <Box
            component="img"
            className="circle"
            id="image3"
            sx={{ position: 'absolute', width: 50, height: 50 }}
            src={'fly.webp'}
          /> */}
        </Box>
      </Box>
      <Box sx={{ height: '100vh', width: '100%', background: 'white' }}></Box>
      <Box sx={{ height: '100vh', width: '100%', background: 'navy' }}></Box>
      <Box sx={{ height: '100vh', width: '100%', background: 'white' }}></Box>
    </>
  );
}