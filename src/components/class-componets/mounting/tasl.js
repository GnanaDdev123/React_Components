import React, { useState } from 'react';

 export const CircleCreator = () => {
  const [circles, setCircles] = useState([]);

  // Function to create a random circle
  const createCircle = () => {
    const newCircle = {
      id: circles.length + 1,
      x: Math.random() * 400, // Random x position (adjust as needed)
      y: Math.random() * 400, // Random y position (adjust as needed)
      radius: Math.random() * 30 + 10 // Random radius between 10 and 40
    };
    setCircles([...circles, newCircle]);
  };

  return (
    <div>
      <button onClick={createCircle}>Create Circle</button>
      <div style={{ position: 'relative', width: '400px', height: '400px', border: '1px solid black' }}>
        {circles.map(circle => (
          <div
            key={circle.id}
            style={{
              position: 'absolute',
              left: circle.x,
              top: circle.y,
              width: circle.radius * 2,
              height: circle.radius * 2,
              borderRadius: '50%',
              backgroundColor: 'red'
            }}
          />
        ))}
      </div>
    </div>
  );
};

// export default CircleCreator;
