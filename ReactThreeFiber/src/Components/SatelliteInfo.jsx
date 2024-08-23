import React from 'react';
import darkclouds from '../assets/img/darkcloud.jpg';
import geosationary from '../assets/img/geostationary.gif';
import solarplane from '../assets/img/solarplane.jpg';

const SatelliteInfo = () => {
    return (
        <div className='bg-gray-100 p-6 sm:p-8 m-5 sm:m-8 rounded-lg'>
            <div className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>What Is a Satellite?</h2>
                <p className='text-base leading-relaxed'>
                    A satellite is anything that orbits a planet or a star. Earth is a satellite orbiting the Sun. The Moon is a satellite orbiting Earth. When you launch a spacecraft into orbit around Earth, that’s a satellite, too. This kind of satellite can help us learn about Earth and the universe.
                </p>
                <img className='w-full h-72 sm:h-96 object-cover rounded-lg my-4' src={darkclouds} alt="Dark Clouds" />
            </div>

            <div className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>Why are satellites important?</h2>
                <p className='text-base leading-relaxed'>
                    The view that satellites like GPS have allows them to see large areas of Earth at one time. This means satellites can collect more data, more quickly, than instruments on the ground. Satellites also can see into space better than telescopes at Earth's surface! That's because satellites fly above the clouds, dust, and molecules in the atmosphere that can block the view from the ground.
                </p>
            </div>

            <div className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4'>What are the parts of an artificial satellite?</h2>
                <p className='text-base leading-relaxed'>
                    Man-made satellites come in many shapes and sizes. But most have at least two parts in common - an antenna and a power source. The antenna sends and receives information, usually to and from Earth. Just like a toy that requires batteries to work here on Earth, satellites need power, too! There are several types of power sources for satellites, such as solar panels or batteries. Solar panels are cool because they power the satellite by turning sunlight into electricity. Many NASA satellites carry cameras and scientific sensors. Sometimes, these instruments point toward Earth to gather information about its land, air and water. Other times, they face toward space to collect data from the solar system and universe.
                </p>
                <img className='w-full h-72 sm:h-96 object-cover rounded-lg my-4' src={solarplane} alt="Solar Plane" />
            </div>

            <div>
                <h2 className='text-2xl font-semibold mb-4'>How do satellites orbit Earth?</h2>
                <p className='text-base leading-relaxed'>
                    Most satellites are launched into space on rockets. A satellite orbits Earth when its speed is balanced by the pull of Earth's gravity. Without this balance, the satellite would fly in a straight line off into space or fall back to Earth. Satellites orbit Earth at different heights, different speeds and along different paths. The two most common types of orbit are "geostationary" (jee-oh-STAY-shun-air-ee) and "polar." A geostationary satellite travels from west to east over the equator. It moves in the same direction and at the same rate Earth is spinning. From Earth, a geostationary satellite looks like it is standing still since it is always above the same location.
                </p>
                <img className='w-full h-72 sm:h-96 object-cover rounded-lg my-4' src={geosationary} alt="Geostationary" />
            </div>
        </div>
    );
}

export default SatelliteInfo;
