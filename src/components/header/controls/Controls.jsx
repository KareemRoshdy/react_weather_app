import SearchInput from "./SearchInput";
import SearchView from "./SearchView";
import CurrentLocation from "./CurrentLocation";

const Controls = ({
  openSearchInput,
  open,
  closeSearchInput,
  openSearch,
  closeSearchView,
  openSearchView,
  handelSearch,
  handelClick,
  searchVal,
  country,
  getLocation,
}) => {
  return (
    <div className="ctrl flex align-center space-between gap-20">
      <SearchInput
        open={open}
        openSearchInput={openSearchInput}
        closeSearchInput={closeSearchInput}
        handelSearch={handelSearch}
        handelClick={handelClick}
        searchVal={searchVal}
        country={country}
      />

      <SearchView
        openSearch={openSearch}
        closeSearchView={closeSearchView}
        handelSearch={handelSearch}
        handelClick={handelClick}
        searchVal={searchVal}
        country={country}
      />

      <CurrentLocation
        getLocation={getLocation}
        openSearchView={openSearchView}
      />
    </div>
  );
};

export default Controls;
