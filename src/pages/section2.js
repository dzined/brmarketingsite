// import FlyWheel from '@/components/Home/FlyWheel'
import React,{useEffect,useRef} from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Box, Stack, Typography } from '@mui/material';
gsap.registerPlugin(ScrollTrigger);
export default function Section() {
// const circle = useRef(null);
  useEffect(() => {

    let ctx = gsap.context(() => {
      // put all your GSAP/ScrollTrigger code inside here...
      const tl = gsap.timeline({
        scrollTrigger: {
          anticipatePin: 1,

          trigger: '.gallery',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          markers: true,
          pin:'.pin'
        },
        x: 0,
      });
      tl.fromTo("#flywheel", {
        rotation: 0,
        ease: "none",
      },{
        rotation: 360,
        ease: "none",
      }, 0)
    //  tl.to("#flywheel", {
    //     rotation: 0,
    //     ease: "none",
    //   }, "<")



    const tl2 = gsap.timeline({
      scrollTrigger: {
        anticipatePin: 1,

        trigger: '#insurancePanel',
        start: 'top 40%',
        end: 'bottom bottom',
        scrub: true,
        markers: true,

      },

    });
    tl2.fromTo("#laptop", {
      right: -600,
      ease: "power3.inOut",
    },{
      right:0,
      ease: "power3.inOut",
    }, 0)


    tl2.fromTo("#laptopTitle", {
      opacity: 0,
      y:0,
      ease: "power3.inOut",
    },{
      opacity:1,
      y:-10,
      ease: "power3.inOut",
    }, 0.5)

    tl2.fromTo("#laptopText", {
      opacity: 0,
      y:0,
      ease: "power3.inOut",
    },{
      opacity:1,
      y:-10,
      ease: "power3.inOut",
    }, '>0.05')



  });
    return () => ctx.revert();

  }, []);

  return (
    <>
    <Box sx={{width:'100%',height:'100vh',background:'red'}}>Section 1</Box>
    <Box sx={{display:'flex',justifyContent:'space-between'}} className="gallery">
      <Box className="pin" sx={{height:'100vh',width:'30vw',background:'navy',display:'flex',alignItems:'center'}}>
      {/* <Box   sx={{
            willChange: 'transform',
          background:'url(fly.webp)',
          backgroundSize:'cover',

          width:500,
          height:500,

          // left:'10vh',
          // top:'40vh',


          }} /> */}
          <Box component="img" id="flywheel" sx={{marginLeft:'-250px',width:500,height:500}} src={'fly.webp'} />
      </Box>
      <Box sx={{width:'70vw'}}>
      <Stack sx={{height:'100vh',width:'100%',background:'navy',alignItems:'flex-start',justifyContent:"center"}}>
         <Box sx={{p:20,pl:10}}>
          <Typography variant="h2">Insurance</Typography>
          <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae magna ut nulla molestie euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </Typography>
          </Box>
      </Stack>
      <Stack sx={{height:'100vh',width:'100%',background:'navy',alignItems:'flex-start',justifyContent:"center"}}>
      <Box sx={{p:20,pl:10}}>
      <Typography variant="h2">Claims</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae magna ut nulla molestie euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </Typography>
      </Box>
      </Stack>
      <Stack sx={{height:'100vh',width:'100%',background:'navy',alignItems:'flex-start',justifyContent:"center"}}>
      <Box sx={{p:20,pl:10}}>
      <Typography variant="h2">Risk Management</Typography>
      <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae magna ut nulla molestie euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </Typography>
      </Box>
      </Stack>

      </Box>
    </Box>
    <Stack direction="row" alignItems="center" id="insurancePanel" sx={{position:'relative',width:'100%',height:'100vh',background:'blue'}} className="full-height-section middle-section" >
      <Box component="img" id="laptopTitle" sx={{position:'absolute',right:'-600px',maxWidth:800}} src={'laptop.png'} />
     <Stack direction="column" sx={{p:10}}>
      <Typography variant="h2" id="laptopTitle" sx={{maxWidth:400}}>Lorem ipsum dolor sit amet</Typography>
      <Typography id="laptopText" sx={{maxWidth:400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae magna ut nulla molestie euismod. Orci varius natoque penatibus et magnis dis pa
      rturient montes, nascetur ridiculus mus. </Typography>
      </Stack>
      {/* <h1 className="heading">Heading 1</h1>
      <h1 className="heading">Heading 2</h1>
      <h1 className="heading">Heading 3</h1> */}
    </Stack>
    <Box sx={{width:'100%',height:'100vh',background:'pink'}} className="full-height-section">Section 3</Box>
    {/* <FlyWheel /> */}
    </>
  )
}
