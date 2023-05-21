import React, { useState, useEffect } from "react";

const CountdownTime: React.FC = () => {
  const [countdownTime, setCountdownTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (countdownTime < 1) {
      // Logic to send a signal to the Line group
      console.log("Sending signal to Line group");
    }
  }, [countdownTime]);

  return (
    <div>
      <h2>Countdown Time</h2>
      <p>Time Remaining: {countdownTime} seconds</p>
    </div>
  );
};

export default CountdownTime;
