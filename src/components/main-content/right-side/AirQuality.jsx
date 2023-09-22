import { useEffect, useState } from "react";
import { MdAir } from "react-icons/md";
import AirQualityItem from "./AirQualityItem";

const AirQuality = ({ data }) => {
  const [airQ, setAirQ] = useState({});

  useEffect(() => {
    data && setAirQ(data?.current.air_quality);
  }, [data]);
  return (
    <div className="highlight-card card-sm">
      <div className="card-head flex align-center space-between">
        <h3 className="title-3">Air Quality Index</h3>
        <span className="badge">Good</span>
      </div>

      <div className="highlight-card-content flex align-center space-between gap-20">
        <div className="icon">
          <MdAir />
        </div>

        <ul className="card-list flex align-center gap-16">
          <div className="air-index-row flex align-center gap-16">
            <AirQualityItem number={airQ.no2} name="NO" sub="2" />
            <AirQualityItem number={airQ.pm2_5} name="PM" sub="2.5" />
          </div>

          <div className="air-index-row flex align-center gap-16">
            <AirQualityItem number={airQ.pm10} name="PM" sub="10" />
            <AirQualityItem number={airQ.so2} name="SO" sub="2" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AirQuality;
