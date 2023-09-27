import { Box } from '@mui/material';
import { motion, useAnimation,useScroll ,useMotionValueEvent} from 'framer-motion';
import { useEffect,useState,useRef } from 'react';

export default function SectionPin({heroHeight}) {

  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [sticky , setSticky] = useState('absolute')
  const [containerTop , setContainerTop] = useState('absolute')
  const [containerBottom, setContainerBottom] = useState('absolute')
  const [viewportHeight, setViewPortHeight] = useState(0)
  const [bottomBoxBottom, setBottomBoxBottom] = useState(0)
  const sectionContainer = useRef(null)
  const bottomBox = useRef(null)
  useEffect(() => {
  const sectionContainerTop = sectionContainer.current.getBoundingClientRect().top;
  setContainerTop(sectionContainerTop)
  const sectionContainerBottom = sectionContainer.current.getBoundingClientRect().bottom;
  setContainerBottom(sectionContainerBottom)
  setViewPortHeight(window.innerHeight);
  const bottomBoxBottom = bottomBox.current.getBoundingClientRect().bottom;
  setBottomBoxBottom(bottomBoxBottom)


  // console.log("element",element.clientHeight)
  // const rect = element.getBoundingClientRect();
  // const height = rect.height;
  // setHeroHeight(height)
  }, [])

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("CONT",containerTop)
    console.log("BOTT",containerTop-containerTop/3)
    console.log("latest",latest)
    // console.log("heroHeight",heroHeight)
console.log("height",heroHeight)
    if(latest > (heroHeight/2) && latest<(bottomBoxBottom-(viewportHeight/2)-200)){
      setSticky('fixed')
      sectionContainer.current.classList.remove('faded');
    }else{
      setSticky('absolute')
      console.log("As")
      // setSticky('absolute')
      sectionContainer.current.classList.remove('faded');
    }

  })
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({ y: -50 });
      } else {
        controls.start({ y: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <Box
      style={{
        width: '100%',
        position:'relative',
        background: 'yellow',

        // position: 'sticky', // Set the sticky position here
        // top: 0, // Set the top property to 0 to stick at the top
      }}
    >

      <Box sx={{height:'100vh',width:'100%',background:'red'}}>
      <Box ref={sectionContainer} sx={{ transition:'all 0.3s', width:400,height:400,position:sticky,background:'brown',top:'50%',
        transform: 'translateY(-50%)',}}>
        asdasdasas
      </Box>
      </Box>
      <Box sx={{height:'100vh',width:'100%',background:'blue'}}></Box>
      <Box ref={bottomBox} sx={{height:'100vh',width:'100%',background:'purple'}}></Box>
      <h2>I will stick</h2>
    </Box>
  );
}