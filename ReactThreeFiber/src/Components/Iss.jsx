import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

// import { Suspense } from "react";

const Iss =(props)=> {

  const gltf = useLoader(GLTFLoader, "./iss.gltf");
  return <primitive object={gltf.scene} scale={1} position={[-7, 0, -1]} rotation={[0.5,0,0]}/>;
}

useGLTF.preload('/iss.gltf')
export default Iss;