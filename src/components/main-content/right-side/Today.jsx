import { useEffect, useState } from "react";
import image2 from "../../../assets/images/weather_icons/direction.png";

const Today = ({ data }) => {
  const [today, setToday] = useState([]);

  useEffect(() => {
    data && setToday(data?.forecast.forecastday[0].hour);
  }, [data]);

  return (
    <div className="today">
      <h2 className="title-2">Today at</h2>
      <div className="slider-container">
        <ul className="slider-list flex gap-16">
          {today?.map((item, index) => (
            <li className="slider-item" key={item.time}>
              <div className="card slider-card">
                <p className="body-3">
                  {index < 12
                    ? `${item.time.split(" ")[1].split(":")[0]} AM`
                    : `${item.time.split(" ")[1].split(":")[0]} PM`}
                </p>

                <img
                  src={item.condition.icon}
                  alt="imageIcon"
                  width="48"
                  height="48"
                  loading="lazy"
                  className="weather-icon"
                />

                <p className="body-3">{item.temp_c}&deg;</p>
              </div>
            </li>
          ))}
        </ul>

        <ul className="slider-list flex gap-16">
          {today.map((item, index) => (
            <li className="slider-item" key={item.time}>
              <div className="card  slider-card">
                <p className="body-3">
                  {index < 12
                    ? `${item.time.split(" ")[1].split(":")[0]} AM`
                    : `${item.time.split(" ")[1].split(":")[0]} PM`}
                </p>

                <img
                  src={image2}
                  alt="imageIcon"
                  width="48"
                  height="48"
                  loading="lazy"
                  className="weather-icon"
                  style={{ rotate: `${item.wind_degree}deg` }}
                />

                <p className="body-3">{item.wind_kph} km/h</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Today;
