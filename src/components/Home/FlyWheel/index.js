import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap';
import { Box } from '@mui/material';


function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headings = document.querySelectorAll('.heading');

    headings.forEach((heading, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heading,
          start: 'top center', // When the heading is at the center of the viewport
          end: 'bottom center', // When the heading is at the bottom of the viewport
          toggleActions: 'play reverse play reverse',
        },
      });

      // Animation for fading in and out
      tl.to(heading, { opacity: 1, duration: 1 }); // Fade in
      tl.to(heading, { opacity: 0, duration: 1 }); // Fade out
    });
  }, []);

  return (
    <Box >
      <Box sx={{width:'100%',height:'100vh',background:'red'}} className="full-height-section">Section 1</Box>
      <Box sx={{width:'100%',height:'100vh',background:'blue'}} className="full-height-section middle-section">
        <h1 className="heading">Heading 1</h1>
        <h1 className="heading">Heading 2</h1>
        <h1 className="heading">Heading 3</h1>
      </Box>
      <Box sx={{width:'100%',height:'100vh',background:'pink'}} className="full-height-section">Section 3</Box>
    </Box>
  );
}

export default App;
