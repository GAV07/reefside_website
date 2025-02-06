import React from 'react';
import Image from 'next/image';

export function StaticBackground({ className }) {
  

  return (
    <div className={className}>
     <Image src="/home/reefside-mac2.jpg" layout="fill" objectFit="cover" />
    </div>
  );
}

export default StaticBackground;