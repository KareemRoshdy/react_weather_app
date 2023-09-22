const CardItem = ({ day }) => {
  return (
    <li className="card-item flex align-center ">
      <div className="icon-wrapper flex align-center gap-10">
        <img
          src={day?.day.condition.icon}
          alt="icon"
          width="30"
          height="30"
          className="weather-icon"
        />
        <span className="span">
          <p className="title-2">{day?.day.maxtemp_c}</p>
        </span>
      </div>
      <p className="label-1">{day?.day.condition.text}</p>
      <p className="label-1">{day?.date}</p>
    </li>
  );
};

export default CardItem;
