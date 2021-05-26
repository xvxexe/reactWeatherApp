import React, { useState } from "react";

const Conditions = ({
  temperature,
  feels_like,
  city,
  weatherDesc,
  icon,
  country,
}) => {
  const [isEqual, setEqual] = useState(false);

  const Temperature = Math.round(temperature);
  const Feels_Like = Math.round(feels_like);
  if (Temperature === Feels_Like) {
  } else {
    setEqual(!isEqual);
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
  console.log(Feels_Like);

  return (
    <div>
      <div className="city">
        {city},{country}
      </div>
      <div className="date">
        {date}
        <br />
        {time}
      </div>
      <div className="iconImg">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      </div>
      <div className="wDescription">{weatherDesc}</div>
      <div className="temperature">
        <div className="container">
          {Math.round(temperature)} <div className="circle"></div>
        </div>
      </div>
      <div>
        <div className={isEqual ? "feelsLike" : "notFeelsLike"}>
          feels like
          <br />
          <div className="container fl">
            {Feels_Like}
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Conditions;
