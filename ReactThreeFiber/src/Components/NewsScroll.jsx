import React, { useEffect, useState } from "react";
import defaultImg from "../assets/Edu_Images/default.jpg";

function NewsCard({ article }) {
  const publishedDate = new Date(article.published_at);
  const formattedDate = publishedDate.toLocaleDateString();

  const defaultImageUrl = "src/assets/Edu_Images/default.jpg";
  const isImageUrlValid = (url) => /\.(png|jpg|jpeg)$/i.test(url);
  const imageUrl = isImageUrlValid(article.image_url)
    ? article.image_url
    : defaultImageUrl;

  const redirectToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="card max-w-xs w-full min-w-200 min-h-300 overflow-hidden border border-gray-200 shadow-md rounded-md">
      <img
        className="card-img w-full h-40 object-cover"
        src={imageUrl}
        alt="Article Image"
      />
      <div className="card-body p-4">
        <h1 className="card-title text-lg font-semibold mb-2">{article.title}</h1>
        <div className="card-details flex justify-between text-sm text-gray-500 mb-2">
          <h5 className="font-medium">{article.news_site || "Unknown Site"}</h5>
          <h5 className="font-medium">{formattedDate || "Unknown Date"}</h5>
        </div>
        <button
          className=" card-btn w-fit text-white bg-black rounded-md py-2 px-4 hover:bg-gray-800 transition-colors"
          onClick={() => redirectToPage(article.url)}
        >
          Read More
        </button>
      </div>
    </div>
  );
}

function NewsPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?is_featured=false")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mt-10 mb-10">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsPage;
