
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('earth.gltf')
  const groupRef = useRef();

  // Calculate angular velocity (ω) in radians per hour
  const angularVelocity = (2 * Math.PI) / 24;

  // Convert angular velocity to radians per frame (adjust frame rate if necessary)
  const angularVelocityPerFrame = angularVelocity / 60 / 60; // Assuming 60 frames per second

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += angularVelocityPerFrame; // Adjust rotation speed as needed
    }
  });


  return (
    <group ref={groupRef} {...props} dispose={null} >
      <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']} scale={2.128} />
    </group>
  )
}

useGLTF.preload('earth.gltf')
