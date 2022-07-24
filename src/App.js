import React from "react";

const api = {
  key: process.env.AUTH_KEY,
  base: process.env.BASE_URL,
};

function App() {
  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>{" "}
        <div className="location-box">
          <div className="location"> New York City, USA </div>{" "}
          <div className="date"> {dateBuilder(new Date())} </div>{" "}
        </div>{" "}
        <div className="weather-box">
          <div className="temp">15° </div> <div className="weather">Sunny </div>{" "}
        </div>{" "}
      </main>{" "}
    </div>
  );
}

export default App;
