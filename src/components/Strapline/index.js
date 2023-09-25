import { Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import styles from './Strapline.module.css'
import gsap from 'gsap'
export default function Strapline() {

  const [letterX, setLetterX] = useState({});

  useEffect(() => {
    const letters = "My company is great".split("");

    let x = 0;
    letters.forEach((letter, index) => {
      setTimeout(() => {
        setLetterX(prev => ({...prev, [index]: x}));
        x += LETTER_SPACING;
      }, index * 70);
    })

  }, []);

  return (
    <svg width="100%" height="100%">

      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0CDEFF"/>
          <stop offset="100%" stopColor="#9308FF"/>
        </linearGradient>
      </defs>

      <rect x={0} y={0} width="100%" height="100%" fill="url(#gradient)" />

      {letters.map((letter, index) => (
        <text
          key={index}
          x={letterX[index]}
          y={50}
        >
          {letter}
        </text>
      ))}

    </svg>
  );

}