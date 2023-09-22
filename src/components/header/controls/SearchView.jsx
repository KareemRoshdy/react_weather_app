import { BiArrowBack } from "react-icons/bi";
import ItemView from "./ItemView";

const SearchView = ({
  closeSearchView,
  openSearch,
  handelSearch,
  handelClick,
  searchVal,
  country,
}) => {
  return (
    <div className={`search-view ${openSearch && "active"}`}>
      <div className="search-field flex align-center gap-16">
        <div className="icon" onClick={closeSearchView}>
          <BiArrowBack />
        </div>

        <input
          type="text"
          placeholder="search City..."
          value={searchVal}
          onChange={(e) => handelSearch(e.target.value)}
        />
      </div>

      <div className="items-container">
        {country ? (
          country?.map((c) => (
            <ItemView handelClick={handelClick} c={c} key={c.id} />
          ))
        ) : searchVal ? (
          <div className="no-result">Loading...</div>
        ) : (
          <div className="no-result">No Results</div>
        )}
      </div>
    </div>
  );
};

export default SearchView;
