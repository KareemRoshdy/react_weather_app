import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./left-side.css";

const LeftSide = ({ data }) => {
  return (
    <div className="left-side">
      <CurrentWeather data={data} />
      <Forecast data={data} />
    </div>
  );
};

export default LeftSide;
