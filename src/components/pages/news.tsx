import React from "react";
import "../pages/styleCss/newsPage.css";
import UpcomingEvents from "../common/components/upcomingEvents";
import EducationalArticles from "../common/components/educationalArticles";
import RecyclingStatisticsDashboard from "../common/components/recyclingStatisticsDasboard";

const NewsPage: React.FC = () => {
    return (
        <div className="news-page">
            <h1 className="news-title">News</h1>
            <p className="news-description">
                Stay updated with the latest news, events, and initiatives related to recycling and sustainability.
            </p>
            <RecyclingStatisticsDashboard />
            <UpcomingEvents />
            <EducationalArticles />
        </div>
    );
};

export default NewsPage;