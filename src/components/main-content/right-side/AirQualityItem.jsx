import React from "react";

const AirQualityItem = ({ number, name, sub }) => {
  return (
    <li className="card-item">
      <p className="title-1">{number}</p>
      <p className="label-1">
        {name}
        <sub>{sub}</sub>
      </p>
    </li>
  );
};

export default AirQualityItem;
