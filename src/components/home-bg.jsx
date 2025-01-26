'use client'

import React from 'react';
import { motion } from 'framer-motion';

export function HomeBackground({ className }) {
  const slideIn = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const wave = {
    initial: {},
    animate: {
      scale: [1, 1.05, 1],
      x: [0, -10, 0],
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    }
  };

  return (
    <div className={className}>
      <svg
        id="visual"
        viewBox="0 0 900 450"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <rect x="0" y="0" width="900" height="450" fill="#003b46" />
        
        <motion.g
          transform="translate(900, 450)"
          variants={wave}
          initial="initial"
          animate="animate"
          style={{ border: '2px solid red' }}
          onAnimationStart={() => console.log('Right group animation started')}
          onAnimationComplete={() => {
            console.log('Right group animation completed');
            console.log('Current transform:', document.querySelector('g[transform="translate(900, 450)"]')?.getAttribute('transform'));
          }}
        >
          <motion.path
            variants={slideInRight}
            initial="initial"
            animate="animate"
            onAnimationStart={() => console.log('Right path 1 slide started')}
            d="M-292.5 0C-273.7 -35.1 -255 -70.3 -234.7 -97.2C-214.3 -124.1 -192.4 -142.9 -173.9 -173.9C-155.5 -205 -140.4 -248.4 -111.9 -270.2C-83.5 -292 -41.8 -292.3 0 -292.5L0 0Z"
            fill="#1a4752"
            style={{ border: '1px solid yellow' }}
          />
          <motion.path
            variants={slideInRight}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            onAnimationStart={() => console.log('Right path 2 slide started')}
            d="M-255.9 0C-239.5 -30.7 -223.1 -61.5 -205.3 -85.1C-187.5 -108.6 -168.4 -125 -152.2 -152.2C-136 -179.4 -122.8 -217.4 -97.9 -236.5C-73.1 -255.5 -36.5 -255.7 0 -255.9L0 0Z"
            fill="#3e616a"
            style={{ border: '1px solid yellow' }}
          />
          <motion.path
            variants={slideInRight}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            onAnimationStart={() => console.log('Right path 3 slide started')}
            d="M-219.4 0C-205.3 -26.3 -191.2 -52.7 -176 -72.9C-160.8 -93.1 -144.3 -107.2 -130.5 -130.5C-116.6 -153.8 -105.3 -186.3 -84 -202.7C-62.6 -219 -31.3 -219.2 0 -219.4L0 0Z"
            fill="#5f7c83"
            style={{ border: '1px solid yellow' }}
          />
        </motion.g>

        <motion.g
          transform="translate(0, 0)"
          variants={wave}
          initial="initial"
          animate="animate"
          style={{ border: '2px solid blue' }}
          onAnimationStart={() => console.log('Left group animation started')}
          onAnimationComplete={() => {
            console.log('Left group animation completed');
            console.log('Current transform:', document.querySelector('g[transform="translate(0, 0)"]')?.getAttribute('transform'));
          }}
        >
          <motion.path
            variants={slideIn}
            initial="initial"
            animate="animate"
            onAnimationStart={() => console.log('Left path 1 slide started')}
            d="M292.5 0C283.7 39.5 274.8 79.1 252.2 104.5C229.6 129.9 193.3 141.2 170.4 170.4C147.5 199.7 138.1 246.9 111.9 270.2C85.8 293.6 42.9 293 0 292.5L0 0Z"
            fill="#1a4752"
            style={{ border: '1px solid green' }}
          />
          <motion.path
            variants={slideIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            onAnimationStart={() => console.log('Left path 2 slide started')}
            d="M255.9 0C248.2 34.6 240.5 69.2 220.7 91.4C200.9 113.6 169.1 123.5 149.1 149.1C129.1 174.7 120.8 216 97.9 236.5C75.1 256.9 37.5 256.4 0 255.9L0 0Z"
            fill="#3e616a"
            style={{ border: '1px solid green' }}
          />
          <motion.path
            variants={slideIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            onAnimationStart={() => console.log('Left path 3 slide started')}
            d="M219.4 0C212.7 29.6 206.1 59.3 189.2 78.4C172.2 97.4 145 105.9 127.8 127.8C110.6 149.7 103.6 185.2 84 202.7C64.3 220.2 32.2 219.8 0 219.4L0 0Z"
            fill="#5f7c83"
            style={{ border: '1px solid green' }}
          />
        </motion.g>
      </svg>
    </div>
  );
}

export default HomeBackground;