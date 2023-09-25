import { Box, Stack, Typography } from '@mui/material'
import React,{useEffect,useRef} from 'react'
import gsap from 'gsap';
import styles from './FlyWheel.module.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FlyWheel() {
  const flyWheelBox = useRef(null);
  const circle = useRef(null);
   const section1 = useRef(null);
   const section2 = useRef(null);
   const section3 = useRef(null);



useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  const headings = document.querySelectorAll('.heading');
  const head = document.querySelector('.head');

  const numOfTransitions = headings.length
  const singleDuration = 1000;
   const totalDuration = singleDuration * numOfTransitions;
  gsap.to('.head', {
    scrollTrigger: {
      pin: '.head',
      end: '+=' + `${totalDuration}s`,
      pinSpacing: true,
    },
  });
  headings.forEach((heading, i) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        toggleActions: 'play reverse play reverse',
        start: '+=' + `${singleDuration * i}s`,
        end: '+=' + `${singleDuration}s`,
        markers: true,
        onEnter: () => { gsap.to([heading, nums[i]],{opacity: 1})},
        onLeave: () => {  gsap.to([heading, nums[i]],{opacity: 0})},
        onEnterBack: () => {  gsap.to([heading, nums[i]],{opacity: 1})},
        onLeaveBack: () => {
          if(i === 0 ) return;
          gsap.to([heading, nums[i]],{opacity: 0})
        }
      }
    });
  });






  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section1.current,
  //     start: 'bottom bottom',
  //     end: 'top top',
  //     toggleActions: 'play none none reverse'
  //   }
  // })
  // .fromTo(section1.current, {opacity: 0}, {opacity: 1})

  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section2.current,
  //     start: 'bottom bottom',
  //     end: 'top top',
  //     toggleActions: 'play none none reverse'
  //   }
  // })
  // .fromTo(section2.current, {opacity: 0}, {opacity: 1})

  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section3.current,
  //     start: 'bottom bottom',
  //     end: 'top top',
  //     toggleActions: 'play none none reverse'
  //   }
  // })
  // .fromTo(section3.current, {opacity: 0}, {opacity: 1})

// // Create timeline
// const tl = gsap.timeline();

// // Set initial paragraph styling
// tl.set(para, {opacity: 1});

// // Create scroll trigger
// tl.to(para, {
//   opacity: 0,
//   scrollTrigger: {
//     trigger: para,
//     start: 'top 80%',
//     end: 'bottom 20%',
//     scrub: true
//   }
// });

}, [])
  useEffect(() => {





    // const layers = parallaxElements.current;
    //  const heroBox = document.querySelector('#heroBox');
    // header.style.opacity = 1;

    const handleScroll = () => {
      // const hero = document.querySelector('#heroSection');
      const scrollTop = window.scrollY;
console.log("scrollTop",scrollTop)
// console.log("scrollTop",scrollTop)
      // if (scrollTop > 90) {
      //   heroBox.style.opacity = 0;
      // } else {
      //   heroBox.style.opacity = 1;
      // }

// console.log("scrollTop",scrollTop)
if(scrollTop > 0 && scrollTop < 500) {
  let leftPos = -520+(scrollTop/2);
  console.log("left",leftPos)
  flyWheelBox.current.style.left=`${leftPos}px`;
}

// if(scrollTop > 500) {
//   let opacityLevel = scrollTop/100;
//   flyWheelBox.current.style.opacity = opacityLevel;
// }else{
//   flyWheelBox.current.style.opacity = 0;
// }
if(scrollTop < 2450) {

          const degrees = (scrollTop) / 360*100;

          console.log("degrees",degrees)
          circle.current.style.top = `50%`;
       // Set transform origin using circle's width & height

          circle.current.style.transform = `rotate(${degrees}deg)  `;



      }
      if(scrollTop > 2450) {
      let perc = scrollTop/100;
        const x = 1-(scrollTop) /1000;
        console.log("x",`scale(${x}) `)
        circle.current.style.transform = `scale(${x}) `;

    }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);


  return (

    <div style={{position:'relative'}}>
   <Stack alignItems="center" sx={{position:'relative',height:'100vh',width:'100%',background:'green'}}>

Section
</Stack>
        <Stack className={styles.head} alignItems="center" sx={{position:'relative',height:'100vh',width:'100%',background:'purple'}}>
            <Box className={styles.contentBox}>
            <Typography className={styles.heading} id="heading1">Item 1</Typography>
            <Typography className={styles.heading} id="heading2">Item 2</Typography>
            <Typography className={styles.heading} id="heading3">Item 3</Typography>
            <Typography className={styles.heading} id="heading4">Item 4</Typography>
            <Typography className={styles.heading} id="heading5">Item 5</Typography>
            </Box>
          </Stack>





       <Box className={styles.flywheelBox} ref={flyWheelBox} sx={{
        opacity:1,
  position:'fixed',
  zIndex:999999,
  top:'50%',
  left:-500,
  width:500,
  height:500,
  transform:'translateY(-50%)',
       }}>
          <Box ref={circle}  sx={{
            willChange: 'transform',
          background:'url(fly.webp)',
          backgroundSize:'cover',

          width:500,
          height:500,

          // left:'10vh',
          // top:'40vh',


          }} />
         </Box>

    <Stack alignItems="center" sx={{background:'navy'}}>

    <Stack  ref={section1} direction="column" alignItems="center"
justifyContent="center" sx={{width:'100%',height:'100vh',}}>
    <Stack direction="row" spacing={10}alignItems="center"  sx={{width:'50vw',p:5}}>

      </Stack></Stack>
<Stack  ref={section1} direction="column" alignItems="center"
justifyContent="center" sx={{width:'100%',height:'100vh',}}>
    <Stack direction="row" spacing={10}alignItems="center"  sx={{width:'50vw',p:5}}>
      <Box sx={{}}>
        <Box>Insurance</Box>

        <Box>
          <Typography variant="body1" sx={{color:'white'}}>
            Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </Typography>
        </Box>

      </Box>
    </Stack>
</Stack>
<Stack ref={section2} direction="column" alignItems="center"
justifyContent="center" sx={{width:'100%',height:'100vh'}}>
    <Stack direction="row" spacing={10}alignItems="center"  sx={{width:'50vw',p:5}}>
      <Box sx={{}}>
        <Box>Insurance</Box>

        <Box>
          <Typography variant="body1" sx={{color:'white'}}>
            Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </Typography>
        </Box>

      </Box>
    </Stack>
</Stack>
<Stack ref={section3} direction="column" alignItems="center"
justifyContent="center" sx={{width:'100%',height:'100vh'}}>
    <Stack direction="row" spacing={10}alignItems="center"  sx={{width:'50vw',p:5}}>
      <Box sx={{}}>
        <Box>Insurance</Box>

        <Box>
          <Typography variant="body1" sx={{color:'white'}}>
            Lorem ipsum dolor sit amet c onsectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
          </Typography>
        </Box>

      </Box>
    </Stack>
</Stack>

<Stack direction="column" alignItems="center"
justifyContent="center" sx={{width:'100%',height:'100vh'}}>
    <Stack direction="row" spacing={10}alignItems="center"  sx={{width:'50vw',p:5}}>
      <Box sx={{}}>
        <Box>Insurance</Box>

        <Box>
          <Typography variant="body1" sx={{color:'white'}}>
          , voluptatum.
          </Typography>
        </Box>

      </Box>
    </Stack>
</Stack>



    </Stack>
    <Stack alignItems="center" sx={{position:'relative',height:'100vh',width:'100%',background:'pink'}}>

      Section
    </Stack>
    <Stack alignItems="center" sx={{position:'relative',height:'100vh',width:'100%',background:'green'}}>

    Section
  </Stack>
  </div>
  )
}
