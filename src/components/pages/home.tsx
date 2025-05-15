import React from 'react';
import logo from '../../assets/images/GlobalEco-logo.png';
import { DescriptionNature } from '../common/components/descriptionNature';
import { Keywords } from '../common/components/keys-list';
import { MultipleCard } from '../common/components/multiple-card';
import { Block } from '../common/footer';
import { Copyright } from '../common/copyright';
import NewsletterSection from '../common/components/news-letter-section';
import StatisticsSection from '../common/components/statistics-section';
import Navbar from '../common/nav-bar';

const HomePage: React.FC = () => {
  return (
    <>
      <div className="main">
        <div>
          <Navbar />
        </div>
        <div className="logo-and-statistics">
          {/* Logo Section */}
          <div className="logo-section">
            <img src={logo} className="logo" alt="React logo" />
          </div>
          {/* Statistics Section */}
          <StatisticsSection />
        </div>
        <Keywords />
      </div>
      <div className="description-section">
        <div className="text-section">
          <DescriptionNature />
        </div>
      </div>
      <div className="multiple-card">
        <div>
          <MultipleCard />
        </div>
      </div>
      <div>
        <NewsletterSection />
      </div>
      <div className="footer">
        <Block></Block>
        <hr className="line"></hr>
        <Copyright></Copyright>
      </div>
    </>
  );
};

export default HomePage;