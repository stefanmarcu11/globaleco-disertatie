import React from "react";
import "../pages/styleCss/newsPage.css";
import UpcomingEvents from "../common/components/upcomingEvents";
import EducationalArticles from "../common/components/educationalArticles";
import RecyclingStatisticsDashboard from "../common/components/recyclingStatisticsDashboard";
import { Block } from "../common/footer";
import { Copyright } from "../common/copyright";

const NewsPage: React.FC = () => {
  return (
    <div className="main-div">
      <div className="news-page">
        <h1 className="news-title">News</h1>
        <p className="news-description">
          Stay updated with the latest news, events, and initiatives related to recycling and sustainability.
        </p>
        <RecyclingStatisticsDashboard />
        <UpcomingEvents />
        <EducationalArticles />
      </div>
      <div className="footer">
        <Block></Block>
        <hr className="line"></hr>
        <Copyright></Copyright>
      </div>
    </div>
  );
};

export default NewsPage;