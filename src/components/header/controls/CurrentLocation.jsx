import { BiCurrentLocation } from "react-icons/bi";
import { HiSearch } from "react-icons/hi";

const CurrentLocation = ({ openSearchView, getLocation }) => {
  return (
    <div
      onClick={getLocation}
      className="current-location flex align-center gap-10"
    >
      <div className="search-sm flex align-center justify-center">
        <div className="icon" onClick={openSearchView}>
          <HiSearch />
        </div>
      </div>

      <div className="location flex align-center gap-10">
        <div className="icon">
          <BiCurrentLocation />
        </div>

        <span>current location</span>
      </div>
    </div>
  );
};

export default CurrentLocation;
