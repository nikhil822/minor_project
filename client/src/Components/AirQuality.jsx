import { useState, useEffect } from "react";
import "../Styles/AirQuality.css";
import { useNavigate } from "react-router-dom";

const urlLocation =
  // `https://api.openweathermap.org/geo/1.0/zip?zip=301019,IN&appid=${import.meta.env.REACT_APP_API_KEY}`;
  `https://api.openweathermap.org/geo/1.0/zip?zip=768018,IN&appid=0223c39a61c5120938eb1733b306d0b1`;

const AirQuality = () => {
  const [name, setName] = useState();
  const [aqi, setAqi] = useState({});
  const [status, setStatus] = useState();
  const navigate = useNavigate();
  let longitude, latitude;

  useEffect(() => {
    const fetch = async () => {
      if (!localStorage.getItem("user-app")) {
        navigate("/login");
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const api = async () => {
      const res = await fetch(urlLocation);
      const data = await res.json();
      setName(data.name);
      longitude = data.lon;
      latitude = data.lat;
      // console.log(data)
    };
    api().then(() => {
      api1();
    });
  }, []);

  const api1 = async () => {
    if (latitude && longitude) {
      const response = await fetch(
        // `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.REACT_APP_API_KEY}`
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=0223c39a61c5120938eb1733b306d0b1`
      );
      const dat = await response.json();
      const aqiData = dat.list[0].components;
      if (
        (aqiData.so2 >= 0 && aqiData.so2 < 20) ||
        (aqiData.no2 >= 0 && aqiData.no2 < 40) ||
        (aqiData.o3 >= 0 && aqiData.o3 < 60) ||
        (aqiData.co >= 0 && aqiData.co < 4400)
      )
        setStatus("Good");
      if (
        (aqiData.so2 >= 20 && aqiData.so2 < 80) ||
        (aqiData.no2 >= 40 && aqiData.no2 < 70) ||
        (aqiData.o3 >= 60 && aqiData.o3 < 100) ||
        (aqiData.co >= 4400 && aqiData.co < 9400)
      )
        setStatus("Fair");
      if (
        (aqiData.so2 >= 80 && aqiData.so2 < 250) ||
        (aqiData.no2 >= 70 && aqiData.no2 < 150) ||
        (aqiData.o3 >= 100 && aqiData.o3 < 140) ||
        (aqiData.co >= 9400 && aqiData.co < 12400)
      )
        setStatus("Moderate");
      if (
        (aqiData.so2 >= 250 && aqiData.so2 < 350) ||
        (aqiData.no2 >= 150 && aqiData.no2 < 200) ||
        (aqiData.o3 >= 140 && aqiData.o3 < 180) ||
        (aqiData.co >= 12400 && aqiData.co < 15400)
      )
        setStatus("Poor");
      if (
        aqiData.so2 >= 350 ||
        aqiData.no2 >= 200 ||
        aqiData.o3 >= 180 ||
        aqiData.co >= 15400
      )
        setStatus("Very Poor");

      console.log(aqiData);
      setAqi(aqiData);
      // console.log(aqi)
    }
  };

  return (
    <>
      <div className="container-aq">
        <h1 className="head">AQI</h1>
        <h3>{name}</h3>
        <div
          className="remark"
          style={{
            backgroundColor:
              status === "Good"
                ? "green"
                : status === "Fair"
                ? "yellow"
                : status === "Moderate"
                ? "orange"
                : status === "poor"
                ? "#e10b41"
                : "#9f0a0a81",
          }}
        >
          {status}
        </div>
        <div className="poll-level">
          <div className="col1">
            <span>Carbon Monoxide(CO)</span>
            <div className="fields">{aqi.co}</div>
            <span>Nitrogen Monoxide(NO)</span>
            <div className="fields">{aqi.no}</div>
            <span>Nitrogen Dioxide(NO2)</span>
            <div className="fields">{aqi.no2}</div>
          </div>
          <div className="col2">
            <span>Ozone(O3)</span>
            <div className="fields">{aqi.o3}</div>
            <span>Sulpher Dioxide(SO2)</span>
            <div className="fields">{aqi.so2}</div>
            <span>Ammonia</span>
            <div className="fields">{aqi.nh3}</div>
          </div>
        </div>
        <button className="btn" onClick={() => navigate("/plantrecom")}>
          Recommendation
        </button>
      </div>
    </>
  );
};

export default AirQuality;
