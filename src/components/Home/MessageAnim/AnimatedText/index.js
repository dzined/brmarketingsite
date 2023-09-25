import React, { useState, useEffect } from 'react';
import styles from './AnimatedText.module.css'
import { Typography } from '@mui/material';
const messages = [
  <Typography key={0} variant="h2" sx={{fontWeight:200,fontFamily: "'stolzl', Helvetica, sans-serif",color:'#FFF',fontSize:'3rem'}}  gutterBottom >Your business was recognised for its <strong>good practice</strong> with fairer, <strong style={{fontWeight:800}}>more stable PII rates?</strong></Typography>,
  <Typography key={1} variant="h2" sx={{fontWeight:200,fontFamily: "'stolzl', Helvetica, sans-serif",color:'#FFF',fontSize:'3rem'}}  gutterBottom >You had <strong style={{fontWeight:500}}>better coverage</strong> by a policy created entirely for Financial Intermediaries?</Typography>,
  <Typography key={2} variant="h2" sx={{fontWeight:200,fontFamily: "'stolzl', Helvetica, sans-serif",color:'#FFF',fontSize:'3rem'}}  gutterBottom >You had the <strong style={{fontWeight:500}}>comfort</strong> of an expert critical friend for support through claims?</Typography>,
  <Typography key={2} variant="h2" sx={{fontWeight:200,fontFamily: "'stolzl', Helvetica, sans-serif",color:'#FFF',fontSize:'3rem'}}   gutterBottom >You had <strong style={{fontWeight:500}}>friendly professional guidance</strong> on how to de-risk your business further?</Typography>,
  <Typography key={2} variant="h2" sx={{fontWeight:200,fontFamily: "'stolzl', Helvetica, sans-serif",color:'#FFF',fontSize:'3rem'}}  gutterBottom >Good companies were <strong style={{fontWeight:500}}>safeguarded alongside other good companies?</strong></Typography>
];

function AnimatedText() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change message every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.fadingMessage}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`${styles.message} ${
            index === currentMessageIndex ? styles.visible : styles.hidden
          }`}
        >
          {message}
        </div>
      ))}
    </div>
  );
}

export default AnimatedText;