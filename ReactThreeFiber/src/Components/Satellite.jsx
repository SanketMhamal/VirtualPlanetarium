import React, { useRef, Suspense } from 'react';
import SatelliteTracking from './SatelliteTracking';
import { Canvas } from '@react-three/fiber';
import Iss from './Iss';
import { OrbitControls,Text,ScrollControls } from '@react-three/drei';
import '../App.css'
import SatelliteInfo from './SatelliteInfo';

const Satellite = () => {


  return (
    <div className=' bg-[#000011]'>
      <SatelliteTracking />
      <div className='z-10 text-white'></div>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false} />
       
        <Suspense>
          <Iss/>
          <Text position={[0,-2,0]} scale={1} >ISS</Text>
          <Text position={[-5,0,-1]} scale={0.3}>Solar Arrays</Text>
          <Text position={[5,0,-1]} scale={0.3}>Solar Arrays</Text>
          <Text position={[0,6,-13]} scale={0.3} rotation={[0,12,0]}>Docked ATV</Text>
          <Text position={[-6,-2,0]} scale={0.8} color={'blue'}>25 <Text position={[2,0,0]} scale={0.5} >Years </Text></Text>
          <Text position={[3,-2,0]} scale={0.8} color={'blue'}>270+ <Text position={[3,0,0]} scale={0.5} >Astronauts  {'\n'}Visited </Text></Text>
        </Suspense>
      </Canvas>
      <div className='bg-[#f6f6f6] text-black p-5 m-5 rounded-md'>
        <h2 className='text-xl font-bold'>INTERNATIONAL SPACE STATION</h2>
        <h1 className='text-2xl font-bold'>About the International Space Station</h1>
        <p className='text-justify'>
        The station was designed between 1984 and 1993. Elements of the station were in construction throughout the US, Canada, Japan, and Europe beginning in the late 1980s.
        </p>
        <p className='text-justify'>
        The International Space Station Program brings together international flight crews, multiple launch vehicles, globally distributed launch and flight operations, training, engineering, and development facilities, communications networks, and the international scientific research community.
        </p>
      </div>
      <SatelliteInfo/>
    </div>
  );
};

export default Satellite;
