import AirQuality from "./AirQuality";
import Sunrise from "./Sunrise";
import Card from "./Card";

const HighLights = ({ data }) => {
  return (
    <div className="highlight card">
      <h2 className="title-2">Today Highlights</h2>
      <div className="highlight-list">
        <div className="wrapper flex align-center space-between gap-16">
          <AirQuality data={data} />

          <Sunrise data={data} />
        </div>
        {/* % km */}
        <div className="wrapper bottom flex align-center space-between gap-16">
          <Card
            title="Humidity"
            icon="WiHumidity"
            content={`${data?.current.humidity}%`}
          />

          <Card
            title="Pressure"
            icon="MdWaves"
            content={data?.current.pressure_mb}
            sub="hPa"
          />

          <Card
            title="Visibility"
            icon="MdOutlineVisibility"
            content={`${data?.current.vis_km} km`}
          />

          <Card
            title="Feels Like"
            icon="PiThermometerHot"
            content={`${data?.current.feelslike_c}`}
            sup="&deg;c"
          />
        </div>
      </div>
    </div>
  );
};

export default HighLights;
