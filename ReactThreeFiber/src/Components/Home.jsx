import React from 'react'
import { useRef,useEffect } from 'react'
import Earth from './Earth'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { TopSection } from './TopSection'
import ImgOD from './ImagOD'
import NewsBox from './NewsBox'




const Home = () => {

  const containerRef = useRef(null);

// Function to resize the canvas

// Add event listener for window resize
useEffect(() => {
  const canvas = containerRef.current;
  console.log('canvas', canvas);
  if (!canvas) return;

  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  console.log(height)
  canvas.style.width ='100%';
  canvas.style.height = '100vh';
}, []);

  return (
    <>
    <div  ref={containerRef} style={{ width: "100%", height: "100%" }}>
    <TopSection/>
    <Canvas >
      <Suspense>
        <Earth/>
      </Suspense>
    </Canvas>
    </div>
    <ImgOD/>
    <NewsBox/>
    </>
  )
}

export default Home