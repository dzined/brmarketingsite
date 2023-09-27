import { Backdrop, Box, Button, Link, Typography,Stack, Table,TableCell, TableBody,TableRow, TableContainer } from '@mui/material';
import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';
import styles from './CookieBanner.module.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

import Accordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ChevronDown from './icons/ChevronDownMedium';
import Switch from '@mui/material/Switch';
import ChevronDownMedium from './icons/ChevronDownMedium';

import data from './data.json';
import Cookie from './icons/Cookie';





function CookieBanner() {

  const [duration] = React.useState(324000);
  const [open, setOpen] = React.useState(false);
  const [bannerType,setBannerType]=React.useState('popup');

  const [cookieOptions, setCookieOptions] = React.useState({
    essential:false,
    functional:false,
    analytics:false,
    performance:false,
    advertisement:false,

  })

  const cookies = new Cookies();

  useEffect(() => {
    const cookieOptionsFromCookies = cookies.get('cookieOptions');
    if(cookieOptionsFromCookies){
      setCookieOptions(cookieOptionsFromCookies)
    }
  },[])
  useEffect(() => {
    if(cookies.get('cookieChoice') !=='set'){
       setOpen(true)
    }
  },[cookies])


  const handleCategory = (props,e) => {
    let oldObject={}
    oldObject={...cookieOptions}
    oldObject[`${props.category}`]=e.target.checked
    setCookieOptions(oldObject)
    //setCookieOptions in cookies with duration
    cookies.set('cookieOptions', oldObject, { path: '/',maxAge:duration });
  }
  // console.log(cookieOptions);
  const IOSSwitch = styled((props) => (
    <Switch checked={cookieOptions[props.category]} onChange={(e)=>handleCategory(props,e)} focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,

      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  const handleClose = () => {
    // setOpen(false);
  }
  //cookies.set('myCat', 'Pacman', { path: '/' });
  // console.log(cookies.get('myCat')); // Pacman
  const handleSetOpen=() => {

    setOpen(true)
  }

  const cookiePolicyText=<Box sx={{mb:2}} className={styles.cookiePolicyDescription}>
    <Typography variant="body1" gutterBottom>
    You have the option to control and manage cookies in your browser settings. You can choose to block or delete cookies, but please be aware that doing so may impact the functionality of our website.</Typography>

    <Typography variant="body1"  gutterBottom>By using our website, you consent to the use of cookies as described in this Cookie Policy. If you have any questions or concerns about our use of cookies, please contact us at {data.contactEmail} / {data.contactNumber}.</Typography>

    <Typography variant="body1"  gutterBottom>For more information, please read our full <Link href={data.privacyPolicyUrl} title="Privacy Policy">Privacy Policy</Link> and <Link href={data.cookiePolicyUrl} title="Cookie Policy">Cookie Policy</Link>.</Typography>
  </Box>;


  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ChevronDown sx={{ fontSize: '0.7rem' }} />}
      {...props}
    ><Stack direction="row" justifyContent="space-between" alignItems="center" sx={{width:'100%'}}>
      <Typography sx={{fontSize:14}}>{props?.label}</Typography>
      <FormControlLabel className={styles.toggle}
    control={<IOSSwitch category={props.category} onClick={(e)=>e.stopPropagation()} sx={{ m: 0,mr:0 }} defaultChecked />}
    label=""
  /> </Stack>
      </MuiAccordionSummary>

  ))(({ theme }) => ({

    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    // minHeight:40,
    // '& .MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded':{
      minHeight:20,

      // MuiButtonBase:{
      // styleOverrides:{
      //   root:{
      //     MuiExpanded:{
      //       minHeight:10,
      //     }
      //   }
      // }
    //},
    '& .MuiAccordionSummary-expandIconWrapper':{
      transform: 'rotate(-90deg)',
      display:'block'
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(0deg)',display:'block',width:11,
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(0),
      marginBottom:0,
      padding:0,
       minHeight:40,
    }
  }));

const acceptCookies = () => {

  const cookieSet = {
    essential:true,
    functional:true,
    analytics:true,
    performance:true,
    advertisement:true
  }
  setCookieOptions(cookieSet)
  cookies.set('cookieOptions', cookieSet, { path: '/',maxAge:duration });
  cookies.set('cookieChoice', 'set', { path: '/',maxAge:duration });
  setOpen(false);
};

const declineCookies = () => {
  const cookieSet = {
    essential:false,
    functional:false,
    analytics:false,
    performance:false,
    advertisement:false
  }
  setCookieOptions(cookieSet)
  cookies.set('cookieOptions', cookieSet, { path: '/',maxAge:duration });
  cookies.set('cookieChoice', 'set', { path: '/',maxAge:duration });
  setOpen(false);
};
const acceptAllCookies = () => {
  const cookieSet = {
    essential:true,
    functional:true,
    analytics:true,
    performance:true,
    advertisement:true
  }
  setCookieOptions(cookieSet)
  cookies.set('cookieOptions', cookieSet, { path: '/',maxAge:duration });
  cookies.set('cookieChoice', 'set', { path: '/',maxAge:duration });
  setOpen(false);
};
const declineAllCookies = () => {
  const cookieSet = {
    essential:false,
    functional:false,
    functional:false,
    analytics:false,
    performance:false,
    advertisement:false
  }
  setCookieOptions(cookieSet)
  cookies.set('cookieOptions', cookieSet, { path: '/',maxAge:duration });
  cookies.set('cookieChoice', 'set', { path: '/',maxAge:duration });
  setOpen(false);
};
const saveAllCookies = () => {

  setCookieOptions(cookieOptions)
  cookies.set('cookieOptions', cookieOptions, { path: '/',maxAge:duration });
  cookies.set('cookieChoice', 'set', { path: '/',maxAge:duration });
  setOpen(false);
};

  return (
    <React.Fragment>

      {open==false && data.showCookieTrigger===true &&
      <Cookie className={styles.cookieTrigger} onClick={handleSetOpen} />
      }
      {open==false
        ? null
      :
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {bannerType=='banner' &&
          <Box className={styles.wrapper}>
            <Typography variant="body1">
              We use tracking cookies to understand how you use the product
              and help us improve it.
              Please accept cookies to help us improve.
            </Typography>
            <Button variant="contained" onClick={acceptCookies}>  {/* new */}
              {data.buttons.acceptCookies.label}
            </Button>
            <Button variant="contained" onClick={declineCookies}> {/* new */}
            {data.buttons.declineCookies.label}
            </Button>
          </Box>
        }
        {bannerType=='popup' &&
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Cookie Policy"}
            </DialogTitle>
            <DialogContent>

                {cookiePolicyText}
                {Object.keys(data.cookies).map((category,index) => (
                <Accordion className={styles.accordion} key={index}>
                <AccordionSummary
                className={styles.accordionSummary}
                category={category}
                  label={data.cookies[category].label}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" class={styles.cookieCategoryDescription}>{data.cookies[category].description}</Typography>
                  <TableContainer className={styles.cookieTable}>
                  <Table><TableBody>
                    {data.cookies[category].cookies.map((cookie,index) => (
                      <TableRow key={index}>
                        <TableCell >{cookie.name}</TableCell>
                        <TableCell >{cookie.description}</TableCell>
                        <TableCell >{cookie.duration}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody></Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
              ))}

            </DialogContent>
            <DialogActions sx={{my:1}}>
              <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:.4,sm:0}} alignItems="center" sx={{mx:2,width:'100%'}} justifyContent="space-between">
              <Button className={styles.buttonBlue} sx={{width:{xs:'100%',sm:'inherit'}}}  variant="contained" onClick={declineAllCookies}>{data.buttons.declineAll.label}
              </Button>
              <Button className={styles.buttonBlue} sx={{width:{xs:'100%',sm:'inherit'}}} variant="contained" onClick={saveAllCookies} autoFocus>
                {data.buttons.savePrefs.label}
              </Button>
              <Button className={styles.buttonBlue} sx={{width:{xs:'100%',sm:'inherit'}}} variant="contained" onClick={acceptAllCookies} autoFocus>
                {data.buttons.acceptAll.label}
              </Button>
              </Stack>
            </DialogActions>
          </Dialog>
          }
      </Backdrop> }
    </React.Fragment>
  );
}

export default CookieBanner;