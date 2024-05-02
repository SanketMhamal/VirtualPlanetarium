import React from 'react'
import { Robot } from './Robot'
import { Suspense} from 'react';
import { useRef,useEffect } from 'react'
import { Canvas } from '@react-three/fiber';
import { EduTopSection } from './EduTopSection'
import { EduContainer } from './EduContainer'
const Educational = () => {
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
    <EduTopSection/>
    <Canvas >
      <Suspense>
        <Robot scale={2.4}/>
      </Suspense>
    </Canvas>
    </div>
    <EduContainer/>
    </>
  )
}

export default Educational