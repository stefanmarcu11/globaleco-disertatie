import React, { useState, useEffect } from "react";

const StatisticsSection: React.FC = () => {
  const [collectionPoints, setCollectionPoints] = useState(0);
  const [peopleInvolved, setPeopleInvolved] = useState(0);
  const [wasteRecycled, setWasteRecycled] = useState(0);

  // Target values for the statistics
  const targetCollectionPoints = 10;
  const targetPeopleInvolved = 400000;
  const targetWasteRecycled = 50000;

  useEffect(() => {
    // Function to increment numbers
    const incrementNumber = (
      setValue: React.Dispatch<React.SetStateAction<number>>,
      targetValue: number,
      increment: number
    ) => {
      const interval = setInterval(() => {
        setValue((prev) => {
          if (prev + increment >= targetValue) {
            clearInterval(interval);
            return targetValue;
          }
          return prev + increment;
        });
      }, 50); // Adjust speed of animation
    };

    // Start animations for each statistic
    incrementNumber(setCollectionPoints, targetCollectionPoints, 1);
    incrementNumber(setPeopleInvolved, targetPeopleInvolved, 5000);
    incrementNumber(setWasteRecycled, targetWasteRecycled, 500);

    // Cleanup intervals
    return () => {
    };
  }, []);

  return (
    <div className="statistics-section">
      <div className="statistics-numbers">
        <div className="stat-item">
          <h2>{collectionPoints}+</h2>
          <p>Collection Points</p>
        </div>
        <div className="stat-item">
          <h2>{peopleInvolved.toLocaleString()}+</h2>
          <p>People Involved</p>
        </div>
        <div className="stat-item">
          <h2>{wasteRecycled.toLocaleString()}+</h2>
          <p>Tons of Waste Recycled</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;