// components/StarrySky/StarrySky.js
import React, { useEffect } from 'react';
import styles from './StarrySky.module.css';

export default function Anime(){
  useEffect(() => {
    const numStars = 50; // Adjust the number of stars as needed
    const sky = document.querySelector(`.${styles.starrySky}`);

    // Create stars and add them to the sky
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add(styles.star);
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      sky.appendChild(star);
    }

    // Function to randomly change the opacity of stars to create twinkling effect
   // Function to smoothly change the opacity of stars to create a fading effect
    const fadeStars = () => {
      const stars = document.querySelectorAll(`.${styles.star}`);

      stars.forEach((star) => {
        const randomOpacity = Math.random() * 0.5 + 0.1; // Random opacity between 0.1 and 0.6
        star.style.opacity = randomOpacity;
      });

      setTimeout(fadeStars, 2000); // Adjust the interval for smoother fading effect
    };

    fadeStars();
  }, []);

  return <div className={styles.starrySky}></div>;
};

