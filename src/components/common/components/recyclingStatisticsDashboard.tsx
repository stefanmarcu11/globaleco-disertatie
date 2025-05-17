import React, { useState, useEffect } from "react";
import "../styleCss/recyclingStatisticsDashboard.css";

const RecyclingStatisticsDashboard: React.FC = () => {
  const [liveData, setLiveData] = useState({
    wasteRecycled: 0, // in tons
    energySaved: 0, // in kWh
    co2Reduced: 0, // in kg
  });

  const [userContributions, setUserContributions] = useState({
    totalUsers: 0,
    userWasteRecycled: 0, // in kg
  });

  // Simulate fetching live data
  useEffect(() => {
    const fetchLiveData = () => {
      // Replace this with an actual API call
      setLiveData({
        wasteRecycled: Math.random() * 1000, // Simulated data
        energySaved: Math.random() * 5000, // Simulated data
        co2Reduced: Math.random() * 2000, // Simulated data
      });

      setUserContributions({
        totalUsers: Math.floor(Math.random() * 1000), // Simulated data
        userWasteRecycled: Math.random() * 100, // Simulated data
      });
    };

    const interval = setInterval(fetchLiveData, 10000); // Update every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="recycling-statistics-dashboard">
      <h2 className="dashboard-title">Recycling Statistics Dashboard</h2>
      <div className="statistics-container">
        {/* Live Data Section */}
        <div className="statistics-card live-data">
          <h3 className="card-title">Live Data</h3>
          <div className="card-content">
            <div className="item">
              <span className="stat-icon">♻️</span>
              <span className="stat-label">Waste Recycled:</span>
              <span className="stat-value">{liveData.wasteRecycled.toFixed(2)} tons</span>
            </div>
            <div className="item">
              <span className="stat-icon">⚡</span>
              <span className="stat-label">Energy Saved:</span>
              <span className="stat-value">{liveData.energySaved.toFixed(2)} kWh</span>
            </div>
            <div className="item">
              <span className="stat-icon">🌍</span>
              <span className="stat-label">CO2 Reduced:</span>
              <span className="stat-value">{liveData.co2Reduced.toFixed(2)} kg</span>
            </div>
          </div>
        </div>

        {/* User Contributions Section */}
        <div className="statistics-card user-contributions">
          <h3 className="card-title">User Contributions</h3>
          <div className="card-content">
            <div className="item">
              <span className="stat-icon">👥</span>
              <span className="stat-label">Total Users:</span>
              <span className="stat-value">{userContributions.totalUsers}</span>
            </div>
            <div className="item">
              <span className="stat-icon">📦</span>
              <span className="stat-label">Waste Recycled by Users:</span>
              <span className="stat-value">{userContributions.userWasteRecycled.toFixed(2)} kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingStatisticsDashboard;
