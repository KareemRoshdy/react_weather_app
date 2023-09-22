import "./header.css";

import Logo from "./logo/Logo";
import Controls from "./controls/Controls";

const Header = ({
  handelSearch,
  handelClick,
  searchVal,
  country,
  open,
  openSearchInput,
  closeSearchInput,
  openSearch,
  openSearchView,
  closeSearchView,
  getLocation,
}) => {
  return (
    <header className="header flex align-center space-between gap-20">
      <Logo />

      <Controls
        openSearchView={openSearchView}
        closeSearchView={closeSearchView}
        openSearch={openSearch}
        handelSearch={handelSearch}
        handelClick={handelClick}
        searchVal={searchVal}
        country={country}
        open={open}
        openSearchInput={openSearchInput}
        closeSearchInput={closeSearchInput}
        getLocation={getLocation}
      />
    </header>
  );
};

export default Header;
