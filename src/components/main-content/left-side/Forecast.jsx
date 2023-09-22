import { useEffect, useState } from "react";
import CardItem from "./CardItem";

const Forecast = ({ data }) => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    data && setDays(data?.forecast.forecastday);
  }, [data]);

  return (
    <div className="forecast">
      <h2 className="title-2">
        {data?.forecast.forecastday.length} Days Forecast
      </h2>
      <div className="card">
        <ul>
          {days && days.map((day) => <CardItem key={day.date} day={day} />)}
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
