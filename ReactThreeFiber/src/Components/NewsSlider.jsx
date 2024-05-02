import React, { useEffect, useState } from 'react';
import defaultImg from '../assets/Edu_Images/default.jpg';

function NewsSlider() {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.spaceflightnewsapi.net/v4/articles/?format=json&is_featured=true');
        const data = await response.json();
        setArticles(data.results);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const intervalId = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isLoaded, articles]);

  const redirectToPage = (url) => {
    window.open(url, '_blank');
  };

  const renderSlides = () => {
    return articles.map((article, index) => (
      <div key={index} className={`slide ${index === slideIndex ? 'block' : 'hidden'}`} style={{ width: '100%', height: '80vh' }}>
        <img
          src={article.image_url || defaultImg}
          alt="Article"
          className="w-full h-full object-cover"
          style={{ minWidth: '100%', minHeight: '100%' }}
          onError={(e) => { e.target.onerror = null; e.target.src = defaultImg }}
        />
        <div className="slide-content absolute bottom-0 left-0 right-0 text-center bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
          <button className="bg-black text-white py-2 px-4 rounded-lg  hover:bg-gray-800 transition-colors" onClick={() => redirectToPage(article.url)}>
            Read More
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="slider-container w-full h-90vh overflow-hidden relative">
      <div className="slider flex">{renderSlides()}</div>
    </div>
  );
}

export default NewsSlider;
