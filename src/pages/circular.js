import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { Box } from '@mui/material';

gsap.registerPlugin(MotionPathPlugin); // Register the MotionPathPlugin

export default function Circular() {
  useEffect(() => {
    // Circle center point
    const circleCenterX = 300;
    const circleCenterY = 300;

    // Circle radius
    const radius = 100;

    // Create circle motion path
    const circlePath = {
      curviness: 1,
      autoRotate: true,
      values: [{ x: circleCenterX + radius, y: circleCenterY }],
    };

    // Image elements
    const element1 = document.getElementById('image1');
    // const element2 = document.getElementById('image2');
    // const element3 = document.getElementById('image3');

    const tl = gsap.timeline({ repeat: -1 });

    // Element 1
    tl.to(element1, {
      motionPath: circlePath,
      duration: 15,
      ease: 'power1.inOut',
    });

    // Element 2
    // tl.to(
    //   element2, {
    //   motionPath: circlePath,
    //   duration: 3,
    //   ease: 'power1.inOut',
    // },
    //   '-=2'
    // ); // start this 2 seconds earlier

    // // Element 3
    // tl.to(
    //   element3, {
    //   motionPath: circlePath,
    //   duration: 3,
    //   ease: 'power1.inOut',
    // },
    //   '-=1'
    // ); // start this 1 second earlier

    return () => {
      tl.kill(); // Kill the animation when the component unmounts
    };
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
            sx={{ position: 'absolute', width: 100, height: 100 }}
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