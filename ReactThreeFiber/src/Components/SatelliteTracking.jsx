import React from 'react'
import Globe from 'react-globe.gl'
import { useMemo } from 'react';
import { useState, useEffect, useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as THREE from '//unpkg.com/three/build/three.module.js';
import earth from '../assets/img/earth.jpg';

const SatelliteTracking = () => {
  const EARTH_RADIUS_KM = 6371; // km
  const SAT_SIZE = 8; // km
  const TIME_STEP = 3 * 1000; // per frame
  const globeEl = useRef();
  const [satData, setSatData] = useState();
  const [globeRadius, setGlobeRadius] = useState();
  const [satelliteModel, setSatelliteModel] = useState(null);
  const [glbAlt, setGlbAlt] = useState();


  const w = window.innerWidth;
  const shiftFactor = 0.5;
  const shiftAmmount = shiftFactor * w;


  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      'iss.gltf',
      (gltf) => {
        setSatelliteModel(gltf.scene);
        gltf.scene.scale.set(1, 1, 1);
      },
      undefined,
      (error) => {
        console.error('Error loading satellite model:', error);
      }
    );
  }, []);

  useEffect(() => {

    // load satellite data
    const interval = setInterval(() => {
      fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => response.json())
        .then(data => {
          setSatData([data]); 
        })
        .catch(error => {
          console.error('Error fetching satellite data:', error);
        });
    }, 1 * 1000);

    return () => clearInterval(interval);
  });

  const objectsData = useMemo(() => {
    if (!satData) return [];
    console.log();
    return satData.map(d => ({
      name: d.name,
      lat: d.latitude,
      lng: d.longitude,
      alt: (d.altitude / EARTH_RADIUS_KM)// Altitude adjusted to match previous units
    }));
  });


  const satObject = useMemo(() => {
    const satGeometry = new THREE.OctahedronGeometry(SAT_SIZE / 2, 0);
    const satMaterial = new THREE.MeshLambertMaterial({ color: 'palegreen', transparent: true, opacity: 0.7 });
    return new THREE.Mesh(satGeometry, satMaterial);

  }, [satData]);

  const setPointOfView = (longitude, latitude) => {
    console.log(longitude, latitude)
    globeEl.current.pointOfView({ altitude: glbAlt, lat: latitude, lng: longitude });
  }

  useEffect(() => {
    setGlobeRadius(globeEl.current.getGlobeRadius());
    setGlbAlt( window.innerWidth<400 ? 3 : 1.8) 
    let alt = window.innerWidth<400 ? 3 : 1.8
    globeEl.current.controls().enableZoom = false;
    globeEl.current.pointOfView({ altitude:alt});
  }, []);



  return (
    <div className='md:flex shadow-sm '>
      <Globe
        width={window.innerWidth<750 ?window.innerWidth : shiftAmmount}
        height={500}
        ref={globeEl}
        // showGraticules={true}
        
        globeImageUrl={earth}
        objectsData={objectsData}
        objectLabel="name"
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        objectFacesSurface={true}
        objectThreeObject={satelliteModel}
      />
      {objectsData[0] ? <div id="satinfo" className='text-white p-8 m-auto text-2xl md:text-4xl font-digital'>
        <span className='flex items-center border-2 border-orange-800 px-3 rounded-md w-max hover:bg-red-600 cursor-pointer' onClick={()=>setPointOfView(objectsData[0].lat,objectsData[0].lng)}><span className='bg-red-800 w-2 h-2 rounded-full inline-block mr-2'></span>Live</span>
        <div id="time-log" >Name: <span className='px-2 '>ISS</span></div>
        <div id="time-log" >Longitude: <span className='px-2 '>{objectsData[0].lat}<span>&#176;</span></span></div>
        <div id="time-log" >Latititue:<span className='px-2 '>{objectsData[0].lng}<span>&#176;</span></span> </div>
        <div id="time-log" >Altitute: <span className='px-2 '>{(objectsData[0].alt*EARTH_RADIUS_KM)}<span></span></span></div>
      </div>:''}
    </div>
  );
}

export default SatelliteTracking