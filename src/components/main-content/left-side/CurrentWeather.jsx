import { BsCalendar4, BsFillGeoAltFill } from "react-icons/bs";

const CurrentWeather = ({ data }) => {
  return (
    <div className="current-weather card">
      <h2 className="title-2">Now</h2>
      <div className="wrapper flex align-center gap-10">
        <p className="heading">
          {data?.current.temp_c}&deg;<sup>c</sup>
        </p>
        <img
          src={data?.current.condition.icon}
          alt="weatherIcon"
          className="weather-icon"
          width="100"
          height="100"
        />
      </div>
      <p className="body-3">{data?.current.condition.text}</p>

      <ul className="meta-list">
        <li className="meta-item flex align-center gap-10">
          <div className="icon">
            <BsCalendar4 />
          </div>
          <p className="title-3 meta-text">
            {data?.current.last_updated.split(" ")[0]}
          </p>
        </li>

        <li className="meta-item flex align-center gap-10">
          <span className="icon">
            <BsFillGeoAltFill />
          </span>
          <p className="title-3 meta-text">
            {data?.location?.country}, {data?.location?.name}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default CurrentWeather;
