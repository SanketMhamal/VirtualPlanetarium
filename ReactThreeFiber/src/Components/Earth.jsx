import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import EarthNightMap from "../assets/textures/8k_earth_nightmap.jpg";

export default function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
      TextureLoader,
      [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();


  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
      
    // Set the tilt angle in radians
    const tiltAngle = - (23.4 * Math.PI / 180);

    // Rotate Earth and clouds around the y-axis
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudsRef.current.rotation.y = elapsedTime / 6;

    // Apply tilt around the z-axis
    earthRef.current.rotation.z = tiltAngle;
    cloudsRef.current.rotation.z = tiltAngle;
  });

  return <>
   <color attach="background" args={["#01040c"]} /> 
      <ambientLight intensity={0.5} />
    <pointLight color="#f6f3ea" position={[1, 0, 5]} intensity={9} />
    <Stars
      radius={300}
      depth={60}
      count={20000}
      factor={7}
      saturation={0}
      fade={true}
    />
    <mesh ref={cloudsRef} position={[0, 0,3]}>
      <sphereGeometry args={[1.005, 32, 32]} />
      <meshPhongMaterial
        map={cloudsMap}
        opacity={0.4}
        depthWrite={true}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </mesh>
    <mesh ref={earthRef} position={[0, 0, 3]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial specularMap={specularMap} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        metalness={0.4}
        roughness={0.7}
        side={THREE.DoubleSide}
      />
      {/* <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
        
      /> */}
    </mesh>
    </>;
}