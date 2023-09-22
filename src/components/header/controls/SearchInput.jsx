import { HiSearch, HiX } from "react-icons/hi";
import ItemView from "./ItemView";

const SearchInput = ({
  open,
  openSearchInput,
  closeSearchInput,
  handelSearch,
  handelClick,
  searchVal,
  country,
}) => {
  return (
    <div className={`search flex align-center gap-10 ${open && "open"}`}>
      <div className="icon ">
        <HiSearch />
      </div>

      <input
        type="text"
        placeholder="search City..."
        value={searchVal}
        onChange={(e) => {
          e.target.value === "" ? closeSearchInput() : openSearchInput();
          handelSearch(e.target.value);
        }}
      />

      <div className="search-input-view">
        <div className="items-container">
          <div className="icon close" onClick={closeSearchInput}>
            <HiX />
          </div>

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
    </div>
  );
};

export default SearchInput;
