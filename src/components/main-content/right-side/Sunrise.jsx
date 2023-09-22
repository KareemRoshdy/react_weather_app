import React from "react";
import { MdOutlineNightlight, MdOutlineWbSunny } from "react-icons/md";

const Sunrise = ({ data }) => {
  return (
    <div className="highlight-card sunrise-card card-sm">
      <div className="card-head flex align-center space-between">
        <h3 className="title-3">Sunrise & Sunset</h3>
      </div>

      <div className="card-list flex align-center gap-20">
        <div className="card-item flex align-center justify-center gap-20">
          <div className="icon">
            <MdOutlineWbSunny />
          </div>
          <div className="card-content">
            <p className="label-1">Sunrise</p>
            <p className="title-2">
              {data.forecast.forecastday[0].astro.sunrise}
            </p>
          </div>
        </div>

        <div className="card-item flex align-center justify-center gap-20">
          <div className="icon">
            <MdOutlineNightlight />
          </div>
          <div className="card-content">
            <p className="label-1">Sunset</p>
            <p className="title-2">
              {data.forecast.forecastday[0].astro.sunset}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sunrise;
