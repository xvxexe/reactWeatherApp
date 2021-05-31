import React, { useState, useEffect } from "react";

const Forecast = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [btnclick, setBtnclick] = useState("London");

  useEffect(() => {
    getData();
  }, [btnclick]);

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${btnclick}&units=metric&appid=ceb2208fbee3ca2dd61e0242ab1806b5`
    )
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        console.log(data);
      });
  };
  function updateSearch(e) {
    setSearch(e.target.value);
    console.log(search);
  }

  function getSearch(e) {
    e.preventDefault();
    setBtnclick(search);
    setSearch("");
  }

  const monthNames = [
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
  const today = new Date();
  const date = today.getDate() + " " + monthNames[today.getMonth()];
  var time = today.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div id="wrapper">
      <form onSubmit={getSearch}>
        <input
          value={search}
          onChange={updateSearch}
          placeholder="City, State"
        />
        <button type="submit">Search</button>
      </form>

      <div className="info">
        {data.cod === 200 ? (
          <>
            <div className="city">
              {data.name}, {data.sys["country"]}
            </div>
            <div className="date">
              {date} {time}
            </div>
            <div className="wDescription">{data.weather[0].description}</div>
            <div className="iconImg">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
              />
            </div>

            <div className="temperature">
              <div className="container">
                {Math.round(data.main["temp"])} <div className="circle"></div>
              </div>
            </div>
            <div className="feelsLike">
              <p>Feels Like</p>
              <div className="container fl">
                {Math.round(data.main["feels_like"])}
                <div className="circle"></div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <h1>Search a City</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forecast;
