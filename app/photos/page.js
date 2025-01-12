"use client";

import Link from 'next/link'
import Image from 'next/image';

import React, { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((count + 1) % images.length);
  }	  
  let images = ["/next-site/uts-bldg5.jpg", "/next-site/acu.jpg"];
  let desc = ["University of Technology Sydney, Building 5", "Australian Catholic University, Strathfield Campus"];
  let alts = ["uts", "acu"]; 
  
  return (
    <div>
	  <h2>Photos</h2>	  
	  <button onClick={handleClick}>Next photo</button>
	  <h3>{desc[count]}</h3>
      <Image src= {images[count]}
        width={500} height={500} alt={alts[count]} />	  
    </div>
  );
}