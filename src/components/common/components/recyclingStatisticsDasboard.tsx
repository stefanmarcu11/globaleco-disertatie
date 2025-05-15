import React, { useState, useEffect } from "react";
import "../styleCss/recyclingStatisticsDasboard.css";

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

    const interval = setInterval(fetchLiveData, 5000); // Update every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="recycling-statistics-dashboard">
      <h2 className="dashboard-title">Recycling Statistics Dashboard</h2>
      <div className="live-data-section">
        <h3>Live Data</h3>
        <p>Waste Recycled: {liveData.wasteRecycled.toFixed(2)} tons</p>
        <p>Energy Saved: {liveData.energySaved.toFixed(2)} kWh</p>
        <p>CO2 Emissions Reduced: {liveData.co2Reduced.toFixed(2)} kg</p>
      </div>
      <div className="user-contributions-section">
        <h3>User Contributions</h3>
        <p>Total Users: {userContributions.totalUsers}</p>
        <p>Waste Recycled by Users: {userContributions.userWasteRecycled.toFixed(2)} kg</p>
      </div>
    </div>
  );
};

export default RecyclingStatisticsDashboard;
