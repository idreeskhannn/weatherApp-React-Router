import React from "react"

import { useState, useEffect } from "react";
import Clear from "./images/clear.gif";
import Cloudy from "./images/cloudy.gif";
import Overcast from "./images/smoke.jpg";
import Rainy from "./images/rainy.gif";
import Snow from "./images/snow.gif";

const Weather=_=>{
  const [place, setPlace] = useState("islamabad");
  const [info, setInfo] = useState({});

  useEffect(() => {
    Fetch();
  }, []);

  const Fetch = () => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=d08d88f4b53d43e3b0a170442222002&q=${place}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) =>
        setInfo({
          names: data.location.name,
          country: data.location.country,
          calcious: {
            current: data.current.temp_c,

          },
          condition: data.current.condition.text
        })
      );

    setPlace("");
  };



  return (
    <div
      className="app mx-auto"
      style={
        info.condition?.toLowerCase() === "clear" ||
          info.condition?.toLowerCase() === "sunny"
          ? { backgroundImage: `url(${Clear})` }
          : info.condition?.includes("cloudy")
            ? { backgroundImage: `url(${Cloudy})` }
            : info.condition?.toLowerCase().includes("rainy")
              ? { backgroundImage: `url(${Rainy})` }
              : info.condition?.toLowerCase().includes("snow")
                ? { backgroundImage: `url(${Snow})` }
                : { backgroundImage: `url(${Overcast})` }
      }
    >
      <div className="box">
        <div className="box1">

        <input
          type="text"
          className=" form-control input-group "
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
      
        < button onClick={Fetch} className="btn btn btn-info">
          Search
        </button>

          </div>



        <h1>{place}</h1>

        <div className="weather">
          <h2 className="">
            {info.names}, {info.country}
          </h2>


          <h1> Current: {info.calcious?.current}° C</h1>
         
            <h1>Condition: {info.condition}</h1>
          </div>
        </div>
      </div>
      );
}

      export default Weather;