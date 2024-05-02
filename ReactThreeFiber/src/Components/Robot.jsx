
import React, { useRef, useLayoutEffect  } from 'react'
import { useGLTF , useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";
import {Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'

export function Robot(props) {
  const { nodes, materials } = useGLTF('./rover-transformed.glb')
  const robot = useRef()
  const radius = 0.8; // Radius of the circular path
  const speed = 0.7; // Speed of movement
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // Calculate the position in the XZ plane using circular motion equations
    const x = 0.75 + radius * Math.cos(speed * elapsedTime);
    const z = 0.55 + radius * Math.sin(speed * elapsedTime);

    // Set rover position
    robot.current.position.set(x, -0.25, z);

    // Set rover rotation
    robot.current.rotation.y = -speed * elapsedTime;
  });

  return <>
    <color attach="background" args={["#040013"]} /> 
    <ambientLight intensity={0} />
    <spotLight position={[-1, 1, 3]} angle={1} penumbra={1} castShadow intensity={1} shadow-bias={-0.0001} />
    <Environment 
      preset='dawn'    
    />
    <Sparkles size={4} color={"#aaa"} scale={[10,10,10]}></Sparkles>

    <group {...props} dispose={null} ref={robot} >
    <group position={[0.64, -0.065, 0.25]} rotation={[0, 0, 0]} scale={0.2}>
      {/* <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} scale={0.01} /> */}
      <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} scale={0.01} > 
        <meshPhysicalMaterial 
              color="#333"  
              roughness={0.2}
              metalness={1}
              reflectivity={0.5}
              iridescence={0.3}
              iridescenceIOR={1}
              iridescenceThicknessRange={[100,1000]}           
            />
      </mesh>
      <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} scale={0.01} > 
        <meshPhysicalMaterial 
                color="#aaa"  
                roughness={0.2}
                metalness={1}
                reflectivity={0.5}
                iridescence={0.3}
                iridescenceIOR={1}
                iridescenceThicknessRange={[100,1000]}           
              />
      </mesh>
      <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} scale={0.01} > 
        <meshPhysicalMaterial 
                  color="#fff"  
                  roughness={0.2}
                  metalness={1}
                  reflectivity={0.5}
                  iridescence={0.3}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[100,1000]}           
                />
      </mesh>

      <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} scale={0.01} >
      <meshPhysicalMaterial 
                  color="#151212"  
                  roughness={1}
                  metalness={0}
                  reflectivity={0.5}
                  iridescence={0.3}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[100,1000]}           
                />
      </mesh>
      <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} scale={0.01} >
      <meshPhysicalMaterial 
                  color="#333"  
                  roughness={1}
                  metalness={0}
                  reflectivity={0.5}
                  iridescence={0.3}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[100,1000]}           
                />
      </mesh>
      <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} scale={0.01} > 
      <meshPhysicalMaterial 
                  color="#1e1e1e"  
                  roughness={1}
                  metalness={0}
                  reflectivity={0.5}
                  iridescence={0.3}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[100,1000]}           
                />
      </mesh>
      <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} scale={0.01} >
      <meshPhysicalMaterial 
                  color="#1e1e1e"  
                  roughness={1}
                  metalness={0}
                  reflectivity={0.5}
                  iridescence={0.3}
                  iridescenceIOR={1}
                  iridescenceThicknessRange={[100,1000]}           
                />
      </mesh>
      <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} scale={0.01} />
       <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
          
        />
       </group>
    </group>
    </>
}

useGLTF.preload('src/assets/models/rover-transformed.glb')
