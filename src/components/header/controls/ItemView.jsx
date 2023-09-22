import { BsFillGeoAltFill } from "react-icons/bs";

const ItemView = ({ handelClick, c }) => {
  return (
    <div
      className="item-view flex align-center gap-16"
      onClick={() => handelClick(c.country.split(" ")[0])}
    >
      <div className="icon">
        <BsFillGeoAltFill />
      </div>

      <div className="item-name">
        <p>{c.country}</p>
        <span>
          {c.region}, {c.country.split(" ")[0]}
        </span>
      </div>
    </div>
  );
};

export default ItemView;
