import React, { useState, useEffect } from 'react';
import defaultImg from '../assets/Edu_Images/default.jpg';
import { Link } from 'react-router-dom';

const NewsBox = () => {
    const [articles, setArticles] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(
                    "https://api.spaceflightnewsapi.net/v4/articles/?format=json&is_featured=true"
                );
                const data = await response.json();
                setArticles(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchArticles();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 2) % articles.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [articles]);

    const handleClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="mt-20 mb-50 mx-4">
            <h1 className="text-4xl text-center md:text-left md:ml-5 font-bold mb-8 pb-8">Featured News</h1>
            <div className="flex flex-col md:flex-row mx-auto justify-center md:justify-evenly ">
                {articles.slice(index, index + 2).map((article, idx) => (
                    <div key={idx} className="w-full md:w-2/5 min-w-80  bg-white border border-gray-200 rounded-md shadow-md overflow-hidden  mb-8 md:mb-0 transform transition duration-500 hover:scale-105">
                        <img
                            className="w-full h-56 object-cover"
                            src={article.image_url || defaultImg}
                            onError={(e) => { e.target.onerror = null; e.target.src = defaultImg }}
                            alt="Card Image"
                        />
                        <div className="p-4">
                            <h1 className="text-lg font-bold mb-2 truncate">{article.title}</h1>
                            <div className="flex justify-between text-sm text-gray-500 mb-2">
                                <h5 className="font-medium">{article.news_site}</h5>
                                <h5 className="font-medium">{new Date(article.published_at).toLocaleDateString()}</h5>
                            </div>
                            <button className="float-right bg-black text-white rounded-md px-4 my-5 py-2 mx-auto block" onClick={() => handleClick(article.url)}>Read Full Article</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Link to='/news' className="bg-black text-white rounded-md px-5 py-3 mt-8 mb-20 hover:bg-gray-800  transition duration-300 transform hover:scale-105">Read More News</Link>
            </div>
        </div>
    );
};

export default NewsBox;
