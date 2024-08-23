import React, { useState, useEffect } from 'react';
import axios from 'axios';



const ImagOD = () => {
    const [apodData, setApodData] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.nasa.gov/planetary/apod', {
                    params: {
                        api_key: apiKey,
                    },
                });
                setApodData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="fourth bg-gray-100 py-20">
            <div className="container mx-auto flex flex-col  xl:space-x-10 md:flex-row items-center justify-center">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <div id="left-section" className="md:text-left md:w-1/2 px-5 text-justify">
                            <p className="text-2xl font-bold mb-4">T O D A Y</p>
                            <h1 className="text-4xl font-bold mb-4">Image Of The Day</h1>
                            <h3 className="text-xl font-semibold mb-4 ">{apodData.title}</h3>
                            <p className="text-lg text-justify">{apodData.explanation}</p>
                        </div>
                        <div id="img-section" className="px-2 md:w-1/2 mt-8 md:mt-0 md:h-1/3">
                            <img src={apodData.url} alt={apodData.title} className="mx-auto rounded-md shadow-md  max-w-full h-auto" />
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default ImagOD