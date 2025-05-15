import React from "react";
import "../styleCss/educationalArticles.css";

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
};

const articles: Article[] = [
  {
    id: 1,
    title: "How to Recycle Properly",
    description: "Learn the best practices for sorting and recycling materials to reduce waste effectively.",
    image: "src/assets/images/recycle-property.png",
    link: "https://www.solo.com.au/blog/how-to-recycle-properly-2/",
  },
  {
    id: 2,
    title: "The Impact of Recycling on the Environment",
    description: "Discover how recycling helps conserve resources, reduce pollution, and combat climate change.",
    image: "src/assets/images/impact-of-recycling.png",
    link: "https://www.colorado.edu/ecenter/2023/12/15/impact-recycling-climate-change",
  },
  {
    id: 3,
    title: "Sustainability Tips for Everyday Life",
    description: "Explore practical tips for living sustainably and reducing your environmental footprint.",
    image: "src/assets/images/simple-tips-sustainable.png",
    link: "https://www.cbs.de/en/blog/sustainable-living-tips-for-a-more-sustainable-lifestyle",
  },
];

const handleButtonClick = (link: string) => {
  window.open(link, "_blank", "noopener,noreferrer");
};

const EducationalArticles: React.FC = () => {
  return (
    <div className="articles-section">
      <h2 className="articles-title">Educational Articles</h2>
      <div className="articles-container">
        {articles.map((article) => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <button
                className="article-link"
                onClick={() => handleButtonClick(article.link)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalArticles;
