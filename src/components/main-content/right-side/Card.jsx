import { MdOutlineVisibility, MdWaves } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { PiThermometerHot } from "react-icons/pi";

const Card = ({ icon, title, content, sub, sup }) => {
  if (icon === "WiHumidity") icon = <WiHumidity />;
  if (icon === "MdWaves") icon = <MdWaves />;
  if (icon === "MdOutlineVisibility") icon = <MdOutlineVisibility />;
  if (icon === "PiThermometerHot") icon = <PiThermometerHot />;

  return (
    <div className="highlight-card  card-sm">
      <div className="card-head flex align-center space-between">
        <h3 className="title-3">{title}</h3>
      </div>
      <div className="card-list flex align-center gap-20">
        <div className="card-item flex align-center justify-center gap-20">
          <div className="icon">{icon}</div>
          <div className="card-content">
            <p className="title-1">
              {content}
              <sub>{sub}</sub>
              <sup>{sup}</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
