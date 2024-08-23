import React from 'react';
import solarSystemImage from '../assets/Edu_Images/ss.jpg';
import earthImage from '../assets/Edu_Images/earth.gif';
import moonImage from '../assets/Edu_Images/moon.gif';
import marsImage from '../assets/Edu_Images/mars.gif';

function SolarSystem() {
  return (
    <div className="planet bg-white rounded-lg overflow-hidden shadow-md">
      <img src={solarSystemImage} alt="Solar System" className="w-full  h-1/2 md:h-auto object-cover" />
      <div className="planet-action flex items-center justify-between p-4">
        <h3 className="text-lg font-semibold">Solar System</h3>
        <button className="pic bg-black text-white px-4 py-2 rounded-lg"><a href="https://celestia-solar-system.onrender.com" target='_blanl'>Visit</a></button>
      </div>
    </div>
  );
}

function Planet({ name, image, link }) {
  return (
    <div className="planet w-full md:w-64 h-64 border border-gray-300 shadow-md ">
      <img src={image} alt={`${name} Image`} className="w-full h-3/4 object-cover rounded-t-md" />
      <div className="planet-action flex justify-between items-center p-4">
        <h3 className='font-semibold'>{name}</h3>
        <button className="pic px-4 py-2 bg-black text-white text-sm font-bold rounded-md"><a href={link} target='_blank'>Visit</a></button>
      </div>
    </div>
  );
}

function Planets() {
  const planets = [
    { name: 'Earth', image: earthImage ,link:'https://celestia-earth.onrender.com'},
    { name: 'Moon', image: moonImage,link:'https://celestia-moon.onrender.com'  },
    { name: 'Mars', image: marsImage, link:'https://celestia-mars.onrender.com' }
  ];

  return (
    <div className="planets flex flex-wrap justify-center h-full py-10 px-4 md:px-16">
      {planets.map((planet, index) => (
        <Planet key={index} name={planet.name} image={planet.image} link={planet.link} />
      ))}
    </div>
  );
}

const Visit = () => {
  return (
    <>
      <SolarSystem />
      <Planets />
    </>
  );
}

export default Visit;
