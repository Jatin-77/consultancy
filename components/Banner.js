import React from 'react'
import Image from "next/image";


export default function Banner() {
  return (
    <div className="w-full">
      <Image
        src="/images/banner.jpeg"
        alt="ADI Consultancy Banner"
        width={1536}
        height={1007}
        priority
        className="w-full h-auto rounded-xl shadow-lg"  
      />
     
    </div>
  );
}