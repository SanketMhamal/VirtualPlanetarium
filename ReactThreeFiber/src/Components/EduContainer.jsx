import React, { useEffect, useState } from 'react';
import MercuryImage from '../assets/Edu_Images/mercury.jpg';
import VenusImage from '../assets/Edu_Images/venus.jpg';
import EarthImage from '../assets/Edu_Images/Earth.jpg';
import MarsImage from '../assets/Edu_Images/mars.jpg';
import JupiterImage from '../assets/Edu_Images/Jupiter.jpg';
import SaturnImage from '../assets/Edu_Images/saturn.jpg';
import UranusImage from '../assets/Edu_Images/Uranus.jpg';
import NeptuneImage from '../assets/Edu_Images/neptune.jpg';

function PlanetCard({ planet }) {
  // Map the planet name to the corresponding image
  const planetImages = {
    Mercury: MercuryImage,
    Venus: VenusImage,
    Earth: EarthImage,
    Mars: MarsImage,
    Jupiter: JupiterImage,
    Saturn: SaturnImage,
    Uranus: UranusImage,
    Neptune: NeptuneImage,
  };

  return (
    <div className="planet-card bg-white rounded-lg overflow-hidden shadow-md flex flex-row w-full mb-8 font-poppins font-semibold">
      {/* Use the dynamic image source based on the planet's name */}
      <img src={planetImages[planet.name]} alt={`${planet.name} Image`} className="w-1/3 h-auto object-cover" />      
      <div className="planet-details flex flex-col justify-center p-4 w-2/3 ">
        {Object.entries(planet).map(([key, value]) => (
          <p key={key} className="my-2">{`${key}: ${value}`}</p>
        ))}
      </div>
    </div>
  );
}

export function EduContainer() {
  const [planets, setPlanets] = useState([]);
  const apiKey = '6x+tuH89G1+9/y5f5NYevQ==aNxDOw06o2I5H32s';
  const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const responses = await Promise.all(
        planetNames.map((planet) =>
          fetch(`https://api.api-ninjas.com/v1/planets?name=${planet}`, {
            headers: {
              'X-Api-Key': apiKey,
              'Content-Type': 'application/json',
            },
          })
        )
      );

      const data = await Promise.all(responses.map((response) => response.json()));
      setPlanets(data.map((planetData) => planetData[0]));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div id="scroll-target" className="w-10/12 max-w-3xl mx-auto h-80vh left-4 bg-opacity-25 xl:mt-20 flex flex-col items-start justify-center pt-2 pl-8 z-10">
        <h1 className="m-0 text-black font-extrabold mt-0 xl:mt-0 text-3xl md:text-5xl w-full mb-8 font-poppins">Explore Educational Content</h1>
        <h3 className="text-black font-semibold mt-4 mb-3 text-xl md:text-2xl">Our Planets</h3>
        <div className="planet-container flex flex-wrap gap-8 justify-center items-center">        
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>
      </div>
    </>
  );
}
